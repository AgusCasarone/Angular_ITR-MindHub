// products.js

import { Product } from "../app/interfaces/product";

export const products: Product[] = [
  {
      _id: "1",
      title: "Smartphone",
      colors: ["black", "white", "blue"],
      stock: 25,
      images: ['../../../assets/images/smartphone1.jpg', '../../../assets/images/smartphone2.jpg'],
      description: "A high-end smartphone with a large display and powerful processor.",
      price: 799.99,
      onSale: true
  },
  {
      _id: "2",
      title: "Laptop",
      colors: ["silver", "gray"],
      stock: 10,
      images: ['../../../assets/images/laptop1.webp', '../../../assets/images/laptop2.webp'],
      description: "A lightweight laptop with a long battery life and fast performance.",
      price: 1199.99,
      onSale: false
  },
  {
      _id: "3",
      title: "Wireless Headphones",
      colors: ["black", "red"],
      stock: 50,
      images: ['../../../assets/images/WirelessHeadphones1.jpg', '../../../assets/images/WirelessHeadphones2.jpg'],
      description: "Noise-cancelling over-ear headphones with long battery life.",
      price: 199.99,
      onSale: true
  },
  {
      _id: "4",
      title: "Smartwatch",
      colors: ["black", "pink"],
      stock: 30,
      images: ['../../../assets/images/Smartwatch1.jpg', '../../../assets/images/Smartwatch2.jpg'],
      description: "A smartwatch with fitness tracking and notifications.",
      price: 149.99,
      onSale: false
  },
  {
      _id: "5",
      title: "Tablet",
      colors: ["black", "gold"],
      stock: 20,
      images: ['../../../assets/images/Tablet1.avif', '../../../assets/images/Tablet2.avif'],
      description: "A tablet with a high-resolution screen and powerful processor.",
      price: 499.99,
      onSale: true
  },
  {
      _id: "6",
      title: "Bluetooth Speaker",
      colors: ["black", "blue"],
      stock: 40,
      images: ['../../../assets/images/bluetoothSpeaker1.jpg', '../../../assets/images/bluetoothSpeaker2.jpg'],
      description: "Portable Bluetooth speaker with excellent sound quality.",
      price: 89.99,
      onSale: false
  },
  {
      _id: "7",
      title: "External Hard Drive",
      colors: ["black"],
      stock: 100,
      images: ['../../../assets/images/externalHardDrive1.webp', '../../../assets/images/externalHardDrive2.jpg'],
      description: "1TB external hard drive with fast data transfer speeds.",
      price: 59.99,
      onSale: true
  },
  {
      _id: "8",
      title: "Gaming Console",
      colors: ["black", "white"],
      stock: 15,
      images: ['../../../assets/images/gamingConsole1.jpg', '../../../assets/images/gamingConsole2.jpg'],
      description: "Next-generation gaming console with high performance.",
      price: 499.99,
      onSale: false
  },
  {
      _id: "9",
      title: "Monitor",
      colors: ["black"],
      stock: 12,
      images: ['../../../assets/images/monitor1.jpg', '../../../assets/images/monitor2.jpg'],
      description: "27-inch 4K monitor with vibrant colors and high refresh rate.",
      price: 349.99,
      onSale: true
  },
  {
      _id: "10",
      title: "Keyboard",
      colors: ["black", "white"],
      stock: 60,
      images: ['../../../assets/images/keyboard1.png', '../../../assets/images/keyboard2.jpg'],
      description: "Mechanical keyboard with customizable RGB lighting.",
      price: 129.99,
      onSale: false
  }
];
