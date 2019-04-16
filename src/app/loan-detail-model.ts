export interface loanDetailModel{
    checked : boolean;
    edit:boolean;
    memberId: number;
    loanAmount: number;
    fundedAmntInv: number;
    term:number;
    intRate:number;
    installment:number;
    grade: string;
    empTitle: string;
    empLength: number;
    homeOwnership:string;
    annualInc:number;
    verificationStatus:string;
    issueDate: string;
    loanStatus:string;
    descn:string;
    purpose:string;
    title:string;
    addrState:string;
    lastPymntDate:string;
    lastPymntAmnt:number
}