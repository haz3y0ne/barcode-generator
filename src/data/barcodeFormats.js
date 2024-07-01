export const barcodeFormats = {
  CODE128: {
    description:
      "High-density linear barcode symbology capable of encoding all 128 ASCII characters.",
    placeholder: "123456789012345678901234567890123456789012345678",
    maxLength: 48,
    link: "https://en.wikipedia.org/wiki/Code_128",
  },
  CODE128A: {
    description:
      "Subset of CODE128 that encodes uppercase letters, numbers, and control characters.",
    placeholder: "123456789012345678901234567890123456789012345678",
    maxLength: 48,
    link: "https://en.wikipedia.org/wiki/Code_128#Character_set",
  },
  CODE128B: {
    description:
      "Subset of CODE128 that encodes upper and lower case letters, numbers, and special characters.",
    placeholder: "123456789012345678901234567890123456789012345678",
    maxLength: 48,
    link: "https://en.wikipedia.org/wiki/Code_128#Character_set",
  },
  CODE128C: {
    description:
      "Subset of CODE128 that encodes pairs of digits, optimizing for numeric data.",
    placeholder: "123456789012345678901234567890123456789012345678",
    maxLength: 48,
    link: "https://en.wikipedia.org/wiki/Code_128#Character_set",
  },
  EAN13: {
    description:
      "13-digit European Article Number used internationally for marking products often sold at retail point of sale.",
    placeholder: "1234567890128",
    maxLength: 13,
    link: "https://en.wikipedia.org/wiki/International_Article_Number",
  },
  EAN8: {
    description:
      "8-digit European Article Number used for smaller packages where an EAN-13 barcode would be too large.",
    placeholder: "12345670",
    maxLength: 8,
    link: "https://en.wikipedia.org/wiki/EAN-8",
  },
  EAN5: {
    description:
      "2-digit or 5-digit supplement to EAN-13 or UPC-A barcodes used to represent additional data.",
    placeholder: "12345",
    maxLength: 5,
    link: "https://en.wikipedia.org/wiki/International_Article_Number#EAN_2_and_EAN_5",
  },
  EAN2: {
    description:
      "2-digit supplement to EAN-13 or UPC-A barcodes often used on books and periodicals to indicate issue number.",
    placeholder: "12",
    maxLength: 2,
    link: "https://en.wikipedia.org/wiki/International_Article_Number#EAN_2_and_EAN_5",
  },
  UPC: {
    description:
      "12-digit Universal Product Code used in North America for marking products often sold at retail point of sale.",
    placeholder: "123456789012",
    maxLength: 12,
    link: "https://en.wikipedia.org/wiki/Universal_Product_Code",
  },
  UPCE: {
    description:
      "8-digit compressed form of the UPC code used for marking small packages.",
    placeholder: "01234565",
    maxLength: 8,
    link: "https://en.wikipedia.org/wiki/Universal_Product_Code#UPC-E",
  },
  CODE39: {
    description:
      "Variable length barcode capable of encoding alphanumeric data and a few special characters.",
    placeholder: "CODE39EXAMPLE",
    maxLength: 48,
    link: "https://en.wikipedia.org/wiki/Code_39",
  },
  ITF: {
    description: "Interleaved 2 of 5 barcode often used for packaging.",
    placeholder: "123456789012345678901234567890123456789012345678",
    maxLength: 48,
    link: "https://en.wikipedia.org/wiki/Interleaved_2_of_5",
  },
  ITF14: {
    description:
      "14-digit Interleaved 2 of 5 barcode used to mark packages of products with an EAN-13 barcode.",
    placeholder: "12345678901231",
    maxLength: 14,
    link: "https://en.wikipedia.org/wiki/ITF-14",
  },
  MSI: {
    description:
      "Modified Plessey barcode often used for inventory control in retail applications.",
    placeholder: "123456789012345678901234567890123456789012345678",
    maxLength: 48,
    link: "https://en.wikipedia.org/wiki/MSI_Barcode",
  },
  MSI10: {
    description:
      "Variation of MSI with a mod 10 check digit for additional security.",
    placeholder: "123456789012345678901234567890123456789012345678",
    maxLength: 48,
    link: "https://en.wikipedia.org/wiki/MSI_Barcode#Mod_10",
  },
  MSI11: {
    description:
      "Variation of MSI with a mod 11 check digit for additional security.",
    placeholder: "123456789012345678901234567890123456789012345678",
    maxLength: 48,
    link: "https://en.wikipedia.org/wiki/MSI_Barcode#Mod_11",
  },
  MSI1010: {
    description:
      "Variation of MSI with two mod 10 check digits for higher security.",
    placeholder: "123456789012345678901234567890123456789012345678",
    maxLength: 48,
    link: "https://en.wikipedia.org/wiki/MSI_Barcode#Mod_10_Mod_10",
  },
  MSI1110: {
    description:
      "Variation of MSI with a mod 11 and a mod 10 check digit for higher security.",
    placeholder: "123456789012345678901234567890123456789012345678",
    maxLength: 48,
    link: "https://en.wikipedia.org/wiki/MSI_Barcode#Mod_11_Mod_10",
  },
  pharmacode: {
    description:
      "Barcode used in the pharmaceutical industry for package identification.",
    placeholder: "123456",
    maxLength: 6,
    link: "https://en.wikipedia.org/wiki/Pharmacode",
  },
  codabar: {
    description: "Barcode used in libraries, blood banks, and airbills.",
    placeholder: "A123456B",
    maxLength: 20,
    link: "https://en.wikipedia.org/wiki/Codabar",
  },
  QR: {
    description:
      "Two-dimensional barcode that can hold a large amount of data, often used for URLs.",
    placeholder: "https://example.com",
    maxLength: 500,
    link: "https://en.wikipedia.org/wiki/QR_code",
  },
};