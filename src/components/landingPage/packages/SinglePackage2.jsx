import React from 'react'
import { P1PackageDiv,P1Center,P1Center2,P1Text1,P1Text2,P1Text3,P1Text4,P1Circle,P1ChoosePlanButton,P1ChoosePlanButtonText } from './SinglePackageStyle'

const SinglePackage2 = ({name}) => {
    return (
        <P1PackageDiv>
    <P1Center>
    <P1Text1>{name}</P1Text1>
    </P1Center>
    <P1Center>
    <P1Circle>
        <P1Text2>$100</P1Text2>
        <P1Text3>/month</P1Text3>
    </P1Circle>
    </P1Center>
    <P1Center2>
    <P1Text4>Single Account</P1Text4>
    <P1Text4>Unlimited Device</P1Text4>
    <P1Text4>25 Sms Per Minute</P1Text4>
    <P1Text4>25 Sms Per Minute</P1Text4>
    <P1Text4>Unlimited SMS</P1Text4>
    <P1Text4>Email/Phone Support</P1Text4>
    <P1Text4>Free Api</P1Text4>
    </P1Center2>
    <P1Center><P1ChoosePlanButton>
        <P1ChoosePlanButtonText>
    Choose Plan
        </P1ChoosePlanButtonText>
        </P1ChoosePlanButton></P1Center>
        </P1PackageDiv>
      )
}

export default SinglePackage2