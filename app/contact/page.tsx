import SectionHeading from '@/components/SectionHeading'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeading title="Get In Touch" />
      
      <div className="max-w-2xl mx-auto mt-8">
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          I&apos;d love to hear from you! Whether you have a question, want to collaborate, 
          or just want to say hi, feel free to reach out.
        </p>
        
        <form className="space-y-6" action="/api/contact" method="POST">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <Input 
              type="text" 
              id="name" 
              name="name" 
              required 
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <Input 
              type="email" 
              id="email" 
              name="email" 
              required 
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <Textarea 
              id="message" 
              name="message" 
              rows={5} 
              required 
              placeholder="Your message..."
            />
          </div>
          
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  )
}
