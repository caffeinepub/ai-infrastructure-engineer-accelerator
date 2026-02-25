import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ApplicationForm {
    id: bigint;
    preferredStartDate: string;
    name: string;
    careerStatus: CareerStatus;
    email: string;
    motivationStatement: string;
    program: Program;
}
export enum CareerStatus {
    other = "other",
    youngProfessional = "youngProfessional",
    transitioning = "transitioning",
    student = "student"
}
export enum Program {
    aiDataAndAnalyticsEngineerAccelerator = "aiDataAndAnalyticsEngineerAccelerator",
    aiInfrastructureEngineerAccelerator = "aiInfrastructureEngineerAccelerator",
    qaTestingProgram = "qaTestingProgram"
}
export interface backendInterface {
    getAllApplications(): Promise<Array<ApplicationForm>>;
    getApplication(id: bigint): Promise<ApplicationForm>;
    submitApplication(program: Program, name: string, email: string, careerStatus: CareerStatus, motivationStatement: string, preferredStartDate: string): Promise<bigint>;
}
