// Steganography utilities using LSB (Least Significant Bit) technique

const HEADER_MARKER = "STEG";
const HEADER_LENGTH = 4 + 4; // 4 bytes for marker + 4 bytes for message length

/**
 * Encodes a text message into an image using LSB steganography
 */
export const encodeMessage = (
  imageData: ImageData,
  message: string
): ImageData => {
  const encodedData = new ImageData(
    new Uint8ClampedArray(imageData.data),
    imageData.width,
    imageData.height
  );
  
  const messageBytes = new TextEncoder().encode(message);
  const totalBits = (HEADER_LENGTH + messageBytes.length) * 8;
  
  // Check if image is large enough
  const availableBits = imageData.data.length;
  if (totalBits > availableBits) {
    throw new Error("Message is too large for this image");
  }
  
  let bitIndex = 0;
  
  // Encode header marker
  const headerBytes = new TextEncoder().encode(HEADER_MARKER);
  for (let i = 0; i < headerBytes.length; i++) {
    for (let bit = 7; bit >= 0; bit--) {
      const bitValue = (headerBytes[i] >> bit) & 1;
      encodedData.data[bitIndex] = (encodedData.data[bitIndex] & 0xfe) | bitValue;
      bitIndex++;
    }
  }
  
  // Encode message length
  const lengthBytes = new Uint8Array(4);
  new DataView(lengthBytes.buffer).setUint32(0, messageBytes.length, false);
  for (let i = 0; i < lengthBytes.length; i++) {
    for (let bit = 7; bit >= 0; bit--) {
      const bitValue = (lengthBytes[i] >> bit) & 1;
      encodedData.data[bitIndex] = (encodedData.data[bitIndex] & 0xfe) | bitValue;
      bitIndex++;
    }
  }
  
  // Encode message
  for (let i = 0; i < messageBytes.length; i++) {
    for (let bit = 7; bit >= 0; bit--) {
      const bitValue = (messageBytes[i] >> bit) & 1;
      encodedData.data[bitIndex] = (encodedData.data[bitIndex] & 0xfe) | bitValue;
      bitIndex++;
    }
  }
  
  return encodedData;
};

/**
 * Decodes a text message from an image using LSB steganography
 */
export const decodeMessage = (imageData: ImageData): string | null => {
  let bitIndex = 0;
  
  // Read and verify header marker
  const headerBytes = new Uint8Array(4);
  for (let i = 0; i < headerBytes.length; i++) {
    let byte = 0;
    for (let bit = 7; bit >= 0; bit--) {
      const bitValue = imageData.data[bitIndex] & 1;
      byte = (byte << 1) | bitValue;
      bitIndex++;
    }
    headerBytes[i] = byte;
  }
  
  const headerString = new TextDecoder().decode(headerBytes);
  if (headerString !== HEADER_MARKER) {
    return null; // No hidden message found
  }
  
  // Read message length
  const lengthBytes = new Uint8Array(4);
  for (let i = 0; i < lengthBytes.length; i++) {
    let byte = 0;
    for (let bit = 7; bit >= 0; bit--) {
      const bitValue = imageData.data[bitIndex] & 1;
      byte = (byte << 1) | bitValue;
      bitIndex++;
    }
    lengthBytes[i] = byte;
  }
  
  const messageLength = new DataView(lengthBytes.buffer).getUint32(0, false);
  
  // Validate message length
  if (messageLength <= 0 || messageLength > 1000000) {
    return null; // Invalid message length
  }
  
  // Read message
  const messageBytes = new Uint8Array(messageLength);
  for (let i = 0; i < messageLength; i++) {
    let byte = 0;
    for (let bit = 7; bit >= 0; bit--) {
      const bitValue = imageData.data[bitIndex] & 1;
      byte = (byte << 1) | bitValue;
      bitIndex++;
    }
    messageBytes[i] = byte;
  }
  
  return new TextDecoder().decode(messageBytes);
};

/**
 * Loads an image file and returns ImageData
 */
export const loadImageData = (file: File): Promise<ImageData> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();
    
    reader.onload = (e) => {
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        
        if (!ctx) {
          reject(new Error("Failed to get canvas context"));
          return;
        }
        
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        resolve(imageData);
      };
      
      img.onerror = () => reject(new Error("Failed to load image"));
      img.src = e.target?.result as string;
    };
    
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
};

/**
 * Downloads ImageData as a PNG file
 */
export const downloadImage = (imageData: ImageData, filename: string) => {
  const canvas = document.createElement("canvas");
  canvas.width = imageData.width;
  canvas.height = imageData.height;
  const ctx = canvas.getContext("2d");
  
  if (!ctx) {
    throw new Error("Failed to get canvas context");
  }
  
  ctx.putImageData(imageData, 0, 0);
  
  canvas.toBlob((blob) => {
    if (!blob) {
      throw new Error("Failed to create blob");
    }
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }, "image/png");
};
