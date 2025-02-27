import axios from "axios"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const token = localStorage.getItem('token') || ''

export const api = axios.create({
  headers: {
    Authorization: token,
  }
})