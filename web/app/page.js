"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-blue-50 dark:from-background dark:to-gray-900">
      <Navigation showAuthButtons={false} currentPage="home" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Hero Section with Warm Welcome */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="mb-6">
              <Image
                className="dark:invert mx-auto lg:mx-0"
                src="/logos/aifshop-logo.svg"
                alt="AIFSHOP Logo"
                width={220}
                height={46}
                priority
              />
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
              Chào bạn! <br/><span className="text-blue-600">Mua sắm thông minh</span> cùng AI
            </h1>
            
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
              Khám phá trải nghiệm mua sắm được cá nhân hóa với công nghệ AI hiện đại, giúp bạn tìm được những sản phẩm phù hợp nhất.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/login"
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 font-medium text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 shadow-md hover:shadow-lg"
              >
                Đăng nhập
              </Link>
              
              <Link
                href="/register"
                className="rounded-full border border-solid border-blue-600 text-blue-600 dark:text-blue-400 transition-colors flex items-center justify-center bg-transparent gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/30 font-medium text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8"
              >
                Đăng ký ngay
              </Link>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md h-64 sm:h-80 md:h-96">
              <div className="absolute inset-0 bg-blue-200 dark:bg-blue-900 rounded-xl overflow-hidden flex items-center justify-center">
                <svg className="w-full h-full text-blue-100 dark:text-blue-800 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="currentColor"></path>
                  <path d="M20,20 C40,10 60,10 80,20 C100,30 100,70 80,80 C60,90 40,90 20,80 C0,70 0,30 20,20 Z" fill="currentColor" fillOpacity="0.5"></path>
                </svg>
                <Image
                  src="/icons/shopping-icon.svg" 
                  alt="Shopping with AI"
                  width={200}
                  height={200}
                  className="relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Section with Friendly Icons */}
        <div className="mt-20 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Tại sao chọn <span className="text-blue-600">AIFSHOP</span>?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Mua sắm thông minh</h3>
              <p className="text-gray-600 dark:text-gray-300">AI của chúng tôi hiểu sở thích và đưa ra những gợi ý phù hợp nhất với bạn.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Thanh toán đơn giản</h3>
              <p className="text-gray-600 dark:text-gray-300">Quy trình thanh toán nhanh chóng và an toàn với nhiều phương thức thanh toán.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Giao hàng nhanh chóng</h3>
              <p className="text-gray-600 dark:text-gray-300">Đơn hàng của bạn sẽ được giao đến tận tay một cách nhanh chóng và chu đáo.</p>
            </div>
          </div>
        </div>
        
        {/* Testimonials Section - Adding a human touch */}
        <div className="mt-16 bg-blue-50 dark:bg-gray-800/50 p-8 rounded-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
            Khách hàng nói gì về chúng tôi
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                "AIFSHOP hiểu tôi muốn gì! Những gợi ý sản phẩm quá chuẩn xác, giúp tôi tiết kiệm thời gian tìm kiếm rất nhiều."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">NT</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">Nguyễn Thảo</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Khách hàng thân thiết</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                "Giao diện dễ sử dụng và thanh toán cực kỳ thuận tiện. Tôi đặc biệt thích tính năng trò chuyện với AI để được tư vấn."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">MH</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">Minh Hoàng</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Khách hàng mới</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
            Sẵn sàng trải nghiệm mua sắm thông minh?
          </h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tham gia cùng hàng nghìn khách hàng đã tin tưởng AIFSHOP cho trải nghiệm mua sắm tuyệt vời.
          </p>
          <Link
            href="/register"
            className="inline-block rounded-full border border-solid border-transparent transition-colors bg-blue-600 text-white hover:bg-blue-700 font-bold text-lg py-4 px-8 shadow-lg hover:shadow-xl"
          >
            Bắt đầu ngay hôm nay
          </Link>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 py-8 mt-20 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Image
                src="/logos/aifshop-logo.svg"
                alt="AIFSHOP Logo"
                width={120}
                height={30}
                className="dark:invert"
              />
              <p className="mt-2 text-gray-500 dark:text-gray-400">© 2025 AIFSHOP. All rights reserved.</p>
            </div>
            <div className="flex gap-8">
              <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</Link>
              <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
              <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Privacy</Link>
              <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}