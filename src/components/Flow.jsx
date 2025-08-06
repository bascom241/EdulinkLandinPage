import React from 'react';
import { User, Search, Calendar, GraduationCap, BookOpen, CheckCircle } from 'lucide-react';

const VerticalStep = ({ number, title, description, icon, isLast }) => {
  const IconComponent = icon;
  
  return (
    <div className="flex">
      {/* Left column - number and line */}
      <div className="flex flex-col items-center mr-6">
        <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl">
          {number}
        </div>
        {!isLast && (
          <div className="flex-1 w-1 bg-green-400 my-2 rounded-full"></div>
        )}
      </div>
      
      {/* Right column - content */}
      <div className="pb-10 flex-1">
        <div className="flex items-center mb-3">
          <IconComponent className="w-6 h-6 text-green-400 mr-3" />
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-300 pl-9">{description}</p>
      </div>
    </div>
  );
};

const FlowSection = ({ title, steps, icons, descriptions }) => {
  return (
    <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
      <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
        {title === 'For Students' ? (
          <GraduationCap className="text-green-400" />
        ) : (
          <User className="text-green-400" />
        )}
        {title}
      </h3>
      
      <div className="space-y-2">
        {steps.map((step, index) => (
          <VerticalStep
            key={index}
            number={index + 1}
            title={step}
            description={descriptions[index]}
            icon={icons[index]}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

const Flow = () => {
  const studentSteps = [
    'Create Your Account',
    'Find Your Perfect Tutor',
    'Book Learning Sessions',
    'Begin Your Educational Journey'
  ];
  
  const studentIcons = [User, Search, Calendar, GraduationCap];
  
  const studentDescriptions = [
    'Sign up in minutes with your email or social accounts. Get immediate access to thousands of qualified tutors.',
    'Filter by subject, availability, price, and ratings. Read tutor profiles and student reviews to find your ideal match.',
    'Schedule sessions at times that work for you. Receive reminders and join sessions through our virtual classroom.',
    'Track your progress with each session. Get personalized feedback and recommendations for continued growth.'
  ];
  
  const teacherSteps = [
    'Join Our Tutor Network',
    'Build Your Professional Profile',
    'Create Your Course Offerings',
    'Start Teaching Students Worldwide'
  ];
  
  const teacherIcons = [User, CheckCircle, BookOpen, GraduationCap];
  
  const teacherDescriptions = [
    'Complete our verification process to ensure quality standards. Set up your payment information to start earning.',
    'Showcase your qualifications, experience, and teaching style. Upload credentials and set your availability calendar.',
    'Design courses with your unique approach. Set pricing, session formats, and learning objectives for each offering.',
    'Connect with students across the globe. Use our teaching tools to deliver engaging, effective lessons.'
  ];

  return (
    <section className="py-16 px-4 sm:px-6 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            How Our Platform Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A clear, step-by-step guide to getting started whether you're learning or teaching
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <FlowSection
            title="For Students"
            steps={studentSteps}
            icons={studentIcons}
            descriptions={studentDescriptions}
          />
          
          <FlowSection
            title="For Instructors"
            steps={teacherSteps}
            icons={teacherIcons}
            descriptions={teacherDescriptions}
          />
        </div>
      </div>
    </section>
  );
};

export default Flow;