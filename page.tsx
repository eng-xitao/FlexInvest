import { MainLayout } from "@/components/main-layout"
import { AlertsContent } from "@/components/alerts-content"

export default function AlertsPage() {
  return (
    <MainLayout>
      <div className="container mx-auto py-6">
        <AlertsContent />
      </div>
    </MainLayout>
  )
}
