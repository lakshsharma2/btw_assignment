import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Award, Users, Lightbulb, TrendingUp, FileText, Heart } from "lucide-react"
import volunteerHero from "@/public/college-student-leading-workshop-with-engaged-peer.jpg"

export default function ForVolunteersPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-secondary/10 to-accent/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold text-foreground sm:text-5xl">Lead a Workshop</h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Share your passion, develop leadership skills, and make a meaningful impact on campus.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl relative aspect-[16/9]">
            <Image src={volunteerHero} alt="Student leading workshop" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Why Lead Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Why Lead a Workshop?</h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Leading a SkillShare workshop is more than teaching—it's about building community and growing as a leader.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Leadership Experience</h3>
                <p className="text-pretty text-muted-foreground">
                  Develop valuable leadership and facilitation skills that employers value.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Build Connections</h3>
                <p className="text-pretty text-muted-foreground">
                  Meet amazing people who share your interests and passion for learning.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20">
                  <Lightbulb className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Teaching Skills</h3>
                <p className="text-pretty text-muted-foreground">
                  Learn how to communicate effectively and share your knowledge with others.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Resume Building</h3>
                <p className="text-pretty text-muted-foreground">
                  Add meaningful volunteer leadership experience to your resume.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Personal Growth</h3>
                <p className="text-pretty text-muted-foreground">
                  Step out of your comfort zone and gain confidence in your abilities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20">
                  <Heart className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Help Others</h3>
                <p className="text-pretty text-muted-foreground">
                  Combat isolation on campus by creating welcoming spaces for connection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We're Looking For */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-foreground">What We're Looking For</h2>
            <Card>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-sm text-primary">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Passion for Your Topic</h4>
                      <p className="text-sm text-muted-foreground">
                        You don't need to be an expert—just enthusiastic about sharing what you know!
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-sm text-primary">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Welcoming Attitude</h4>
                      <p className="text-sm text-muted-foreground">
                        Create a supportive space where beginners feel comfortable trying new things.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-sm text-primary">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Consistency</h4>
                      <p className="text-sm text-muted-foreground">
                        Commit to leading sessions regularly (weekly or bi-weekly) for at least one semester.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-sm text-primary">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">UIUC Student</h4>
                      <p className="text-sm text-muted-foreground">
                        Currently enrolled at University of Illinois Urbana-Champaign.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-foreground">The Application Process</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  1
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-foreground">Submit Your Application</h3>
                  <p className="text-pretty text-muted-foreground">
                    Tell us about yourself, your workshop idea, and why you want to lead.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  2
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-foreground">Quick Interview</h3>
                  <p className="text-pretty text-muted-foreground">
                    Chat with our team about your workshop vision and get tips for success.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  3
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-foreground">Leader Orientation</h3>
                  <p className="text-pretty text-muted-foreground">
                    Learn facilitation best practices and get support planning your first session.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  4
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-foreground">Launch Your Workshop!</h3>
                  <p className="text-pretty text-muted-foreground">
                    Start leading sessions with ongoing support from the SkillShare team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl rounded-3xl bg-gradient-to-br from-secondary to-accent p-8 text-center sm:p-12">
            <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl">Ready to Make an Impact?</h2>
            <p className="mt-4 text-pretty text-lg text-white/90">
              Apply to become a workshop leader and help build community at UIUC.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Apply to Lead a Workshop</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white bg-white/10 text-white hover:bg-white/20">
                <Link href="/contact">Ask Questions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
