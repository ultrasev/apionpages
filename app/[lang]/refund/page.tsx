import { Locale, hermes } from "@/lib/i18n-config";
import React from "react";
export const runtime = "edge";

interface RefundPolicyProps {
  companyName: string;
  serviceName: string;
  contactEmail: string;
  lastUpdated: string;
  websiteUrl: string;
  trialPeriod: number;
  fullRefundPeriod: number;
  partialRefundPeriod: number;
}

const variables: RefundPolicyProps = {
  companyName: "Pantheon Inc.",
  serviceName: "Exorcism",
  contactEmail: "i@ultrasev.com",
  lastUpdated: "2024-10-22",
  websiteUrl: "https://exorcism.com",
  trialPeriod: 14,
  fullRefundPeriod: 7,
  partialRefundPeriod: 30,
};

export default function RefundPolicy({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <div className="w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] mx-auto p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">
        {hermes(lang, {
          en: "Refund Policy",
          zh: "退款政策",
        })}
      </h1>
      <p className="mb-4">
        {hermes(lang, {
          en: `Last Updated: ${variables.lastUpdated}`,
          zh: `最后更新：${variables.lastUpdated}`,
        })}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {hermes(lang, {
          en: "1. Free Trial Period",
          zh: "1. 免费试用期",
        })}
      </h2>
      <p className="mb-4">
        {hermes(lang, {
          en: `${variables.serviceName} offers a ${variables.trialPeriod}-day free trial period. No refund is necessary during this period as no payment is required.`,
          zh: `${variables.serviceName} 提供 ${variables.trialPeriod} 天的免费试用期，在此期间无需付款。`,
        })}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {hermes(lang, {
          en: "2. Paid Service Refund Period",
          zh: "2. 付费服务退款期",
        })}
      </h2>
      <p className="mb-4">
        {hermes(lang, {
          en: "After payment, the following refund policy applies:",
          zh: "付款后，适用以下退款政策：",
        })}
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          {hermes(lang, {
            en: `Within ${variables.fullRefundPeriod} days of payment: Full refund available, no questions asked.`,
            zh: `付款后 ${variables.fullRefundPeriod} 天内：可获得全额退款，无需理由。`,
          })}
        </li>
        <li>
          {hermes(lang, {
            en: `After ${variables.fullRefundPeriod} days: No refund is generally available. If you have a special circumstance, please contact customer service.`,
            zh: `超出 ${variables.fullRefundPeriod} 天后通常不提供退款，如有特殊情况，请联系客服。`,
          })}
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {hermes(lang, {
          en: "3. Special Circumstances",
          zh: "3. 特殊情况",
        })}
      </h2>
      <p className="mb-4">
        {hermes(lang, {
          en: "In cases of significant service interruptions or technical issues, we may extend the refund period or offer additional compensation. Long-term users may be eligible for special consideration.",
          zh: "如遇重大服务中断或技术问题，我们可能会延长退款期或提供额外补偿。长期用户可能有资格获得特殊考虑。",
        })}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {hermes(lang, {
          en: "4. Pro-rata Refunds",
          zh: "4. 按比例退款",
        })}
      </h2>
      <p className="mb-4">
        {hermes(lang, {
          en: "For annual subscriptions cancelled mid-term, a pro-rata refund may be issued based on unused months.",
          zh: "对于年度订阅中途取消的情况，我们可能会根据未使用的月份按比例退款。",
        })}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {hermes(lang, {
          en: "5. Data Handling",
          zh: "5. 数据处理",
        })}
      </h2>
      <p className="mb-4">
        {hermes(lang, {
          en: "Upon refund, user data will be retained for 30 days before permanent deletion. Users can request immediate data deletion if desired.",
          zh: "退款后，用户数据将保留 30 天，之后永久删除。用户可以要求立即删除数据。",
        })}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {hermes(lang, {
          en: "6. Refund Process",
          zh: "6. 退款流程",
        })}
      </h2>
      <p className="mb-4">
        {hermes(lang, {
          en: "Refunds will be processed through the original payment method. Please allow 3-5 business days for the refund to be reflected in your account.",
          zh: "退款将通过原支付方式处理。退款可能需要 3-5 个工作日才能反映在您的账户中。",
        })}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {hermes(lang, {
          en: "7. Refund Restrictions",
          zh: "7. 退款限制",
        })}
      </h2>
      <p className="mb-4">
        {hermes(lang, {
          en: "Users who have violated our Terms of Service or have abused the service are not eligible for refunds.",
          zh: "违反我们服务条款或滥用服务的用户无权获得退款。",
        })}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {hermes(lang, {
          en: "8. Contact Information",
          zh: "8. 联系信息",
        })}
      </h2>
      <p className="mb-4">
        {hermes(lang, {
          en: "For refund requests or questions about this policy, please contact us at: ",
          zh: "如需申请退款或对此政策有任何疑问，请联系我们：",
        })}
        <a
          href={`mailto:${variables.contactEmail}`}
          className="text-blue-600 hover:underline"
        >
          {variables.contactEmail}
        </a>
      </p>
    </div>
  );
}
