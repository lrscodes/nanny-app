import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function ClientDashboardPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold font-serif text-primary mb-8">
        Client Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Upcoming Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            {/* TODO: Replace with Supabase call to get upcoming bookings */}
            <p className="text-gray-500">You have no upcoming bookings.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Messages</CardTitle>
          </CardHeader>
          <CardContent>
            {/* TODO: Replace with Supabase call to get messages */}
            <p className="text-gray-500">You have no new messages.</p>
          </CardContent>
        </Card>
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Past Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            {/* TODO: Replace with Supabase call to get past bookings */}
            <p className="text-gray-500">You have no past bookings.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 