import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Search, Users, Heart, Repeat } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold text-foreground sm:text-5xl">How SkillShare Works</h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Building lasting friendships through small, repeated shared learning experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex flex-col items-center gap-8 sm:flex-row">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-primary/10 text-3xl font-bold text-primary">
                  1
                </div>
                <Card className="flex-1">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                      <Search className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-foreground">Pick a Workshop</h3>
                    <p className="text-pretty leading-relaxed text-muted-foreground">
                      Browse our offerings and choose a workshop that interests you. Whether it's practical skills like
                      cooking or creative pursuits like photography, there's something for everyone. All workshops are
                      free and beginner-friendly.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center gap-8 sm:flex-row">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-secondary/10 text-3xl font-bold text-secondary">
                  2
                </div>
                <Card className="flex-1">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-foreground">Show Up & Participate</h3>
                    <p className="text-pretty leading-relaxed text-muted-foreground">
                      Join a small group of 12–15 fellow students. Our intimate group sizes ensure everyone can
                      participate meaningfully. Learn from a peer leader in a relaxed, supportive environment where
                      questions are encouraged and mistakes are part of the process.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center gap-8 sm:flex-row">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-accent/20 text-3xl font-bold text-accent-foreground">
                  3
                </div>
                <Card className="flex-1">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20">
                      <Heart className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-foreground">Build Connections Over Time</h3>
                    <p className="text-pretty leading-relaxed text-muted-foreground">
                      Attend regularly and watch friendships naturally develop. Research shows that repeated shared
                      experiences are key to forming meaningful relationships. Through learning together, you'll build a
                      supportive community that extends beyond the workshops.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infographic Section */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground">The SkillShare Formula</h2>
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">Small Groups</h3>
                <p className="text-sm text-muted-foreground">
                  12–15 students ensure everyone can contribute and connect
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10">
                  <Repeat className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">Repeated Contact</h3>
                <p className="text-sm text-muted-foreground">
                  Regular workshops help build lasting friendships naturally
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/20">
                  <Heart className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">Shared Learning</h3>
                <p className="text-sm text-muted-foreground">Learning together creates bonds and builds confidence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-foreground">What Makes Us Different</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Peer-Led Learning Format</h3>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    Our workshops are led by fellow students who are passionate about sharing their skills. This creates
                    a comfortable, relatable environment where learning feels natural and fun.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Mix of Practical & Creative Skills</h3>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    From study strategies to watercolor painting, we offer a diverse range of workshops. This variety
                    helps you discover new interests while developing useful abilities.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Community Over Competition</h3>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    SkillShare is about building connections, not competing. Everyone starts as a beginner at something,
                    and our supportive environment celebrates progress over perfection.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl rounded-3xl bg-gradient-to-br from-primary to-secondary p-8 text-center sm:p-12">
            <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl">Ready to Get Started?</h2>
            <p className="mt-4 text-pretty text-lg text-white/90">
              Join a workshop today and start building your community at UIUC.
            </p>
            <Button size="lg" variant="secondary" asChild className="mt-8">
              <Link href="/workshops">Browse Workshops</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
