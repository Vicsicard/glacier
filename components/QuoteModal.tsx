"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function QuoteModal({ open, onOpenChange }: QuoteModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    eventType: "",
    guestCount: "",
    eventDate: "",
    eventTime: "",
    venue: "",
    location: "indoor",
    serviceType: "",
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const totalSteps = 4;

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (step === 1) {
      if (!formData.eventType) newErrors.eventType = "Please select an event type";
      if (!formData.guestCount) newErrors.guestCount = "Please enter guest count";
      if (!formData.eventDate) newErrors.eventDate = "Please select a date";
    } else if (step === 3) {
      if (!formData.name) newErrors.name = "Please enter your name";
      if (!formData.email) newErrors.email = "Please enter your email";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
    setErrors({});
  };

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setCurrentStep(1);
    setFormData({
      eventType: "",
      guestCount: "",
      eventDate: "",
      eventTime: "",
      venue: "",
      location: "indoor",
      serviceType: "",
      name: "",
      email: "",
      phone: "",
      specialRequests: "",
    });
    setErrors({});
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-semibold">
                Request a Quote
              </DialogTitle>
              <p className="text-sm text-gray-600 mt-2">Step {currentStep} of {totalSteps}</p>
            </DialogHeader>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
              <div 
                className="bg-[#7B4B94] h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>

            <div className="mt-6">
              <AnimatePresence mode="wait">
                {/* Step 1: Event Basics */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Tell us about your event</h3>
                    
                    <div>
                      <Label htmlFor="eventType" className="text-base">What type of event? *</Label>
                      <Select
                        value={formData.eventType}
                        onValueChange={(value) => setFormData({ ...formData, eventType: value })}
                      >
                        <SelectTrigger id="eventType" className={`mt-2 h-12 ${errors.eventType ? "border-red-500" : ""}`}>
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wedding">Wedding</SelectItem>
                          <SelectItem value="corporate">Corporate Event</SelectItem>
                          <SelectItem value="school">School Event</SelectItem>
                          <SelectItem value="private">Private Party</SelectItem>
                          <SelectItem value="festival">Festival</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.eventType && <p className="text-sm text-red-500 mt-1">{errors.eventType}</p>}
                    </div>

                    <div>
                      <Label htmlFor="guestCount" className="text-base">How many guests? *</Label>
                      <Input
                        id="guestCount"
                        type="number"
                        placeholder="Number of guests"
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                        className={`mt-2 h-12 ${errors.guestCount ? "border-red-500" : ""}`}
                      />
                      {errors.guestCount && <p className="text-sm text-red-500 mt-1">{errors.guestCount}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="eventDate" className="text-base">Event Date *</Label>
                        <Input
                          id="eventDate"
                          type="date"
                          value={formData.eventDate}
                          onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                          className={`mt-2 h-12 ${errors.eventDate ? "border-red-500" : ""}`}
                        />
                        {errors.eventDate && <p className="text-sm text-red-500 mt-1">{errors.eventDate}</p>}
                      </div>
                      <div>
                        <Label htmlFor="eventTime" className="text-base">Event Time</Label>
                        <Input
                          id="eventTime"
                          type="time"
                          value={formData.eventTime}
                          onChange={(e) => setFormData({ ...formData, eventTime: e.target.value })}
                          className="mt-2 h-12"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Location & Service */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Location & Service Details</h3>
                    
                    <div>
                      <Label htmlFor="venue" className="text-base">Venue or Address</Label>
                      <Input
                        id="venue"
                        placeholder="Where is your event?"
                        value={formData.venue}
                        onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                        className="mt-2 h-12"
                      />
                    </div>

                    <div>
                      <Label className="text-base">Indoor or Outdoor?</Label>
                      <RadioGroup
                        value={formData.location}
                        onValueChange={(value) => setFormData({ ...formData, location: value })}
                        className="flex gap-6 mt-3"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="indoor" id="indoor" />
                          <Label htmlFor="indoor" className="font-normal cursor-pointer text-base">Indoor</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="outdoor" id="outdoor" />
                          <Label htmlFor="outdoor" className="font-normal cursor-pointer text-base">Outdoor</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label htmlFor="serviceType" className="text-base">What service are you interested in?</Label>
                      <Select
                        value={formData.serviceType}
                        onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                      >
                        <SelectTrigger id="serviceType" className="mt-2 h-12">
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="scoops">Classic Scoop Service</SelectItem>
                          <SelectItem value="sundae">Sundae Bar Experience</SelectItem>
                          <SelectItem value="custom">Custom Event Experience</SelectItem>
                          <SelectItem value="notsure">Not Sure Yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Contact Info */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">How can we reach you?</h3>
                    
                    <div>
                      <Label htmlFor="name" className="text-base">Your Name *</Label>
                      <Input
                        id="name"
                        placeholder="Full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`mt-2 h-12 ${errors.name ? "border-red-500" : ""}`}
                      />
                      {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-base">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`mt-2 h-12 ${errors.email ? "border-red-500" : ""}`}
                      />
                      {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-base">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-2 h-12"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Additional Details */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Anything else we should know?</h3>
                    
                    <div>
                      <Label htmlFor="specialRequests" className="text-base">Special Requests or Questions</Label>
                      <Textarea
                        id="specialRequests"
                        placeholder="Tell us about any dietary restrictions, flavor preferences, setup requirements, or questions you have..."
                        value={formData.specialRequests}
                        onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                        rows={6}
                        className="mt-2"
                      />
                      <p className="text-sm text-gray-500 mt-2">Optional - but helpful for us to provide an accurate quote!</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex gap-3 mt-8 pt-6 border-t">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    onClick={handleBack}
                    variant="outline"
                    className="flex-1 h-12"
                  >
                    Back
                  </Button>
                )}
                
                {currentStep < totalSteps ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 bg-[#7B4B94] hover:bg-[#7B4B94]/90 text-white h-12"
                  >
                    Continue
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={handleSubmit}
                    className="flex-1 bg-[#7B4B94] hover:bg-[#7B4B94]/90 text-white h-12"
                  >
                    Submit Request
                  </Button>
                )}
              </div>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Thanks! Your request has been received.
            </h3>
            
            <p className="text-gray-700 mb-6 max-w-md mx-auto">
              This is a demo prototype. In production, our team would contact you within 24 hours with availability and pricing.
            </p>
            
            <Button
              onClick={handleClose}
              className="bg-[#7B4B94] hover:bg-[#7B4B94]/90 text-white rounded-xl font-medium"
            >
              Close
            </Button>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
}
