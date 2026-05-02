import { Card, CardTitle, SectionHeader } from "@/components/Section";

const ProgressReport = () => (
  <>
    <SectionHeader
      eyebrow="Work Experiences"
      title="Internship Progress Report"
      description="Complete record of internship details, objectives and accomplishments."
    />

    <Card className="mb-6">
      <CardTitle eyebrow="Internship Overview">Summary</CardTitle>
      <div className="text-sm text-foreground/85 space-y-2">
        <div><strong>Name:</strong> Micah Mel R. Madriaga</div>
        <div><strong>Course:</strong> Bachelor of Science in Information Technology</div>
        <div><strong>Agency:</strong> Civil Aviation Authority of the Philippines</div>
        <div><strong>Period Covered:</strong> Jan 29, 2026 – April 21, 2026</div>
        <div><strong>Total hours:</strong> 486</div>
        <div><strong>OJT Training:</strong> Face to face</div>
      </div>
    </Card>

    <Card>
      <CardTitle eyebrow="Internship Objectives & Status">Objectives</CardTitle>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 pr-4">Objectives</th>
              <th className="py-2 pr-4">Work Status</th>
              <th className="py-2">Problems</th>
            </tr>
          </thead>
          <tbody className="text-foreground/90">
            <tr className="border-b">
              <td className="py-2 pr-4">Encoding Hourly METAR/Weather Updates from PAGASA in Air Traffic Service (CADAS)</td>
              <td className="py-2 pr-4">Accomplished</td>
              <td className="py-2">None</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-4">Writing Weather Updates from PAGASA in Hourly METAR Forms</td>
              <td className="py-2 pr-4">Accomplished</td>
              <td className="py-2">None</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-4">Encoding Aircraft Operations Data in Air Traffic Service (CADAS)</td>
              <td className="py-2 pr-4">Accomplished</td>
              <td className="py-2">None</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-4">Encoding Flight Plans in Air Traffic Service (CADAS)</td>
              <td className="py-2 pr-4">Accomplished</td>
              <td className="py-2">None</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-4">Encoding Arrival and Departure of Aircraft (Landing and Takeoff) in Air Traffic Service (CADAS)</td>
              <td className="py-2 pr-4">Accomplished</td>
              <td className="py-2">None</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-4">Assisting in general administrative and operational tasks</td>
              <td className="py-2 pr-4">Accomplished</td>
              <td className="py-2">None</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-4">Organizing and filing administrative documents (DTR, payslips, receipts, salary forms)</td>
              <td className="py-2 pr-4">Accomplished</td>
              <td className="py-2">None</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-4">Communicating via Ground-to-Air Frequency (118.3 MHz) in Air Traffic Service</td>
              <td className="py-2 pr-4">Accomplished</td>
              <td className="py-2">None</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Filing of Quality Management System Documents for Facility Operations in Air Traffic Service</td>
              <td className="py-2 pr-4">Accomplished</td>
              <td className="py-2">None</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  </>
);

export default ProgressReport;
