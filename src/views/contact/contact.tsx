import { Button, Input, Label, PageSection, Textarea } from "@/components";

export const Contact = () => (
  <PageSection title="contact">
    <div className="min-w-2xl mx-auto ">
      <form className="space-y-8 bg-white rounded-3xl p-10 shadow-xl border border-gray-200">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              required
              className="bg-gray-50 border-gray-300 focus:border-black focus:bg-white transition-colors h-12 rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
              className="bg-gray-50 border-gray-300 focus:border-black focus:bg-white transition-colors h-12 rounded-xl"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell me about your project..."
            rows={6}
            required
            className="bg-gray-50 border-gray-300 focus:border-black focus:bg-white transition-colors resize-none rounded-xl"
          />
        </div>

        <div className="text-center">
          <Button
            type="submit"
            className="bg-black hover:bg-gray-800 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Send Message
          </Button>
        </div>
      </form>
    </div>
  </PageSection>
);
