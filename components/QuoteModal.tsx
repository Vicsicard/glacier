"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
    hearAbout: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    
    if (!formData.eventType) newErrors.eventType = "Event type is required";
    if (!formData.guestCount) newErrors.guestCount = "Guest count is required";
    if (!formData.eventDate) newErrors.eventDate = "Event date is required";
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
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
      hearAbout: ""
    });
    setErrors({});
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-semibold">
                Request a Quote
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              {/* Event Details */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg border-b pb-2">Event Details</h3>
                
                <div>
                  <Label htmlFor="eventType">Event Type *</Label>
                  <Select
                    value={formData.eventType}
                    onValueChange={(value) => setFormData({ ...formData, eventType: value })}
                  >
                    <SelectTrigger id="eventType" className={errors.eventType ? "border-red-500" : ""}>
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
                  <Label htmlFor="guestCount">Guest Count *</Label>
                  <Input
                    id="guestCount"
                    type="number"
                    placeholder="Number of guests"
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className={errors.guestCount ? "border-red-500" : ""}
                  />
                  {errors.guestCount && <p className="text-sm text-red-500 mt-1">{errors.guestCount}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="eventDate">Event Date *</Label>
                    <Input
                      id="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className={errors.eventDate ? "border-red-500" : ""}
                    />
                    {errors.eventDate && <p className="text-sm text-red-500 mt-1">{errors.eventDate}</p>}
                  </div>
                  <div>
                    <Label htmlFor="eventTime">Event Time</Label>
                    <Input
                      id="eventTime"
                      type="time"
                      value={formData.eventTime}
                      onChange={(e) => setFormData({ ...formData, eventTime: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg border-b pb-2">Location</h3>
                
                <div>
                  <Label htmlFor="venue">Venue / Address</Label>
                  <Input
                    id="venue"
                    placeholder="Event location"
                    value={formData.venue}
                    onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                  />
                </div>

                <div>
                  <Label>Indoor or Outdoor</Label>
                  <RadioGroup
                    value={formData.location}
                    onValueChange={(value) => setFormData({ ...formData, location: value })}
                    className="flex gap-4 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="indoor" id="indoor" />
                      <Label htmlFor="indoor" className="font-normal cursor-pointer">Indoor</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="outdoor" id="outdoor" />
                      <Label htmlFor="outdoor" className="font-normal cursor-pointer">Outdoor</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* Service */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg border-b pb-2">Service</h3>
                
                <div>
                  <Label htmlFor="serviceType">Service Type</Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                  >
                    <SelectTrigger id="serviceType">
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="scoops">Scoops</SelectItem>
                      <SelectItem value="sundae">Sundae Bar</SelectItem>
                      <SelectItem value="notsure">Not Sure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Contact */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg border-b pb-2">Contact</h3>
                
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              {/* Additional */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg border-b pb-2">Additional</h3>
                
                <div>
                  <Label htmlFor="specialRequests">Special Requests</Label>
                  <Textarea
                    id="specialRequests"
                    placeholder="Any special requirements or questions?"
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="hearAbout">How did you hear about us?</Label>
                  <Select
                    value={formData.hearAbout}
                    onValueChange={(value) => setFormData({ ...formData, hearAbout: value })}
                  >
                    <SelectTrigger id="hearAbout">
                      <SelectValue placeholder="Select one" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google">Google Search</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="referral">Friend/Family Referral</SelectItem>
                      <SelectItem value="event">Saw at an Event</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#7B4B94] hover:bg-[#7B4B94]/90 text-white rounded-xl font-medium py-6"
              >
                Request Quote
              </Button>
            </form>
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
