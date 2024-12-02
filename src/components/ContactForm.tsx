import React from 'react';
import { useForm } from 'react-hook-form';
import { Section } from './layout/Section';
import { Input } from './ui/Input';
import { Select } from './ui/Select';
import { TextArea } from './ui/TextArea';
import { Button } from './ui/Button';

interface FormData {
  fullName: string;
  email: string;
  treatment: string;
  message: string;
}

const treatmentOptions = [
  { value: '', label: 'Select a treatment' },
  { value: 'dental-implants', label: 'Dental Implants' },
  { value: 'veneers', label: 'Veneers' },
  { value: 'hair-transplant', label: 'Hair Transplantation' },
  { value: 'botox', label: 'Botox' }
];

export const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <section id="contact">
      <Section title="Contact Us" className="bg-white">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Input
              label="Full Name"
              {...register('fullName', { required: 'This field is required' })}
              error={errors.fullName?.message}
            />

            <Input
              label="Email"
              type="email"
              {...register('email', { 
                required: 'This field is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Please enter a valid email'
                }
              })}
              error={errors.email?.message}
            />

            <Select
              label="Treatment Interest"
              options={treatmentOptions}
              {...register('treatment', { required: 'Please select a treatment' })}
              error={errors.treatment?.message}
            />

            <TextArea
              label="Message"
              rows={4}
              {...register('message')}
            />

            <div className="text-sm text-gray-600">
              <p>Your privacy is important to us. We'll never share your information without your permission.</p>
            </div>

            <Button type="submit" className="w-full">
              Submit Inquiry
            </Button>
          </form>
        </div>
      </Section>
    </section>
  );
};