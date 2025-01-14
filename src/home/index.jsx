import React from 'react';
import { UserButton } from '@clerk/clerk-react';
import Header from '@/components/custom/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Zap, Users, ArrowRight } from 'lucide-react';
import { Navigate, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const handleNaviagtion = () => {
    navigate('/dashboard');
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Create Your Perfect Resume
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Stand out from the crowd with a professionally designed resume in
            minutes
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
            onClick={handleNaviagtion}
          >
            Get Started <ArrowRight className="ml-2" />
          </Button>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<FileText className="h-12 w-12 text-blue-500" />}
            title="Easy to Use"
            description="Intuitive interface that guides you through every step of the resume creation process"
          />
          <FeatureCard
            icon={<Zap className="h-12 w-12 text-yellow-500" />}
            title="Quick Results"
            description="Create a professional resume in minutes, not hours"
          />
          <FeatureCard
            icon={<Users className="h-12 w-12 text-green-500" />}
            title="ATS-Friendly"
            description="Ensure your resume gets past Applicant Tracking Systems and into human hands"
          />
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number={1}
              title="Choose a Template"
              description="Select from our wide range of professional templates"
            />
            <StepCard
              number={2}
              title="Fill in Your Details"
              description="Easy-to-use forms guide you through adding your information"
            />
            <StepCard
              number={3}
              title="Download and Apply"
              description="Get your polished resume in PDF format, ready to impress"
            />
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of job seekers who've successfully used our platform
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
            onClick={handleNaviagtion}
          >
            Create Your Resume Now
          </Button>
        </section>
      </main>

      <footer className="bg-gray-100 mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2023 Resume Builder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="text-center">
          {icon}
          <h3 className="mt-4 text-xl font-semibold">{title}</h3>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function StepCard({ number, title, description }) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 text-xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Home;
