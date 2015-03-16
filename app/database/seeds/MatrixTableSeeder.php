<?php

class MatrixTableSeeder extends Seeder {

    public function run()
    {
        // LOAN PROCESSING
        Matrix::create([
            'group_heading' => 'Loan Processing',
            'responsibility' => 'Crop Loan Analysis',
            'CEO' => 'A',
            'ABM' => 'A',
            'LBM' => 'A',
            'LOF' => 'R',
            'LAN' => 'R'
        ]);
        Matrix::create([
            'group_heading' => 'Loan Processing',
            'responsibility' => 'Capital Bridge Analysis',
            'CEO' => 'A',
            'ABM' => 'A',
            'LBM' => 'A',
            'LOF' => 'R',
            'LAN' => 'R'
        ]);
        Matrix::create([
            'group_heading' => 'Loan Processing',
            'responsibility' => 'Grain Storage Analysis',
            'CEO' => 'A',
            'ABM' => 'A',
            'LBM' => 'A',
            'LOF' => 'R',
            'LAN' => 'R'
        ]);
        Matrix::create([
            'group_heading' => 'Loan Processing',
            'responsibility' => 'Verify Crop Collateral (ITS, FSA, UCC)',
            'CEO' => 'A',
            'ABM' => 'A',
            'LBM' => 'A',
            'LOF' => 'R',
            'LAN' => 'R'
        ]);
        Matrix::create([
            'group_heading' => 'Loan Processing',
            'responsibility' => 'Third Party Credit Liaison',
            'OAS' => 'R',
            'LOF' => 'A',
            'LAN' => 'A'
        ]);
        Matrix::create([
            'group_heading' => 'Loan Processing',
            'responsibility' => 'Verify Non-crop Collateral (Equipment)',
            'ABM' => 'A',
            'LBM' => 'A',
            'LOF' => 'R',
            'LAN' => 'A'
        ]);
        Matrix::create([
            'group_heading' => 'Loan Processing',
            'responsibility' => 'Verify Real Estate Collateral (with Atty)',
            'CEO' => 'R',
            'ABM' => 'R',
            'LOF' => 'R',
            'LAN' => 'A'
        ]);
        Matrix::create([
            'group_heading' => 'Loan Processing',
            'responsibility' => 'Verify Correct Insurance Levels',
            'LBM' => 'A',
            'LOF' => 'R',
            'LAN' => 'R'
        ]);
        Matrix::create([
            'group_heading' => 'Loan Processing',
            'responsibility' => 'Approve Loans',
            'CEO' => 'R',
            'ABM' => 'R'
        ]);
        Matrix::create([
            'group_heading' => 'Loan Processing',
            'responsibility' => 'Obtain Outside Loan Approval',
            'OAS' => 'A',
            'LBM' => 'A',
            'LOF' => 'R',
            'LAN' => 'R'
        ]);
        Matrix::create([
            'group_heading' => 'Loan Processing',
            'responsibility' => 'Document Review',
            'MGR' => 'A',
            'OAS' => 'A',
            'LBM' => 'R',
            'LOF' => 'R',
            'LAN' => 'A'
        ]);
        Matrix::create([
            'group_heading' => 'Loan Processing',
            'responsibility' => 'Close Loan/Obtain Signatures',
            'CEO' => 'A',
            'ABM' => 'A',
            'MGR' => 'A',
            'OAS' => '',
            'LBM' => 'A',
            'LOF' => 'R',
            'LAN' => 'A',
            'CON' => '',
            'HRM' => '',
            'IBM' => '',
            'IAS' => '',
            'COM' => ''
        ]);
        Matrix::create([
            'group_heading' => 'Loan Processing',
            'responsibility' => 'File Security Documents',
            'MGR' => 'A',
            'OAS' => 'R'
        ]);
        Matrix::create([
            'group_heading' => 'Loan Processing',
            'responsibility' => 'Internal Filing of Loan Docs',
            'MGR' => 'A',
            'OAS' => 'R',
            'LOF' => 'A',
            'LAN' => 'A'
        ]);
        Matrix::create([
            'group_heading' => 'Loan Processing',
            'responsibility' => 'Maintain Loan Status Spreadsheet',
            'LBM' => 'A',
            'LOF' => 'R',
            'LAN' => 'R'
        ]);
        Matrix::create([
            'group_heading' => 'Loan Processing',
            'responsibility' => 'Maintain Customer Analysis Files',
            'OAS' => 'A',
            'LBM' => 'A',
            'LOF' => 'A',
            'LAN' => 'R'
        ]);
        Matrix::create([
            'group_heading' => 'Loan Processing',
            'responsibility' => 'Process Loan Changes or Extensions',
            'OAS' => 'A',
            'LOF' => 'R',
            'LAN' => 'R'
        ]);
        Matrix::create([
            'group_heading' => 'Loan Processing',
            'responsibility' => 'Pursue Collections (Acct Reconciliation',
            'CEO' => 'A',
            'ABM' => 'R',
            'LBM' => 'A',
            'LOF' => 'R',
            'LAN' => 'A',
            'CON' => 'R'
        ]);
        Matrix::create([
            'group_heading' => 'Loan Processing',
            'responsibility' => 'Cancel Security Documents (if paid in full',
            'CEO' => 'A',
            'ABM' => 'R',
            'LBM' => 'A',
            'LOF' => 'R',
            'LAN' => 'A',
            'CON' => 'R'
        ]);
        Matrix::create([
            'group_heading' => 'Loan Processing',
            'responsibility' => 'Development of LO & LA',
            'CEO' => 'A',
            'ABM' => 'R',
            'LBM' => 'R',
            'LOF' => 'A'
        ]);
        Matrix::create([
            'group_heading' => 'Loan Processing',
            'responsibility' => 'Lead for Bad Debt conf w/ Atty',
            'CEO' => 'R',
            'LBM' => 'A',
            'LOF' => 'A',
            'CON' => 'A'
        ]);

        //CROP INSURANCE OPERATIONS
        Matrix::create([
            'group_heading' => 'Loan Operations',
            'responsibility' => 'Customer Setup (QB)',
            'MGR' => 'R',
            'OAS' => 'A',
            'LBM' => 'A'
        ]);

        Matrix::create([
            'group_heading' => 'Loan Operations',
            'responsibility' => 'Invoice Fees',
            'MGR' => 'R',
            'OAS' => 'A',
            'LBM' => 'A'
        ]);

        Matrix::create([
            'group_heading' => 'Loan Operations',
            'responsibility' => 'Verify Availability of Funds',
            'MGR' => 'A',
            'OAS' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Loan Operations',
            'responsibility' => 'Disburse Funds (includes invoicing)',
            'MGR' => 'R',
            'OAS' => 'A',
            'LBM' => 'A'
        ]);

        Matrix::create([
            'group_heading' => 'Loan Operations',
            'responsibility' => 'Maintain Customer Hard Files',
            'MGR' => 'A',
            'OAS' => 'R',
            'LBM' => 'A',
            'LOF' => 'A'
        ]);

        Matrix::create([
            'group_heading' => 'Loan Operations',
            'responsibility' => 'Customer Reporting (QB)',
            'MGR' => 'R',
            'OAS' => 'A',
            'LBM' => 'A'
        ]);

        // CROP INSURANCE OPERATIONS
        Matrix::create([
            'group_heading' => 'Crop Insurance Management',
            'responsibility' => 'Develop Customer Target Lists',
            'CEO' => 'A',
            'ABM' => 'A',
            'IBM' => 'R',
            'COM' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Crop Insurance Management',
            'responsibility' => 'Market Insurance Policies',
            'CEO' => 'A',
            'ABM' => 'A',
            'IBM' => 'R',
            'COM' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Crop Insurance Management',
            'responsibility' => 'Serve as Resource for Insurance Questions',
            'ABM' => 'A',
            'IBM' => 'R',
            'COM' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Crop Insurance Management',
            'responsibility' => 'Send Customer Info (from Mrkt Calendar)',
            'OAS' => 'A',
            'IBM' => 'R',
            'IAS' => 'A'
        ]);

        Matrix::create([
            'group_heading' => 'Crop Insurance Management',
            'responsibility' => 'Quote Policies',
            'ABM' => 'A',
            'IBM' => 'R',
            'IAS' => 'A',
            'COM' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Crop Insurance Management',
            'responsibility' => 'Perform Customer Analysis',
            'IBM' => 'R',
            'IAS' => 'A',
            'COM' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Crop Insurance Management',
            'responsibility' => 'Obtain Applications (w/ signatures)',
            'MGR' => 'A',
            'IBM' => 'R',
            'IAS' => 'A',
            'COM' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Crop Insurance Management',
            'responsibility' => 'Process Applications',
            'IBM' => 'A',
            'IAS' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Crop Insurance Management',
            'responsibility' => 'Obtain Production Reports',
            'LOF' => 'A',
            'LAN' => 'A',
            'IBM' => 'R',
            'IAS' => 'A',
            'COM' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Crop Insurance Management',
            'responsibility' => 'Process Production Reports',
            'OAS' => 'A',
            'IBM' => 'A',
            'IAS' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Crop Insurance Management',
            'responsibility' => 'Setting Up Added Land Database',
            'OAS' => 'A',
            'LBM' => 'A',
            'LOF' => 'R',
            'LAN' => 'A',
            'IBM' => 'R',
            'IAS' => 'R',
            'COM' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Crop Insurance Management',
            'responsibility' => 'Obtain Acreage Reports',
            'LBM' => 'A',
            'LOF' => 'A',
            'LAN' => 'A',
            'IBM' => 'R',
            'IAS' => 'R',
            'COM' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Crop Insurance Management',
            'responsibility' => 'Process Acreage Reports',
            'MGR' => 'A',
            'OAS' => 'A',
            'IBM' => 'A',
            'IAS' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Crop Insurance Management',
            'responsibility' => 'Process Claims',
            'MGR' => 'A',
            'IBM' => 'A',
            'IAS' => 'R'
        ]);

        // CROP INSURANCE MANAGEMENT
        Matrix::create([
            'group_heading' => 'Crop Insurance Management',
            'responsibility' => 'Direct Crop Insurance Business',
            'ABM' => 'A',
            'IBM' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Crop Insurance Management',
            'responsibility' => 'Develop New Lines of Insurance Products',
            'IBM' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Crop Insurance Management',
            'responsibility' => 'Maintain Insurance Status Spreadsheet',
            'CON' => 'A',
            'IBM' => 'R',
            'IAS' => 'A'
        ]);

        Matrix::create([
            'group_heading' => 'Crop Insurance Management',
            'responsibility' => 'Review Processed Applications',
            'MGR' => 'A',
            'IBM' => 'R',
            'IAS' => 'A',
            'COM' => 'A'
        ]);

        Matrix::create([
            'group_heading' => 'Crop Insurance Management',
            'responsibility' => 'Review Processed Added/Ref Land',
            'MGR' => 'A',
            'IBM' => 'R',
            'IAS' => 'A',
            'COM' => 'A'
        ]);

        Matrix::create([
            'group_heading' => 'Crop Insurance Management',
            'responsibility' => 'Review Processed Production Reports',
            'IBM' => 'R',
            'IAS' => 'A',
            'COM' => 'A'
        ]);

        Matrix::create([
            'group_heading' => 'Crop Insurance Management',
            'responsibility' => 'Review Processed Acreage Reports',
            'MGR' => 'A',
            'IBM' => 'R',
            'IAS' => 'A',
            'COM' => 'A'
        ]);

        Matrix::create([
            'group_heading' => 'Crop Insurance Management',
            'responsibility' => 'Update Cheatsheet for Agents',
            'IBM' => 'R',
            'IAS' => 'A'
        ]);

        Matrix::create([
            'group_heading' => 'Crop Insurance Management',
            'responsibility' => 'Negotiate Underwriter Contracts',
            'CEO' => 'A',
            'ABM' => 'A',
            'IBM' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Crop Insurance Management',
            'responsibility' => 'Reconcile/Allocate Commissions',
            'CEO' => 'A',
            'ABM' => 'A',
            'IBM' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Crop Insurance Management',
            'responsibility' => 'Manage/Schedule CE for Agents',
            'IBM' => 'R',
            'IAS' => 'A'
        ]);

        Matrix::create([
            'group_heading' => 'Crop Insurance Management',
            'responsibility' => 'Attend CE Training Classes',
            'IBM' => 'R',
            'IAS' => 'R',
            'COM' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Crop Insurance Management',
            'responsibility' => 'Train New Agents',
            'IBM' => 'R',
            'IAS' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Crop Insurance Management',
            'responsibility' => 'Manage State Licensing Requirements',
            'MGR' => 'A',
            'IBM' => 'R',
            'IAS' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Crop Insurance Management',
            'responsibility' => 'Maintain Customer Hard Files',
            'OAS' => 'A',
            'IBM' => 'R',
            'IAS' => 'A'
        ]);

        Matrix::create([
            'group_heading' => 'Crop Insurance Management',
            'responsibility' => 'Maintain Underwriter Hard Files',
            'OAS' => 'A',
            'IBM' => 'R',
            'IAS' => 'A'
        ]);

        Matrix::create([
            'group_heading' => 'Crop Insurance Management',
            'responsibility' => 'Maintain Agent Hard Files',
            'OAS' => 'A',
            'IBM' => 'R',
            'IAS' => 'A'
        ]);

        // MONTH END PROCESSING
        Matrix::create([
            'group_heading' => 'Month End Processing',
            'responsibility' => 'Chart of Accounts (QB)',
            'CEO' => 'A',
            'ABM' => 'A',
            'MGR' => 'R',
            'CON' => 'A'
        ]);

        Matrix::create([
            'group_heading' => 'Month End Processing',
            'responsibility' => 'Month-End (balancing, JE, other)',
            'CEO' => 'A',
            'ABM' => 'A',
            'MGR' => 'R',
            'CON' => 'A'
        ]);

        Matrix::create([
            'group_heading' => 'Month End Processing',
            'responsibility' => 'Customer Statements (QB)',
            'CEO' => 'A',
            'MGR' => 'R',
            'OAS' => 'A'
        ]);

        Matrix::create([
            'group_heading' => 'Month End Processing',
            'responsibility' => 'Financials (QB)',
            'CEO' => 'A',
            'MGR' => 'R',
            'CON' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Month End Processing',
            'responsibility' => 'Monthly Statement of Cash Flows',
            'CON' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Month End Processing',
            'responsibility' => 'Accounts Payable (QB)',
            'CEO' => 'R',
            'ABM' => 'A',
            'MGR' => 'A'
        ]);

        Matrix::create([
            'group_heading' => 'Month End Processing',
            'responsibility' => 'Accounts Receivable (que collections)',
            'CEO' => 'R',
            'ABM' => 'R',
            'MGR' => 'A',
            'CON' => 'A'
        ]);

        Matrix::create([
            'group_heading' => 'Month End Processing',
            'responsibility' => 'Review Past Due and Report to CEO',
            'ABM' => 'R',
            'MGR' => 'A',
            'LBM' => 'A',
            'LOF' => 'R',
            'CON' => 'R'
        ]);

        // BUSINESS MANAGEMENT
        Matrix::create([
            'group_heading' => 'Business Management',
            'responsibility' => 'Budgeting',
            'CEO' => 'R',
            'ABM' => 'R',
            'MGR' => 'A',
            'CON' => 'A'
        ]);

        Matrix::create([
            'group_heading' => 'Business Management',
            'responsibility' => 'Cash Management',
            'CEO' => 'R',
            'MGR' => 'A',
            'CON' => 'A'
        ]);

        Matrix::create([
            'group_heading' => 'Business Management',
            'responsibility' => 'Line of Credit',
            'CEO' => 'R',
            'ABM' => 'A'
        ]);

        Matrix::create([
            'group_heading' => 'Business Management',
            'responsibility' => 'Marketing Communications (Promo)',
            'CEO' => 'R',
            'ABM' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Business Management',
            'responsibility' => 'Marketing Strategies',
            'CEO' => 'R',
            'ABM' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Business Management',
            'responsibility' => 'Maintain Marketing Calendar',
            'CEO' => 'A'
        ]);

        Matrix::create([
            'group_heading' => 'Business Management',
            'responsibility' => 'Marketing Presentations',
            'CEO' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Business Management',
            'responsibility' => 'Policies and Procedures Maintenance',
            'CEO' => 'R',
            'ABM' => 'R',
            'LBM' => 'R',
            'LOF' => 'A',
            'LAN' => 'A',
            'IBM' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Business Management',
            'responsibility' => 'Loan Processing Guidelines',
            'CEO' => 'A',
            'LBM' => 'R',
            'LOF' => 'A',
            'LAN' => 'A'
        ]);

        Matrix::create([
            'group_heading' => 'Business Management',
            'responsibility' => 'Office Tools Review',
            'CEO' => 'R',
            'LBM' => 'A',
            'LOF' => 'A'
        ]);

        Matrix::create([
            'group_heading' => 'Business Management',
            'responsibility' => 'Document Filing Standards',
            'CEO' => 'A',
            'MGR' => 'A',
            'OAS' => 'A',
            'LBM' => 'R',
            'LOF' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Business Management',
            'responsibility' => 'Human Resource Plan',
            'CEO' => 'A',
            'ABM' => 'A',
            'HRM' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Business Management',
            'responsibility' => 'Facility Management',
            'CEO' => 'R',
            'ABM' => 'R',
            'LAN' => 'A'
        ]);

        Matrix::create([
            'group_heading' => 'Business Management',
            'responsibility' => 'Lead for IT (PCs, Network, Phone)',
            'ABM' => 'A',
            'LBM' => 'R',
            'LAN' => 'A'
        ]);

        // LOAN AUDIT AND CONTROLS
        Matrix::create([
            'group_heading' => 'Loan Audit and Controls',
            'responsibility' => 'Collections Processes and Procedure',
            'LBM' => 'A',
            'CON' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Loan Audit and Controls',
            'responsibility' => 'Internal Audit',
            'CON' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Loan Audit and Controls',
            'responsibility' => 'Special Assets Performance',
            'CON' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Loan Audit and Controls',
            'responsibility' => 'Define Tax Requirements for new locations',
            'CON' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Loan Audit and Controls',
            'responsibility' => 'Define Licence Requirements for new locations',
            'CON' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Loan Audit and Controls',
            'responsibility' => 'Identify tax solutions',
            'CON' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Loan Audit and Controls',
            'responsibility' => 'Lead for CPA',
            'CON' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Loan Audit and Controls',
            'responsibility' => 'Lead for legal services',
            'CON' => 'R'
        ]);

        // HUMAN RESOURCES
        Matrix::create([
            'group_heading' => 'Human Resources',
            'responsibility' => 'Payroll',
            'MGR' => 'A',
            'HRM' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Human Resources',
            'responsibility' => 'Employee Files',
            'MGR' => 'A',
            'HRM' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Human Resources',
            'responsibility' => 'Employee +/-',
            'CEO' => 'R',
            'ABM' => 'R',
            'MGR' => 'A',
            'HRM' => 'R'
        ]);

        // MISC. BUSINESS PROCESSES
        Matrix::create([
            'group_heading' => 'Misc Business Processes',
            'responsibility' => 'Answering Phones and Deliver Messages',
            'OAS' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Misc Business Processes',
            'responsibility' => 'Receive and Distribute Mail',
            'OAS' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Misc Business Processes',
            'responsibility' => 'Deliver Bank Deposits',
            'OAS' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Misc Business Processes',
            'responsibility' => 'Deliver Filings to Court House',
            'OAS' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Misc Business Processes',
            'responsibility' => 'Deliver checks to Walk-Ins',
            'OAS' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Misc Business Processes',
            'responsibility' => 'Copy Weekly Invoices and Checks',
            'OAS' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Misc Business Processes',
            'responsibility' => 'Copies, Faxes and Mail',
            'OAS' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Misc Business Processes',
            'responsibility' => 'Mail Customer Statements',
            'OAS' => 'R'
        ]);

        Matrix::create([
            'group_heading' => 'Misc Business Processes',
            'responsibility' => 'Lead for Housekeeping Services',
            'OAS' => 'R'
        ]);
    }
}