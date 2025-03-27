import React from 'react'
import { useTranslation } from 'react-i18next';
import PaymentHistoryIcon from './PaymentHistoryIcon';

export default function PaymentHistory() {
    const { t } = useTranslation();

    return (
      <div className="my-8 pt-8 border-t w-full dark:border-zinc-800 border-zinc-200">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
          {t("Settings.payment.history.title")}
          </h1>
        </div>
        <div className='flex flex-col items-center justify-center my-12'>
          <PaymentHistoryIcon className="w-[15rem]" />
          <h1 className='text-zinc-400 dark:text-zinc-600 font-semibold text-2xl mt-[-2rem]'>{t("Settings.payment.history.noPayments.title")}</h1>
          <span className='max-w-[80%] text-zinc-400 dark:text-zinc-600 text-wrap text-center'>{t("Settings.payment.history.noPayments.subtitle")}</span>
        </div>
      </div>
    );
}
