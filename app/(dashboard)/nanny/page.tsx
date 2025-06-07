import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function NannyDashboardPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold font-serif text-primary mb-8">
        Nanny Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Booking Requests</CardTitle>
          </CardHeader>
          <CardContent>
            {/* TODO: Replace with Supabase call to get booking requests */}
            <p className="text-gray-500">You have no new booking requests.</p>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>My Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            {/* TODO: Replace with Supabase call to get calendar events */}
            <p className="text-gray-500">Your calendar is empty.</p>
          </CardContent>
        </Card>
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Earnings</CardTitle>
          </CardHeader>
          <CardContent>
            {/* TODO: Replace with Supabase call to get earnings data */}
            <p className="text-gray-500">You have no earnings to display.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 