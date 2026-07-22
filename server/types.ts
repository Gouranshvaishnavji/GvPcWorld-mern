export type UserRole = 'user' | 'admin';

export interface AuthPayload {
  id: string;
  iat?: number;
  exp?: number;
}

export interface UserShape {
  _id?: any;
  name?: string;
  username?: string;
  email: string;
  password?: string;
  role?: UserRole;
  googleId?: string;
  profilePicture?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type ProductCategory =
  | 'cpu'
  | 'gpu'
  | 'motherboard'
  | 'ram'
  | 'storage'
  | 'psu'
  | 'case'
  | 'cooler';

export interface ProductShape {
  _id?: any;
  name: string;
  category: ProductCategory;
  price: number;
  stock?: number;
  image?: string;
  description?: string;
  specs?: Record<string, string>;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CartComponentShape {
  cpu?: any;
  gpu?: any;
  ram?: any;
  motherboard?: any;
  storage?: any;
  psu?: any;
  case?: any;
}

export interface CartItemShape {
  _id?: any;
  pcName?: string;
  components: CartComponentShape;
  totalPrice: number;
  quantity?: number;
}

export interface CartShape {
  _id?: any;
  userId: any;
  items: CartItemShape[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface RegisterBody {
  name: string;
  email: string;
  password: string;
}

export interface LoginBody {
  email: string;
  password: string;
}