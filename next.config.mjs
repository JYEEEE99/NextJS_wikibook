/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: (() => {
    let compilerConfig = {
      //styledComponents 활성화
      styledComponents: true,
    };
    if (process.env.NODE_ENV === "production") {
      compilerConfig = {
        ...compilerConfig,
        // 프로덕션 환경에서는 리액트 테스팅 라이브러리에서 사용하는 data-testid 속성을 삭제
        reactRemoveProperties: { properties: ["^data-testid$"] },
      };
    }
    return compilerConfig;
  })(),
  async rewrites() {
    return [
      {
        // ex. /api/proxy
        source: `${process.env.NEXT_PUBLIC_API_BASE_PATH}/:match*`,
        // ex. http://localhost:8000
        destination: `${process.env.API_BASEURL}/match*`,
      },
    ];
  },
};

export default nextConfig;
