import type { VariantProps } from 'class-variance-authority'

declare global {
    type CVAProps<T> = VariantProps<T>
}
