// src/types/inventory.ts
export interface Product {
  id: string
  name: string
  category: string
  sku: string
  price: number
  quantity: number
  status: "IN_STOCK" | "LOW_STOCK" | "OUT_OF_STOCK"
  warehouseId: number
  description?: string
  createdAt: Date
  updatedAt: Date
}

export interface InventoryStats {
  totalProducts: number
  totalValue: number
  lowStockCount: number
  outOfStockCount: number
}
