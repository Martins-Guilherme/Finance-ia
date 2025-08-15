import {
  TransactionType,
  PaymentMethod,
  TransactionCategory,
} from "@prisma/client";

export const TRANSACTIONS_CATEGORY_LABELS = {
  EDUCATION: "Educação",
  ENTERTAINMENT: "Entretenimento",
  FOOD: "Alimentação",
  HEALTH: "Saúde",
  HOUSING: "Moradia",
  OTHER: "Outros",
  SALARY: "Salário",
  TRANSPORTATION: "Transporte",
  UTILITY: "Utilidades",
};

export const TRANSACTION_PAYMENT_METHOD_LABEL = {
  BANK_TRANSFER: "Transferencia Bancária",
  BANK_SLIP: "Boleto Bancario",
  CASH: "Dinheiro",
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  OTHER: "Outros",
  PIX: "Pix",
};

export const TRANSACTION_TYPE_OPTIONS = [
  {
    value: TransactionType.EXPENSE,
    label: "Despesa",
  },
  {
    value: TransactionType.DEPOSIT,
    label: "Deposito",
  },
  {
    value: TransactionType.INVESTMENT,
    label: "Investimento",
  },
];

export const TRANSACTION_PAYMENT_METHOD_OPTIONS = [
  {
    value: PaymentMethod.BANK_TRANSFER,
    label: TRANSACTION_PAYMENT_METHOD_LABEL[PaymentMethod.BANK_TRANSFER],
  },
  {
    value: PaymentMethod.BANK_SLIP,
    label: TRANSACTION_PAYMENT_METHOD_LABEL[PaymentMethod.BANK_SLIP],
  },
  {
    value: PaymentMethod.CASH,
    label: TRANSACTION_PAYMENT_METHOD_LABEL[PaymentMethod.CASH],
  },
  {
    value: PaymentMethod.CREDIT_CARD,
    label: TRANSACTION_PAYMENT_METHOD_LABEL[PaymentMethod.CREDIT_CARD],
  },
  {
    value: PaymentMethod.DEBIT_CARD,
    label: TRANSACTION_PAYMENT_METHOD_LABEL[PaymentMethod.DEBIT_CARD],
  },
  {
    value: PaymentMethod.OTHER,
    label: TRANSACTION_PAYMENT_METHOD_LABEL[PaymentMethod.OTHER],
  },
  {
    value: PaymentMethod.PIX,
    label: TRANSACTION_PAYMENT_METHOD_LABEL[PaymentMethod.PIX],
  },
];

export const TRANSACTION_CATEGORY_OPTIONS = [
  {
    value: TransactionCategory.EDUCATION,
    label: TRANSACTIONS_CATEGORY_LABELS[TransactionCategory.EDUCATION],
  },
  {
    value: TransactionCategory.ENTERTAINMENT,
    label: TRANSACTIONS_CATEGORY_LABELS[TransactionCategory.ENTERTAINMENT],
  },
  {
    value: TransactionCategory.FOOD,
    label: TRANSACTIONS_CATEGORY_LABELS[TransactionCategory.FOOD],
  },
  {
    value: TransactionCategory.HEALTH,
    label: TRANSACTIONS_CATEGORY_LABELS[TransactionCategory.HEALTH],
  },
  {
    value: TransactionCategory.HOUSING,
    label: TRANSACTIONS_CATEGORY_LABELS[TransactionCategory.HOUSING],
  },
  {
    value: TransactionCategory.OTHER,
    label: TRANSACTIONS_CATEGORY_LABELS[TransactionCategory.OTHER],
  },
  {
    value: TransactionCategory.SALARY,
    label: TRANSACTIONS_CATEGORY_LABELS[TransactionCategory.SALARY],
  },
  {
    value: TransactionCategory.TRANSPORTATION,
    label: TRANSACTIONS_CATEGORY_LABELS[TransactionCategory.TRANSPORTATION],
  },
  {
    value: TransactionCategory.UTILITY,
    label: TRANSACTIONS_CATEGORY_LABELS[TransactionCategory.UTILITY],
  },
];
