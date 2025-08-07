import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { t } from '@/lib/locales';
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Switch } from "../ui/switch";

export const ContactFormSection = (): JSX.Element => {
  // Form field data for mapping
  const formFields = [
    {
      row: 1,
      fields: [
        {
          id: "firstName",
          label: t.content.contactForm.form.firstName.label,
          placeholder: t.content.contactForm.form.firstName.placeholder,
          type: "text",
        },
        {
          id: "lastName",
          label: t.content.contactForm.form.lastName.label,
          placeholder: t.content.contactForm.form.lastName.placeholder,
          type: "text",
        },
      ],
    },
    {
      row: 2,
      fields: [
        {
          id: "workEmail",
          label: t.content.contactForm.form.workEmail.label,
          placeholder: t.content.contactForm.form.workEmail.placeholder,
          type: "email",
        },
        {
          id: "service",
          label: t.content.contactForm.form.service.label,
          placeholder: t.content.contactForm.form.service.placeholder,
          isSelect: true,
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-6 pt-8 md:pt-16 pb-0 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative self-stretch w-full animate-fade-in-up animation-delay-600">
      <Card className="flex flex-col gap-6 md:gap-8 p-6 md:p-8 lg:p-10 bg-[#0c0b12] rounded-2xl border border-solid border-[hsl(0,0,18%)] shadow-[0px_0px_100px_#034baecc] w-full max-w-4xl hover:shadow-[0px_0px_120px_#034baecc] transition-all duration-500">
        <CardContent className="flex flex-col gap-6 md:gap-8 p-0">
          {formFields.map((row) => (
            <div
              key={`row-${row.row}`}
              className="flex flex-col lg:flex-row items-start gap-4 md:gap-6 lg:gap-8 w-full"
            >
              {row.fields.map((field) => (
                <div
                  key={field.id}
                  className="flex flex-col items-start gap-2 md:gap-3 w-full"
                >
                  <Label
                    htmlFor={field.id}
                    className="font-sora font-normal text-white text-sm md:text-base"
                  >
                    {field.label}
                  </Label>

                  {field.isSelect ? (
                    <Select>
                      <SelectTrigger
                        id={field.id}
                        className="justify-between p-3 md:p-4 w-full bg-[#12101e] rounded-xl border border-solid border-[hsl(0,0,18%)] text-[#414141] text-sm md:text-base font-sora font-normal hover:border-[#4d9aff] focus:border-[#4d9aff] transition-all duration-300 hover:animate-rotate-glow-subtle"
                      >
                        <SelectValue 
                          placeholder={field.placeholder}
                          className="text-[#414141] font-sora"
                        />
                      </SelectTrigger>
                      <SelectContent className="bg-[#12101e] border border-[hsl(0,0,18%)] rounded-xl">
                        <SelectItem 
                          value="web-development" 
                          className="text-white font-sora text-sm hover:bg-[#1a1825] hover:text-white focus:bg-[#1a1825] focus:text-white transition-colors duration-200"
                        >
                          {t.content.contactForm.form.service.options.webDevelopment}
                        </SelectItem>
                        <SelectItem 
                          value="ai-automation" 
                          className="text-white font-sora text-sm hover:bg-[#1a1825] hover:text-white focus:bg-[#1a1825] focus:text-white transition-colors duration-200"
                        >
                          {t.content.contactForm.form.service.options.aiAutomation}
                        </SelectItem>
                        <SelectItem 
                          value="consulting" 
                          className="text-white font-sora text-sm hover:bg-[#1a1825] hover:text-white focus:bg-[#1a1825] focus:text-white transition-colors duration-200"
                        >
                          {t.content.contactForm.form.service.options.consulting}
                        </SelectItem>
                        <SelectItem 
                          value="custom-solutions" 
                          className="text-white font-sora text-sm hover:bg-[#1a1825] hover:text-white focus:bg-[#1a1825] focus:text-white transition-colors duration-200"
                        >
                          {t.content.contactForm.form.service.options.customSolutions}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <Input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="p-3 md:p-4 w-full bg-[#12101E] rounded-lg border border-solid border-[hsl(0,0,18%)] text-white text-sm md:text-base font-sora font-normal placeholder:text-[#414141] hover:border-[#4d9aff] focus:border-[#4d9aff] transition-all duration-300 hover:animate-rotate-glow-subtle focus:animate-rotate-glow-subtle"
                    />
                  )}
                </div>
              ))}
            </div>
          ))}

          {/* Message textarea */}
          <div className="flex flex-col items-start gap-2 md:gap-3 w-full">
            <Label
              htmlFor="message"
              className="font-sora font-normal text-white text-sm md:text-base"
            >
              {t.content.contactForm.form.message.label}
            </Label>
            <textarea
              id="message"
              placeholder={t.content.contactForm.form.message.placeholder}
              rows={4}
              className="p-3 md:p-4 w-full bg-[#12101e] rounded-xl border border-solid border-[hsl(0,0,18%)] text-white text-sm md:text-base font-sora font-normal placeholder:text-[#414141] hover:border-[#4d9aff] focus:border-[#4d9aff] transition-all duration-300 hover:animate-rotate-glow-subtle focus:animate-rotate-glow-subtle resize-vertical min-h-[100px] focus:outline-none focus:ring-0"
            />
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 w-full">
            <div className="flex-1">
              <h3 className="font-sora font-semibold text-white text-lg md:text-xl mb-2">
                {t.content.contactForm.discoveryCall.title}
              </h3>
              <p className="font-sora font-normal text-sm md:text-base leading-relaxed">
                <span className="text-[#807f8c]">{t.content.contactForm.discoveryCall.description.part1}</span>
                <span className="text-white">
                  {t.content.contactForm.discoveryCall.description.highlight1}
                </span>
                <span className="text-[#807f8c]">
                  {" "}
                  {t.content.contactForm.discoveryCall.description.part2}{" "}
                </span>
                <span className="text-white">
                  {t.content.contactForm.discoveryCall.description.highlight2}
                </span>
                <span className="text-[#807f8c]">
                  {" "}
                  {t.content.contactForm.discoveryCall.description.part3}
                </span>
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Switch
                className="data-[state=checked]:bg-[linear-gradient(90deg,rgba(61,137,249,1)_0%,rgba(39,98,186,1)_100%)] data-[state=unchecked]:bg-[#33323e] h-8 w-14 rounded-full border-0 [&>span]:h-6 [&>span]:w-6 [&>span]:data-[state=checked]:translate-x-6 [&>span]:data-[state=unchecked]:translate-x-1 [&>span]:transition-transform [&>span]:duration-200 [&>span]:bg-white [&>span]:rounded-full [&>span]:shadow-lg"
                defaultChecked
              />
            </div>
          </div>

          <Button className="w-full p-3 md:p-4 rounded-lg border border-solid border-[#4d9aff] bg-[linear-gradient(90deg,rgba(61,137,249,1)_0%,rgba(39,98,186,1)_100%)] text-white text-base md:text-lg font-sora font-normal hover:opacity-90 transition-all duration-300 hover:animate-rotate-glow">
            {t.content.contactForm.submitButton}
          </Button>

          <p className="text-center text-sm md:text-base font-sora font-normal leading-relaxed">
            <span className="text-[#807f8c]">
              {t.content.contactForm.agreement.text}{" "}
            </span>
            <span className="font-semibold text-white cursor-pointer hover:text-[#4d9aff] transition-colors duration-200">
              {t.content.contactForm.agreement.terms}
            </span>
            <span className="text-[#807f8c]"> {t.content.contactForm.agreement.and} </span>
            <span className="font-semibold text-white cursor-pointer hover:text-[#4d9aff] transition-colors duration-200">
              {t.content.contactForm.agreement.privacy}
            </span>
            <span className="text-[#807f8c]">.</span>
          </p>
        </CardContent>
      </Card>

      {/* Contact Information Card */}
      <Card className="flex flex-col gap-4 md:gap-6 p-6 md:p-8 bg-[#0c0b12] rounded-2xl border border-solid border-[hsl(0,0,18%)] animate-rotate-glow-subtle w-full max-w-4xl transition-all duration-500 animate-fade-in-up animation-delay-800">
        <CardContent className="flex flex-col gap-4 md:gap-6 p-0">
          <h3 className="font-sora font-semibold text-white text-lg md:text-xl text-center">
            {t.content.contactForm.contactInfo.title}
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            {/* Phone */}
            <a href="tel:+36702002220">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-12 h-12 bg-[linear-gradient(90deg,rgba(61,137,249,1)_0%,rgba(39,98,186,1)_100%)] rounded-full flex items-center justify-center animate-pulse-subtle">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="font-sora font-normal text-white text-sm">{t.content.contactForm.contactInfo.phone.label}</div>
                <div className="font-sora font-light text-[#807f8c] text-sm">{t.content.contactForm.contactInfo.phone.value}</div>
              </div>
            </a>

            {/* Email */}
            <a href="mailto:info@netlintech.com">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-12 h-12 bg-[linear-gradient(90deg,rgba(61,137,249,1)_0%,rgba(39,98,186,1)_100%)] rounded-full flex items-center justify-center animate-pulse-subtle animation-delay-200">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="font-sora font-normal text-white text-sm">{t.content.contactForm.contactInfo.email.label}</div>
                <div className="font-sora font-light text-[#807f8c] text-sm">{t.content.contactForm.contactInfo.email.value}</div>
              </div>
            </a>

            {/* LinkedIn */}
            <a href="https://www.facebook.com/netlintech" target="_blank">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-12 h-12 bg-[linear-gradient(90deg,rgba(61,137,249,1)_0%,rgba(39,98,186,1)_100%)] rounded-full flex items-center justify-center animate-pulse-subtle animation-delay-400">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="font-sora font-normal text-white text-sm">{t.content.contactForm.contactInfo.linkedin.label}</div>
                <div className="font-sora font-light text-[#807f8c] text-sm">{t.content.contactForm.contactInfo.linkedin.value}</div>
              </div>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};