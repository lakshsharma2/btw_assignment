"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, Sparkles, Wrench } from "lucide-react"

type WorkshopType = "all" | "practical" | "creative"

const workshops = [
  {
    id: 1,
    title: "Cooking Basics: One-Pot Meals",
    description: "Learn to make delicious, budget-friendly meals perfect for dorm life. No cooking experience needed!",
    type: "practical" as const,
    date: "Thursdays, 6:00 PM",
    duration: "90 minutes",
    spots: "4 spots left",
  },
  {
    id: 2,
    title: "Photography Walk: Campus Edition",
    description: "Explore campus through your lens. Bring your phone or camera and learn composition basics.",
    type: "creative" as const,
    date: "Saturdays, 2:00 PM",
    duration: "2 hours",
    spots: "8 spots left",
  },
  {
    id: 3,
    title: "Study Smarter: Note-Taking Strategies",
    description: "Discover effective note-taking methods that actually help you learn and retain information.",
    type: "practical" as const,
    date: "Tuesdays, 5:00 PM",
    duration: "60 minutes",
    spots: "Open",
  },
  {
    id: 4,
    title: "Beginner Guitar Circle",
    description: "Strum along with fellow beginners in a supportive group. Guitars provided if needed.",
    type: "creative" as const,
    date: "Wednesdays, 7:00 PM",
    duration: "90 minutes",
    spots: "3 spots left",
  },
  {
    id: 5,
    title: "Personal Finance 101",
    description: "Learn budgeting basics, credit cards, and financial planning for college students.",
    type: "practical" as const,
    date: "Mondays, 6:30 PM",
    duration: "75 minutes",
    spots: "Open",
  },
  {
    id: 6,
    title: "Watercolor & Coffee",
    description: "Relaxing afternoon painting session. All materials provided, beginners welcome.",
    type: "creative" as const,
    date: "Sundays, 3:00 PM",
    duration: "2 hours",
    spots: "6 spots left",
  },
  {
    id: 7,
    title: "Resume & LinkedIn Workshop",
    description: "Build a standout resume and optimize your LinkedIn profile with peer feedback.",
    type: "practical" as const,
    date: "Fridays, 4:00 PM",
    duration: "90 minutes",
    spots: "Open",
  },
  {
    id: 8,
    title: "Creative Writing Circle",
    description: "Share stories, poems, or ideas in a supportive writing community. All genres welcome.",
    type: "creative" as const,
    date: "Thursdays, 7:30 PM",
    duration: "90 minutes",
    spots: "5 spots left",
  },
]

export default function WorkshopsPage() {
  const [filter, setFilter] = useState<WorkshopType>("all")

  const filteredWorkshops = workshops.filter((workshop) => filter === "all" || workshop.type === filter)

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold text-foreground sm:text-5xl">Upcoming Workshops</h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              All workshops are free, beginner-friendly, and designed for small groups (12–15 students) to encourage
              meaningful conversations and connections.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="border-b border-border bg-background px-4 py-6 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")} size="lg">
              All Workshops
            </Button>
            <Button
              variant={filter === "practical" ? "default" : "outline"}
              onClick={() => setFilter("practical")}
              size="lg"
            >
              <Wrench className="mr-2 h-4 w-4" />
              Practical Skills
            </Button>
            <Button
              variant={filter === "creative" ? "default" : "outline"}
              onClick={() => setFilter("creative")}
              size="lg"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Creative Skills
            </Button>
          </div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredWorkshops.map((workshop) => (
              <Card key={workshop.id} className="flex flex-col transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <Badge variant={workshop.type === "practical" ? "default" : "secondary"}>
                      {workshop.type === "practical" ? (
                        <>
                          <Wrench className="mr-1 h-3 w-3" />
                          Practical
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-1 h-3 w-3" />
                          Creative
                        </>
                      )}
                    </Badge>
                    <span className="text-sm font-medium text-muted-foreground">{workshop.spots}</span>
                  </div>
                  <CardTitle className="text-balance">{workshop.title}</CardTitle>
                  <CardDescription className="text-pretty">{workshop.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{workshop.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span>12–15 students max</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Join This Session</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-muted/30 px-4 py-12 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl rounded-2xl bg-card p-8 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-foreground">What to Expect</h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Every workshop is designed to be welcoming and beginner-friendly. You'll meet other UIUC students, learn
              something new, and have fun in a relaxed, judgment-free environment. Just show up with an open mind and
              willingness to participate!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
