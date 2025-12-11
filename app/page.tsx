import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Calendar, Heart, Lightbulb, TrendingUp, Award } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Meet People. Learn Something New. Feel Like You Belong.
            </h1>
            <p className="mt-6 text-pretty text-lg text-muted-foreground sm:text-xl">
              Small, peer-led workshops that help UIUC students build community through shared learning experiences.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="/workshops">View Upcoming Workshops</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-transparent">
                <Link href="/for-volunteers">Become a Volunteer Leader</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
              <img
                src="/diverse-college-students-collaborating-at-workshop.jpg"
                alt="Students collaborating"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
              <img
                src="/students-doing-creative-activity-with-notebooks-an.jpg"
                alt="Creative workshop activity"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] sm:col-span-2 lg:col-span-1">
              <img
                src="/group-of-students-smiling-and-working-together.jpg"
                alt="Students working together"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
              Building Meaningful Connections
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              SkillShare helps students form meaningful friendships through repeated shared experiences. Workshops are
              free, welcoming, and built around practical and hobby-based skills — from cooking basics to photography to
              study strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid gap-6 sm:grid-cols-3">
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardContent className="flex flex-col items-center p-8 text-center">
                <Calendar className="mb-4 h-12 w-12 text-primary" />
                <h3 className="text-3xl font-bold text-foreground">2 Workshops</h3>
                <p className="mt-2 text-muted-foreground">Each week</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-secondary/20 bg-secondary/5">
              <CardContent className="flex flex-col items-center p-8 text-center">
                <Users className="mb-4 h-12 w-12 text-secondary" />
                <h3 className="text-3xl font-bold text-foreground">12–15 Students</h3>
                <p className="mt-2 text-muted-foreground">Per group</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-accent/30 bg-accent/10">
              <CardContent className="flex flex-col items-center p-8 text-center">
                <Heart className="mb-4 h-12 w-12 text-accent-foreground" />
                <h3 className="text-xl font-bold text-foreground">Skill + Community</h3>
                <p className="mt-2 text-muted-foreground">+ Confidence</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">Why SkillShare?</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Small Groups</h3>
              <p className="text-muted-foreground">
                Intimate 12-15 person workshops designed to foster real conversations and connections.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10">
                <Lightbulb className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Practical Skills</h3>
              <p className="text-muted-foreground">
                Learn useful skills from cooking to study strategies, photography to personal finance.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/20">
                <Heart className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Peer-Led</h3>
              <p className="text-muted-foreground">
                Fellow students share their passions in a relaxed, welcoming environment.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Build Confidence</h3>
              <p className="text-muted-foreground">
                Grow personally while developing new abilities in a supportive community.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">100% Free</h3>
              <p className="text-muted-foreground">
                All workshops are completely free for UIUC students. No barriers, just community.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/20">
                <Calendar className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Regular Sessions</h3>
              <p className="text-muted-foreground">
                Repeated contact helps build lasting friendships through shared experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-secondary p-8 text-center sm:p-12 lg:p-16">
            <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl">Ready to Join the Community?</h2>
            <p className="mt-4 text-pretty text-lg text-white/90">
              Browse our upcoming workshops and find something that sparks your interest.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
                <Link href="/workshops">View Workshops</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full border-white bg-white/10 text-white hover:bg-white/20 sm:w-auto"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
