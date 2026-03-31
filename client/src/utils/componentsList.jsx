export const componentsList = {
    BoxCase: {
      "Standard Box": { price: 2000, image: "/boxcase.png" },
      "RGB Box": { price: 5000, image: "/boxcase.png" },
      "Full Tower Box": { price: 8000, image: "/boxcase.png" },
    },
    Motherboard: {
      "ASUS ROG Strix": { price: 30000, image: "/motherboard.png" },
      "MSI B450": { price: 15000, image: "/motherboard.png" },
      "Gigabyte Aorus": { price: 25000, image: "/motherboard.png" },
    },
    Processor: {
      "Intel i9": { price: 50000, image: "/processor.png" },
      "AMD Ryzen 9": { price: 45000, image: "/processor.png" },
    },
    RAM: {
      "16GB DDR4": { price: 7000, image: "/ram.png" },
      "32GB DDR4": { price: 12000, image: "/ram.png" },
    },
    Monitor: {
      "24-inch Monitor": { price: 20000, image: "/monitor.png" },
      "27-inch Monitor": { price: 25000, image: "/monitor.png" },
    },
    GPU: {
      "NVIDIA RTX 3080": { price: 80000, image: "/gpu.png" },
      "AMD Radeon RX 6800": { price: 70000, image: "/gpu.png" },
    },
    Storage: {
      "1TB SSD": { price: 10000, image: "/storage.png" },
      "2TB HDD": { price: 8000, image: "/storage.png" },
    },
    PowerSupply: {
      "750W PSU": { price: 10000, image: "/powersupply.png" },
      "850W PSU": { price: 12000, image: "/powersupply.png" },
    },
    Cooling: {
      "Air Cooler": { price: 5000, image: "/coolant.png" },
      "Liquid Cooler": { price: 10000, image: "/coolant.png" },
    },
    Mouse: {
      "Logitech MX Master": { price: 10000, image: "/mouse.png" },
      "Razer DeathAdder": { price: 8000, image: "/mouse.png" },
    },
    Keyboard: {
      "Mechanical Keyboard": { price: 15000, image: "/keyboard.png" },
      "Membrane Keyboard": { price: 6000, image: "/keyboard.png" },
    },
  };

export const calculateTotalPrice = (components) => {
    return Object.values(components).reduce((total, component) => {
      return total + component.price;
    }, 0);
  };

export const generateRandomId = () => {
    return Math.random().toString(36).substring(2, 15);
  };

export const preBuiltConfigs = [
  {
    id: 'prebuilt-gaming-beast',
    name: 'Gaming Beast',
    image: '/gamingpc.png',
    components: {
      Processor: {
        category: 'Processor',
        component: 'Intel i9',
        price: 50000,
        image: '/processor.png'
      },
      GPU: {
        category: 'GPU',
        component: 'NVIDIA RTX 3080',
        price: 80000,
        image: '/gpu.png'
      },
      RAM: {
        category: 'RAM',
        component: '32GB DDR4',
        price: 12000,
        image: '/ram.png'
      },
      BoxCase: {
        category: 'BoxCase',
        component: 'RGB Box',
        price: 5000,
        image: '/boxcase.png'
      },
      Motherboard: {
        category: 'Motherboard',
        component: 'ASUS ROG Strix',
        price: 30000,
        image: '/motherboard.png'
      },
      Storage: {
        category: 'Storage',
        component: '1TB SSD',
        price: 10000,
        image: '/storage.png'
      },
      PowerSupply: {
        category: 'PowerSupply',
        component: '850W PSU',
        price: 12000,
        image: '/powersupply.png'
      },
      Cooling: {
        category: 'Cooling',
        component: 'Liquid Cooler',
        price: 10000,
        image: '/coolant.png'
      },
      Monitor: {
        category: 'Monitor',
        component: '27-inch Monitor',
        price: 25000,
        image: '/monitor.png'
      },
      Mouse: {
        category: 'Mouse',
        component: 'Razer DeathAdder',
        price: 8000,
        image: '/mouse.png'
      },
      Keyboard: {
        category: 'Keyboard',
        component: 'Mechanical Keyboard',
        price: 15000,
        image: '/keyboard.png'
      }
    },
    totalPrice: 257000,
    createdAt: '2024-01-01T00:00:00.000Z',
    isPreBuilt: true
  },
  {
    id: 'prebuilt-budget-warrior',
    name: 'Budget Warrior',
    image: '/budgetpc.png',
    components: {
      Processor: {
        category: 'Processor',
        component: 'AMD Ryzen 9',
        price: 45000,
        image: '/processor.png'
      },
      GPU: {
        category: 'GPU',
        component: 'AMD Radeon RX 6800',
        price: 70000,
        image: '/gpu.png'
      },
      RAM: {
        category: 'RAM',
        component: '16GB DDR4',
        price: 7000,
        image: '/ram.png'
      },
      BoxCase: {
        category: 'BoxCase',
        component: 'Standard Box',
        price: 2000,
        image: '/boxcase.png'
      },
      Motherboard: {
        category: 'Motherboard',
        component: 'MSI B450',
        price: 15000,
        image: '/motherboard.png'
      },
      Storage: {
        category: 'Storage',
        component: '2TB HDD',
        price: 8000,
        image: '/storage.png'
      },
      PowerSupply: {
        category: 'PowerSupply',
        component: '750W PSU',
        price: 10000,
        image: '/powersupply.png'
      },
      Cooling: {
        category: 'Cooling',
        component: 'Air Cooler',
        price: 5000,
        image: '/coolant.png'
      },
      Monitor: {
        category: 'Monitor',
        component: '24-inch Monitor',
        price: 20000,
        image: '/monitor.png'
      },
      Mouse: {
        category: 'Mouse',
        component: 'Logitech MX Master',
        price: 10000,
        image: '/mouse.png'
      },
      Keyboard: {
        category: 'Keyboard',
        component: 'Membrane Keyboard',
        price: 6000,
        image: '/keyboard.png'
      }
    },
    totalPrice: 198000,
    createdAt: '2024-01-01T00:00:00.000Z',
    isPreBuilt: true
  },
  {
    id: 'prebuilt-super-builder',
    name: 'Super Builder',
    image: '/superpc.png',
    components: {
      Processor: {
        category: 'Processor',
        component: 'Intel i9',
        price: 50000,
        image: '/processor.png'
      },
      GPU: {
        category: 'GPU',
        component: 'NVIDIA RTX 3080',
        price: 80000,
        image: '/gpu.png'
      },
      RAM: {
        category: 'RAM',
        component: '32GB DDR4',
        price: 12000,
        image: '/ram.png'
      },
      BoxCase: {
        category: 'BoxCase',
        component: 'Full Tower Box',
        price: 8000,
        image: '/boxcase.png'
      },
      Motherboard: {
        category: 'Motherboard',
        component: 'ASUS ROG Strix',
        price: 30000,
        image: '/motherboard.png'
      },
      Storage: {
        category: 'Storage',
        component: '1TB SSD',
        price: 10000,
        image: '/storage.png'
      },
      PowerSupply: {
        category: 'PowerSupply',
        component: '850W PSU',
        price: 12000,
        image: '/powersupply.png'
      },
      Cooling: {
        category: 'Cooling',
        component: 'Liquid Cooler',
        price: 10000,
        image: '/coolant.png'
      },
      Monitor: {
        category: 'Monitor',
        component: '27-inch Monitor',
        price: 25000,
        image: '/monitor.png'
      },
      Mouse: {
        category: 'Mouse',
        component: 'Razer DeathAdder',
        price: 8000,
        image: '/mouse.png'
      },
      Keyboard: {
        category: 'Keyboard',
        component: 'Mechanical Keyboard',
        price: 15000,
        image: '/keyboard.png'
      }
    },
    totalPrice: 260000,
    createdAt: '2024-01-01T00:00:00.000Z',
    isPreBuilt: true
  }
];
