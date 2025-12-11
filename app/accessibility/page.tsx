import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Keyboard, ImageIcon, Palette, ZoomIn, Smartphone, Layout, Volume2, AlertCircle, Mail } from "lucide-react"

export default function AccessibilityPage() {
  const features = [
    {
      icon: Keyboard,
      title: "Keyboard Navigation",
      description: "Our site can be fully navigated using only a keyboard.",
      details: [
        "Tab and Shift+Tab navigation through all interactive elements",
        "Clear focus indicators",
        "Skip-to-content link on every page",
      ],
    },
    {
      icon: ImageIcon,
      title: "Alt Text for Images",
      description: "We provide descriptive alternative text for all meaningful images.",
      details: ["This ensures that screen readers can convey important visual information to users."],
    },
    {
      icon: Palette,
      title: "High-Contrast Design",
      description: "Our color palette is chosen to improve readability and reduce eye strain.",
      details: ["High contrast between text and backgrounds", "Testing for WCAG AA/AAA contrast where possible"],
    },
    {
      icon: ZoomIn,
      title: "Adjustable Font & Zoom Compatibility",
      description:
        "The site supports browser-based text resizing and zooming up to 200% without loss of content or functionality.",
      details: [],
    },
    {
      icon: Smartphone,
      title: "Responsive & Mobile-Friendly Layout",
      description:
        "All content is accessible across devices, including tablets, phones, and assistive browsing technologies.",
      details: [],
    },
    {
      icon: Layout,
      title: "Clear Structure & Consistent Layout",
      description: "To make navigating easy for everyone, we provide:",
      details: ["Predictable menu structure", "Simple page layouts", "Clear headings and labels"],
    },
    {
      icon: Volume2,
      title: "Screen Reader Compatibility",
      description: "We use ARIA labels and semantic HTML to improve the experience for screen reader users.",
      details: [],
    },
    {
      icon: AlertCircle,
      title: "Error Prevention & Instructions",
      description: "Forms include:",
      details: ["Clear labels", "Helpful error messages", "Instructions for required fields"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-balance text-foreground md:text-5xl">Accessibility Features</h1>
          <p className="mx-auto max-w-2xl text-lg text-pretty text-muted-foreground">Our Commitment to Accessibility</p>
          <p className="mx-auto mt-4 max-w-3xl text-pretty text-muted-foreground">
            We are committed to making our website usable and accessible for all visitors, including people with
            disabilities. Below is an overview of the accessibility features we have implemented to create an inclusive
            online experience.
          </p>
        </div>

        {/* Visual Color Scheme Adjustment Section */}
        <Card className="mb-12 border-primary/20 bg-primary/5">
          <CardHeader>
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Palette className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl">Visual Color Scheme Adjustments</CardTitle>
            <CardDescription className="text-base">
              Choose a color scheme that works best for you. These options are designed to improve readability and
              reduce eye strain.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <button className="flex h-auto flex-col gap-3 rounded-lg border-2 border-gray-300 bg-white p-4 shadow-sm transition-all hover:border-primary hover:shadow-md hover:scale-105 active:scale-100">
                <div className="flex h-10 w-full gap-1 rounded border border-gray-200">
                  <div className="flex-1 rounded bg-white" />
                  <div className="flex-1 rounded bg-gray-900" />
                </div>
                <span className="text-sm font-semibold text-gray-900">Default</span>
              </button>
              <button className="flex h-auto flex-col gap-3 rounded-lg border-2 border-gray-300 bg-white p-4 shadow-sm transition-all hover:border-primary hover:shadow-md hover:scale-105 active:scale-100">
                <div className="flex h-10 w-full gap-1 rounded border border-gray-200">
                  <div className="flex-1 rounded bg-pink-700" />
                  <div className="flex-1 rounded bg-green-700" />
                </div>
                <span className="text-sm font-semibold text-gray-900">High Contrast</span>
              </button>
              <button className="flex h-auto flex-col gap-3 rounded-lg border-2 border-gray-300 bg-white p-4 shadow-sm transition-all hover:border-primary hover:shadow-md hover:scale-105 active:scale-100">
                <div className="flex h-10 w-full gap-1 rounded border border-gray-200">
                  <div className="flex-1 rounded bg-gray-900" />
                  <div className="flex-1 rounded bg-gray-100" />
                </div>
                <span className="text-sm font-semibold text-gray-900">Dark Mode</span>
              </button>
              <button className="flex h-auto flex-col gap-3 rounded-lg border-2 border-gray-300 bg-white p-4 shadow-sm transition-all hover:border-primary hover:shadow-md hover:scale-105 active:scale-100">
                <div className="flex h-10 w-full gap-1 rounded border border-gray-200">
                  <div className="flex-1 rounded bg-yellow-50" />
                  <div className="flex-1 rounded bg-gray-900" />
                </div>
                <span className="text-sm font-semibold text-gray-900">Warm Tones</span>
              </button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              These color schemes are optimized for users with visual impairments, color blindness, or light
              sensitivity.
            </p>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardHeader>
              {feature.details.length > 0 && (
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Accessibility Support Section */}
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl">Accessibility Support</CardTitle>
            <CardDescription className="text-base">
              If you experience any accessibility barriers, please contact us:
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <strong>Email:</strong>{" "}
                <a href="mailto:accessibility@skillshare.org" className="text-primary hover:underline">
                  accessibility@skillshare.org
                </a>
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Phone:</strong> (555) 123-4567
              </p>
            </div>
            <Button asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
