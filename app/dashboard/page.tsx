import SectionHeading from '@/components/SectionHeading'

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeading title="Dashboard" />
      
      <div className="max-w-4xl mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Total Projects</h3>
            <p className="text-3xl font-bold text-blue-600">12</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Technologies</h3>
            <p className="text-3xl font-bold text-green-600">8+</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Years Experience</h3>
            <p className="text-3xl font-bold text-purple-600">3+</p>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400">Recently updated portfolio website</p>
              <p className="text-xs text-gray-500 dark:text-gray-500">2 hours ago</p>
            </div>
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400">Deployed new project to production</p>
              <p className="text-xs text-gray-500 dark:text-gray-500">1 day ago</p>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">Started learning a new framework</p>
              <p className="text-xs text-gray-500 dark:text-gray-500">3 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
