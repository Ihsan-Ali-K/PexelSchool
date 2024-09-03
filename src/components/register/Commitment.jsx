import React from 'react';
import { useTranslation } from 'react-i18next';

const Commitment = () => {
    const { t } = useTranslation('register');

    return (
        <div className='commitment container'>
            <h2 className='text-center mb-4'>{t('internalRulesTitle')}</h2>

            <h3>{t('introductionTitle')}</h3>
            <p>{t('introductionContent')}</p>

            <h4>{t('administrationTitle')}</h4>

            <h5>{t('admissionAndRegistrationTitle')}</h5>
            <ul>
                <li>{t('admissionAndRegistrationContent1')}</li>
                <li>{t('admissionAndRegistrationContent2')}</li>
                <li>{t('admissionAndRegistrationContent3')}</li>
                <li>{t('admissionAndRegistrationContent4')}</li>
                <li>{t('admissionAndRegistrationContent5')}</li>
            </ul>

            <h5>{t('schoolSchedulesTitle')}</h5>
            <ul>
                <li>{t('schoolSchedulesContent1')}</li>
                <li>{t('schoolSchedulesContent2')}</li>
                <li>{t('schoolSchedulesContent3')}</li>
            </ul>

            <h5>{t('behaviorAndDisciplineTitle')}</h5>
            <ul>
                <li>{t('behaviorAndDisciplineContent1')}</li>
                <li>{t('behaviorAndDisciplineContent2')}</li>
                <li>{t('behaviorAndDisciplineContent3')}</li>
            </ul>

            <h5>{t('uniformTitle')}</h5>
            <ul>
                <li>{t('uniformContent1')}</li>
                <li>{t('uniformContent2')}</li>
                <li>{t('uniformContent3')}</li>
            </ul>

            <h5>{t('securityTitle')}</h5>
            <ul>
                <li>{t('securityContent1')}</li>
                <li>{t('securityContent2')}</li>
                <li>{t('securityContent3')}</li>
            </ul>

            <h5>{t('useOfTechnologiesTitle')}</h5>
            <ul>
                <li>{t('useOfTechnologiesContent1')}</li>
                <li>{t('useOfTechnologiesContent2')}</li>
                <li>{t('useOfTechnologiesContent3')}</li>
            </ul>

            <h5>{t('healthAndWellBeingTitle')}</h5>
            <ul>
                <li>{t('healthAndWellBeingContent1')}</li>
                <li>{t('healthAndWellBeingContent2')}</li>
                <li>{t('healthAndWellBeingContent3')}</li>
                <li>{t('healthAndWellBeingContent4')}</li>
            </ul>

            <h5>{t('extracurricularActivitiesTitle')}</h5>
            <ul>
                <li>{t('extracurricularActivitiesContent1')}</li>
                <li>{t('extracurricularActivitiesContent2')}</li>
                <li>{t('extracurricularActivitiesContent3')}</li>
            </ul>

            <h5>{t('communicationWithParentsTitle')}</h5>
            <ul>
                <li>{t('communicationWithParentsContent1')}</li>
                <li>{t('communicationWithParentsContent2')}</li>
                <li>{t('communicationWithParentsContent3')}</li>
            </ul>

            <h4>{t('tuitionFeesTitle')}</h4>

            <h5>{t('paymentTermsTitle')}</h5>
            <ul>
                <li>{t('paymentTermsContent1')}</li>
                <li>{t('paymentTermsContent2')}</li>
                <li>{t('paymentTermsContent3')}</li>
            </ul>

            <h5>{t('latePaymentsTitle')}</h5>
            <ul>
                <li>{t('latePaymentsContent1')}</li>
                <li>{t('latePaymentsContent2')}</li>
            </ul>

            <h5>{t('refundsTitle')}</h5>
            <ul>
                <li>{t('refundsContent1')}</li>
                <li>{t('refundsContent2')}</li>
            </ul>

            <h4>{t('parentsOfStudentsTitle')}</h4>

            <h5>{t('respectAndCivicsTitle')}</h5>
            <ul>
                <li>{t('respectAndCivicsContent1')}</li>
                <li>{t('respectAndCivicsContent2')}</li>
            </ul>

            <h5>{t('communicationsTitle')}</h5>
            <ul>
                <li>{t('communicationsContent1')}</li>
                <li>{t('communicationsContent2')}</li>
            </ul>

            <h5>{t('participationAndEngagementTitle')}</h5>
            <ul>
                <li>{t('participationAndEngagementContent1')}</li>
                <li>{t('participationAndEngagementContent2')}</li>
            </ul>

            <h5>{t('conductWithinTheEstablishmentTitle')}</h5>
            <ul>
                <li>{t('conductWithinTheEstablishmentContent1')}</li>
                <li>{t('conductWithinTheEstablishmentContent2')}</li>
                <li>{t('conductWithinTheEstablishmentContent3')}</li>
            </ul>

            <h5>{t('generalProvisionsTitle')}</h5>
            <ul>
                <li>{t('generalProvisionsContent1')}</li>
                <li>{t('generalProvisionsContent2')}</li>
            </ul>

            <h3>{t('conclusionTitle')}</h3>
            <p>{t('conclusion')}</p>

            <h3 className='text-center mt-4'>{t('schoolTitle')}</h3>
            <p className='text-center'>{t('signature')}</p>
        </div>
    );
};

export default Commitment;
