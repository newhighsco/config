declare module '*'

declare module '*.svg' {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const content: string

  export { ReactComponent }
  export default content
}

declare module '*.png'

declare module '*.jpg' {
  const content: unknown
  export default content
}
