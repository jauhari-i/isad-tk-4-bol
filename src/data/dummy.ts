import {
  DashboardRounded,
  Group,
  MedicalInformation,
  MedicalServices,
  Person4,
} from "@mui/icons-material";
import { SvgIconComponent } from "@mui/icons-material";
import { Faker, en_US, id_ID, fakerID_ID } from "@faker-js/faker";
import { MedicineData } from "./medicineData";
import { formatRupiah } from "@/utils/utils";

export interface SidebarItem {
  nested: boolean;
  link: string;
  name: string;
  icon: SvgIconComponent | null;
  children: SidebarItem[];
}

export type SidebarData = SidebarItem[];

export const dummySidebarData: SidebarData = [
  {
    nested: false,
    link: "/",
    name: "Dashboard",
    icon: DashboardRounded,
    children: [],
  },
  {
    nested: false,
    link: "/dokter",
    name: "Dokter",
    icon: Person4,
    children: [],
  },
  {
    nested: true,
    link: "",
    name: "User",
    icon: Group,
    children: [
      {
        nested: false,
        link: "/user",
        name: "User",
        icon: null,
        children: [],
      },
      {
        nested: false,
        link: "/staff",
        name: "Staff",
        icon: null,
        children: [],
      },
    ],
  },
  {
    nested: false,
    link: "/obat",
    name: "Obat",
    icon: MedicalServices,
    children: [],
  },
  {
    nested: false,
    link: "/rekam-medis",
    name: "Rekam Medis",
    icon: MedicalInformation,
    children: [],
  },
];

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  avatarUrl: string;
}

export const dummyUserProfile: User = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  fullName: "John Doe",
  email: "johndoe@example.com",
  phone: "555-555-5555",
  address: "123 Main St",
  city: "Anytown",
  state: "CA",
  zipCode: "12345",
  avatarUrl: "https://i.pravatar.cc/300",
};

export interface Doctor {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phone: string;
  specialty: string;
  avatarUrl: string;
  schedule: string;
  status: string;
}

const specialties = [
  "Dentist",
  "Dermatologist",
  "Cardiologist",
  "Neurologist",
  "Ophthalmologist",
  "Pediatrician",
];

export const generateDoctorData = (count: number) => {
  const lastId = 0;
  const newDoctors = [];
  const faker = new Faker({ locale: id_ID });

  for (let i = 1; i <= count; i++) {
    const specialtyIndex = Math.floor(Math.random() * specialties.length);
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const fullName = `${firstName} ${lastName}`;
    const email = faker.internet.email({
      firstName,
      lastName,
      provider: "gmail",
    });
    const phone = faker.phone.number();
    const specialty = specialties[specialtyIndex];
    const avatarUrl = "https://i.pravatar.cc/300?u=" + email;
    const schedule = faker.date.weekday();
    const status = Math.floor(Math.random() * 2) ? "Active" : "Inactive";

    newDoctors.push({
      id: lastId + i,
      firstName,
      lastName,
      fullName,
      email,
      phone,
      specialty,
      avatarUrl,
      schedule,
      status,
    });
  }

  return newDoctors;
};

export interface Users {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  avatarUrl: string;
  status: string;
  createdAt: Date;
  lastLogin: Date;
}

export const generateUserData = (count: number) => {
  const lastId = 0;
  const newUsers: Users[] = [];
  const faker = fakerID_ID;

  for (let i = 1; i <= count; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const fullName = `${firstName} ${lastName}`;
    const email = faker.internet.email({
      firstName,
      lastName,
      provider: "gmail",
    });
    const phone = faker.phone.number();
    const address = faker.location.streetAddress();
    const city = faker.location.city();
    const state = faker.location.state();
    const zipCode = faker.location.zipCode();
    const avatarUrl = "https://i.pravatar.cc/300?u=" + email;
    const status = Math.floor(Math.random() * 2) ? "Active" : "Inactive";
    const createdAt = faker.date.past();
    const lastLogin = faker.date.between({ from: createdAt, to: new Date() });

    newUsers.push({
      id: lastId + i,
      firstName,
      lastName,
      fullName,
      email,
      phone,
      address,
      city,
      state,
      zipCode,
      avatarUrl,
      status,
      createdAt,
      lastLogin,
    });
  }

  return newUsers;
};

export interface Staff {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phone: string;
  position: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  avatarUrl: string;
  status: string;
  shift: string;
}

export const generateStaffData = (count: number) => {
  const lastId = 0;
  const newStaff: Staff[] = [];
  const faker = fakerID_ID;

  for (let i = 1; i <= count; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const fullName = `${firstName} ${lastName}`;
    const email = faker.internet.email({
      firstName,
      lastName,
      provider: "gmail",
    });
    const phone = faker.phone.number();
    const position = faker.person.jobType();
    const address = faker.location.streetAddress();
    const city = faker.location.city();
    const state = faker.location.state();
    const zipCode = faker.location.zipCode();
    const avatarUrl = "https://i.pravatar.cc/300?u=" + email;
    const status = Math.floor(Math.random() * 2) ? "Active" : "Inactive";
    const shift = faker.date.weekday();

    newStaff.push({
      id: lastId + i,
      firstName,
      lastName,
      fullName,
      email,
      phone,
      position,
      address,
      city,
      state,
      zipCode,
      avatarUrl,
      status,
      shift,
    });
  }

  return newStaff;
};

export interface Medicine {
  id: number;
  name: string;
  composition: string;
  description: string;
  sideEffects: string;
  price: string;
  manufacturer: string;
  stock: number;
}

export const generateMedicineData = (count: number) => {
  const lastId = 0;
  const medicineRawData = MedicineData.slice(0, count);
  const faker = fakerID_ID;

  const newMedicine: Medicine[] = medicineRawData.map((medicine) => {
    const id = lastId + 1;
    const name = medicine.medicineName;
    const composition = medicine.composition;
    const description = medicine.uses;
    const sideEffects = medicine.sideEffects;
    const manufacturer = medicine.manufacturer;
    const price = faker.commerce.price({
      min: 100000,
      max: 1000000,
    });
    const stock = Math.floor(Math.random() * 100);

    return {
      id,
      name,
      composition,
      description,
      sideEffects,
      price: "Rp. " + formatRupiah(price),
      manufacturer,
      stock,
    };
  });

  return newMedicine;
};

export interface MedicalRecord {
  id: number;
  patient: Users;
  doctor: Doctor;
  staff: Staff;
  date: Date;
  medicine: Medicine[];
  description: string;
  price: string;
}

export const generateMedicalRecordData = (count: number) => {
  const lastId = 0;
  const faker = fakerID_ID;

  const newMedicalRecord: MedicalRecord[] = [];

  for (let i = 1; i <= count; i++) {
    const patient = generateUserData(1)[0];
    const doctor = generateDoctorData(1)[0];
    const staff = generateStaffData(1)[0];
    const date = faker.date.past();
    const medicine = generateMedicineData(3);
    const description = faker.lorem.paragraph();
    const price = medicine.reduce(
      (acc, cur) =>
        acc + Number(cur.price.replace("Rp. ", "").replace(".", "")),
      0
    );

    newMedicalRecord.push({
      id: lastId + i,
      patient,
      doctor,
      staff,
      date,
      medicine,
      description,
      price: "Rp. " + formatRupiah(String(price)),
    });
  }

  return newMedicalRecord;
};
