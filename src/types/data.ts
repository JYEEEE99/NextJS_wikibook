// 상품카테고리
export type Category = 'shoes' | 'colthes' | 'book'
// 상품상태
export type Condition = 'new' | 'used'
// 사용자
export type User = {
    id: number
    uesrname: string
    displayName: string
    email: string
    profileImageUrl: string
    description: string
}
// 상품
export type Product = {
    id: number
    category: Category
    title: string
    description: string
    imageUrl: string
    blurDateUrl: string
    price: number
    condition: Condition
    owner: User
}
// API 콘텍스트
 export type ApiContext = {
    apiRootUrl: string
}