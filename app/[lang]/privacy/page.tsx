import { Locale, hermes } from "@/lib/i18n-config";
import React from "react";
export const runtime = "edge";

interface PrivacyPolicyProps {
  companyName: string;
  websiteUrl: string;
  contactEmail: string;
  lastUpdated: string;
  twitterHandle: string;
}

const variables: PrivacyPolicyProps = {
  companyName: "Pantheon Inc.",
  websiteUrl: "https://exorcism.com",
  contactEmail: "i@ultrasev.com",
  lastUpdated: "2024-10-22",
  twitterHandle: "slippertopia",
};

export default function PrivacyPolicy({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <div className="w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] mx-auto p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">
        {hermes(lang, {
          en: "Privacy Policy",
          zh: "隐私政策",
        })}
      </h1>
      <p className="mb-4">
        {hermes(lang, {
          en: `Last Updated: ${variables.lastUpdated}`,
          zh: `最后更新：${variables.lastUpdated}`,
        })}
      </p>

      <p className="mb-4">
        {hermes(lang, {
          en: `Thank you for visiting ${variables.companyName} ("we," "us," or "our"). This Privacy Policy outlines how we collect, use, and protect your personal and non-personal information when you use our website located at ${variables.websiteUrl} (the "Website").`,
          zh: `感谢您访问 ${variables.companyName}（"我们"或"我们的"）。本隐私政策概述了我们如何在您使用位于 ${variables.websiteUrl} 的网站（"网站"）时收集、使用和保护您的个人和非个人信息。`,
        })}
      </p>

      <p className="mb-4">
        {hermes(lang, {
          en: `By accessing or using ${variables.companyName}, you agree to the terms of this Privacy Policy. If you do not agree with the practices described in this policy, please do not use ${variables.companyName}.`,
          zh: `通过访问或使用 ${variables.companyName}，您同意本隐私政策的条款。如果您不同意本政策中描述的做法，请不要使用 ${variables.companyName}。`,
        })}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {hermes(lang, {
          en: "1. Information We Collect",
          zh: "1. 我们收集的信息",
        })}
      </h2>

      <h3 className="text-lg font-semibold mt-4 mb-2">
        {hermes(lang, {
          en: "1.1 Personal Data",
          zh: "1.1 个人数据",
        })}
      </h3>
      <p className="mb-4">
        {hermes(lang, {
          en: "We collect the following personal information from you:",
          zh: "我们从您那里收集以下个人信息：",
        })}
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          {hermes(lang, {
            en: "Name: We collect your name to personalize your experience and communicate with you effectively.",
            zh: "姓名：我们收集您的姓名以个性化您的体验并与您进行有效沟通。",
          })}
        </li>
        <li>
          {hermes(lang, {
            en: "Email: We collect your email address to send you important information regarding your orders, updates, and communication.",
            zh: "电子邮件：我们收集您的电子邮件地址，以向您发送有关订单、更新和通信的重要信息。",
          })}
        </li>
        <li>
          {hermes(lang, {
            en: "Payment Information: We collect payment details to process your orders securely. We do not store your payment information on our servers. Payments are processed by trusted third-party payment processors.",
            zh: "支付信息：我们收集支付详细信息以安全处理您的订单。我们不会在我们的服务器上存储您的支付信息。支付由受信任的第三方支付处理商处理。",
          })}
        </li>
      </ul>

      <h3 className="text-lg font-semibold mt-4 mb-2">
        {hermes(lang, {
          en: "1.2 Non-Personal Data",
          zh: "1.2 非个人数据",
        })}
      </h3>
      <p className="mb-4">
        {hermes(lang, {
          en: "We may use web cookies and similar technologies to collect non-personal information such as your IP address, browser type, device information, and browsing patterns. This information helps us to enhance your browsing experience, analyze trends, and improve our services.",
          zh: "我们可能使用网络 cookie 和类似技术来收集非个人信息，如您的 IP 地址、浏览器类型、设备信息和浏览模式。这些信息有助于我们增强您的浏览体验，分析趋势并改进我们的服务。",
        })}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {hermes(lang, {
          en: "2. Purpose of Data Collection",
          zh: "2. 数据收集的目的",
        })}
      </h2>
      <p className="mb-4">
        {hermes(lang, {
          en: "We collect and use your personal data for the sole purpose of order processing. This includes processing your orders, sending order confirmations, providing customer support, and keeping you updated about the status of your orders.",
          zh: "我们收集和使用您的个人数据的唯一目的是处理订单。这包括处理您的订单、发送订单确认、提供客户支持以及让您了解订单状态的最新信息。",
        })}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {hermes(lang, {
          en: "3. Data Sharing",
          zh: "3. 数据共享",
        })}
      </h2>
      <p className="mb-4">
        {hermes(lang, {
          en: "We do not share your personal data with any third parties except as required for order processing (e.g., sharing your information with payment processors). We do not sell, trade, or rent your personal information to others.",
          zh: "除非出于订单处理的需要（例如，与支付处理商共享您的信息），我们不会与任何第三方共享您的个人数据。我们不会出售、交易或出租您的个人信息给他人。",
        })}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {hermes(lang, {
          en: "4. Children's Privacy",
          zh: "4. 儿童隐私",
        })}
      </h2>
      <p className="mb-4">
        {hermes(lang, {
          en: `${variables.companyName} is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us at the email address provided below.`,
          zh: `${variables.companyName} 不适用于 13 岁以下的儿童。我们不会故意收集儿童的个人信息。如果您是父母或监护人，并认为您的孩子向我们提供了个人信息，请通过下面提供的电子邮件地址与我们联系。`,
        })}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {hermes(lang, {
          en: "5. Updates to the Privacy Policy",
          zh: "5. 隐私政策的更新",
        })}
      </h2>
      <p className="mb-4">
        {hermes(lang, {
          en: "We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any updates will be posted on this page, and we may notify you via email about significant changes.",
          zh: "由于市场变动或出于其他运营、法律或监管原因，我们可能会不时更新本隐私政策。任何更新都将发布在此页面上，如有重大更新，我们会通过电子邮件通知您。",
        })}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {hermes(lang, {
          en: "6. Contact Information",
          zh: "6. 联系信息",
        })}
      </h2>
      <p className="mb-4">
        {hermes(lang, {
          en: "If you have any questions, concerns, or requests related to this Privacy Policy, you can contact us at:",
          zh: "如果您对本隐私政策有任何问题、疑虑或请求，您可以通过以下方式联系我们：",
        })}
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li className="flex items-center gap-2">
          <span>
            {hermes(lang, {
              en: "Email: ",
              zh: "电子邮件：",
            })}
          </span>
          <a
            href={`mailto:${variables.contactEmail}`}
            className="text-blue-500 hover:text-blue-700"
          >
            {variables.contactEmail}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <span>
            {hermes(lang, {
              en: "Twitter: ",
              zh: "推特：",
            })}
          </span>
          <a
            href={`https://twitter.com/${variables.twitterHandle}`}
            className="text-blue-500 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            @{variables.twitterHandle}
          </a>
        </li>
      </ul>

      <p className="mt-6">
        {hermes(lang, {
          en: `By using ${variables.companyName}, you consent to the terms of this Privacy Policy.`,
          zh: `使用 ${variables.companyName} 即表示您同意本隐私政策的条款。`,
        })}
      </p>
    </div>
  );
}
