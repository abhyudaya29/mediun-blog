/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2cqMlWkI9dr
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Hear from our satisfied customers about their experience with our products and services.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <blockquote className="text-lg font-semibold leading-snug">
              “The customer service I received was exceptional. The support team went above and beyond to address my
              concerns.”
            </blockquote>
            <div className="mt-4 flex items-center gap-2">
              <Avatar className="h-10 w-10">
                <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">Jules Winnfield</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">CEO, Acme Inc</div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <blockquote className="text-lg font-semibold leading-snug">
              “I was hesitant to try this product, but the team's patience and guidance made the process seamless. I'm
              thrilled with the results.”
            </blockquote>
            <div className="mt-4 flex items-center gap-2">
              <Avatar className="h-10 w-10">
                <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">Mia Khalifa</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Marketing Manager, Globex Inc</div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <blockquote className="text-lg font-semibold leading-snug">
              “I was blown away by the level of care and attention I received. The team truly went the extra mile to
              ensure my satisfaction.”
            </blockquote>
            <div className="mt-4 flex items-center gap-2">
              <Avatar className="h-10 w-10">
                <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">Dwayne Johnson</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">CEO, Dwayne Inc</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}