"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock user data - in a real app, this would come from an API or auth context
  useEffect(() => {
    // Simulate API fetch delay
    const timer = setTimeout(() => {
      setUser({
        name: "John Doe",
        email: "john.doe@example.com",
        avatar: "/logos/aifshop-logo.svg", // Using our custom logo as avatar
        role: "Customer",
        memberSince: "Sep 2023",
        recentOrders: [
          { id: "ORD-1234", date: "2025-09-15", total: "$129.99", status: "Delivered" },
          { id: "ORD-1235", date: "2025-09-01", total: "$79.50", status: "Shipped" },
          { id: "ORD-1236", date: "2025-08-22", total: "$249.99", status: "Processing" },
        ],
        shippingAddress: {
          street: "123 Main Street",
          city: "Anytown",
          state: "CA",
          zipCode: "12345",
          country: "USA"
        }
      });
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    // In a real app, this would call an authentication service logout method
    alert("Logging out...");
    window.location.href = "/login";
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Not signed in</h2>
          <p className="mb-4">Please sign in to view your profile</p>
          <Link 
            href="/login" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
          >
            Go to login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header with navigation */}
      <Navigation showAuthButtons={true} currentPage="profile" />

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Profile header section */}
        <div className="px-4 sm:px-0">
          <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 flex flex-col sm:flex-row sm:items-center">
              <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                <div className="h-24 w-24 rounded-full overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-gray-700 border-4 border-white dark:border-gray-700">
                  <Image 
                    className="p-2 dark:invert"
                    src={user.avatar}
                    alt="Profile" 
                    width={64} 
                    height={64}
                  />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                <div className="mt-1">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {user.role}
                  </span>
                  <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                    Member since {user.memberSince}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Account information card */}
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium border-b pb-2 mb-4 border-gray-200 dark:border-gray-700">
                Account Information
              </h2>
              <dl className="grid grid-cols-1 gap-x-4 gap-y-6">
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Full Name</dt>
                  <dd className="mt-1 text-sm">{user.name}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Email Address</dt>
                  <dd className="mt-1 text-sm">{user.email}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Account Type</dt>
                  <dd className="mt-1 text-sm">{user.role}</dd>
                </div>
              </dl>
              <div className="mt-6">
                <button className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded text-sm font-medium">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* Shipping address card */}
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium border-b pb-2 mb-4 border-gray-200 dark:border-gray-700">
                Shipping Address
              </h2>
              <address className="not-italic">
                <p className="text-sm">{user.shippingAddress.street}</p>
                <p className="text-sm">
                  {user.shippingAddress.city}, {user.shippingAddress.state} {user.shippingAddress.zipCode}
                </p>
                <p className="text-sm">{user.shippingAddress.country}</p>
              </address>
              <div className="mt-6">
                <button className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded text-sm font-medium">
                  Update Address
                </button>
              </div>
            </div>
          </div>

          {/* Security card */}
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium border-b pb-2 mb-4 border-gray-200 dark:border-gray-700">
                Security Settings
              </h2>
              <div className="mb-4">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Password</dt>
                <dd className="mt-1 text-sm">••••••••</dd>
              </div>
              <button className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded text-sm font-medium mb-2 w-full sm:w-auto">
                Change Password
              </button>
              <button className="bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-4 py-2 rounded text-sm font-medium w-full sm:w-auto">
                Two-Factor Authentication
              </button>
            </div>
          </div>
        </div>

        {/* Recent orders section */}
        <div className="mt-8">
          <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg leading-6 font-medium">Recent Orders</h2>
              <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
                Your most recent purchases.
              </p>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-900/50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Order ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Total
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">View</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {user.recentOrders.map((order) => (
                      <tr key={order.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {order.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {order.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {order.total}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${order.status === 'Delivered' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' : 
                            order.status === 'Shipped' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' : 
                            'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'}`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a href="#" className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                            View
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 dark:bg-gray-900/50 text-right sm:px-6">
              <button className="bg-white dark:bg-gray-800 py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                View All Orders
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}