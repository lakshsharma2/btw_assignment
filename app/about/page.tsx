import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Lightbulb, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold text-foreground sm:text-5xl">About SkillShare</h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              A student-driven nonprofit creating belonging through shared learning.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl space-y-12">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Our Mission</h2>
                <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                  SkillShare creates a welcoming environment that builds confidence, reduces isolation, and supports
                  meaningful connection through small peer led workshops where students learn practical and hobby-based
                  skills together.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10">
                  <Lightbulb className="h-6 w-6 text-secondary" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Our Vision</h2>
                <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                  A campus where every student feels they belong through shared learning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Our Story</h2>
            <div className="space-y-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              <p>
                SkillShare was founded by a student who came to UIUC from out of state, excited for college but quickly
                feeling isolated in a sea of unfamiliar faces. Traditional ways of making friends like joining massive
                clubs or going to crowded parties felt overwhelming and impersonal.
              </p>
              <p>
                Everything changed when they joined a small cooking group. Meeting the same people week after week while
                learning something practical created natural conversation and genuine friendships. These weren't
                networking connections or casual acquaintances, they were real relationships built through shared
                experiences.
              </p>
              <p>
                That experience inspired SkillShare: a nonprofit organization creating structured opportunities for
                students to form meaningful connections through repeated, small  group learning experiences. We believe
                everyone deserves to feel like they belong, and sometimes all it takes is the right environment to make
                it happen.
              </p>
              <p className="font-semibold text-foreground">
                Created by students, for students. We understand what it's like to search for community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground">What We Value</h2>
            <div className="grid gap-8 sm:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Belonging</h3>
                  <p className="text-pretty text-muted-foreground">
                    Every student deserves to feel welcomed and valued in a supportive community.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10">
                    <Heart className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Approachability</h3>
                  <p className="text-pretty text-muted-foreground">
                    We create low-pressure, judgment-free spaces where everyone can participate comfortably.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20">
                    <Lightbulb className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Growth</h3>
                  <p className="text-pretty text-muted-foreground">
                    Learning new skills builds confidence and opens doors to personal development.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Intentionality</h3>
                  <p className="text-pretty text-muted-foreground">
                    We thoughtfully design experiences that foster genuine human connection.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-foreground">Making a Difference</h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Since our founding, SkillShare has helped hundreds of UIUC students find their community. Our workshops
              provide a structured way to meet people organically, learn valuable skills, and combat the isolation that
              too many students experience on large campuses.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
