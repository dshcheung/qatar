// ! COPY THIS IN A FRESH HKJC CONSOLE START
// ? Check Selection | Remember to check team combination before placing bets
const checkSelection = (teams) => { // eslint-disable-line
  teams.map((team) => $(team).trigger('click'))
}

// ? Time Constants | Change these to adjust the time between each bet
const TOTAL_TIME = 5000
const CONFIRM_TIME = 1000
const CLOSE_TIME = 4000

// findCombinations
const findCombination = (originalArr, combo) => {
  const results = []
  const temp = []
  temp.length = combo

  const combine = (input, len, start) => {
    if (len === 0) {
      results.push([...temp])
      return
    }

    for (let i = start; i <= input.length - len; i += 1) {
      temp[temp.length - len] = input[i]
      combine(input, len - 1, i + 1)
    }
  }

  combine(originalArr, combo, 0)

  return results
}

// Create, Send, Confirm Bet
const generateSlip = (inputIds, valueAmount = '10', formula = '1') => {
  // Tick Odds
  inputIds.forEach((id) => {
    $(id).trigger('click')
  })

  // Add Slip
  addslip('')

  // Mark All Up
  for (let i = 0; i < inputIds.length; i += 1) {
    OnClickAllUpButton(i)
  }

  $('#inputAllUp').val(valueAmount)
  $('#sel_formula').val(formula)

  // Create Add Up Slip
  CreateAndAddAllUp()

  // Remove Single Slip
  for (let i = 0; i < inputIds.length; i += 1) {
    DeleteBetlineWithIndex(0, true)
  }

  // Preview Bet
  OnClickPreview()

  // Confirm Bet
  setTimeout(() => {
    OnClickConfirmBet()
  }, CONFIRM_TIME)

  // Close Confirmation
  setTimeout(() => {
    OnClickClose()
    console.log('Bet Placed') // eslint-disable-line
  }, CLOSE_TIME)
}

// executeCombo
const executeCombo = (combinations, valueAmount = '10', formula = '1') => {
  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination, valueAmount, formula)
      console.log('Starting Combination', i + 1) // eslint-disable-line
    }, TOTAL_TIME * i)
  })
}

// GROUP A
const ECU = '#tourn_GPW_50003675_1_2_18994020_0_1_c'
const ECU_NED = '#tourn_GPF_50003675_1_0201_79327019_0_1_c'
const ECU_QAT = '#tourn_GPF_50003675_1_0204_79327019_0_2_c'
const ECU_SEN = '#tourn_GPF_50003675_1_0203_79327019_0_3_c'
const NED_QAT = '#tourn_GPF_50003675_1_0104_79327019_0_5_c'
const QAT_NED = '#tourn_GPF_50003675_1_0401_79327019_0_8_c'

// GROUP B
const ENG = '#tourn_GPW_50003675_2_1_18995020_0_1_c'
const ENG_USA = '#tourn_GPF_50003675_2_0102_79325019_0_2_c'
const ENG_IRN = '#tourn_GPF_50003675_2_0104_79325019_0_1_c'

// GROUP C
const ARG = '#tourn_GPW_50003675_3_1_18989020_0_1_c'
const POL = '#tourn_GPW_50003675_3_3_18989020_0_3_c'
const ARG_KSA = '#tourn_GPF_50003675_3_0104_79322019_0_3_c'
const POL_ARG = '#tourn_GPF_50003675_3_0301_79322019_0_7_c'

// GROUP D
const TUN = '#tourn_GPW_50003675_4_3_18992020_0_4_c'
const FRA = '#tourn_GPW_50003675_4_1_18992020_0_3_c'
const FRA_TUN = '#tourn_GPF_50003675_4_0103_79320019_0_9_c'
const TUN_FRA = '#tourn_GPF_50003675_4_0301_79320019_0_12_c'

// GROUP E
const ESP = '#tourn_GPW_50003675_5_1_18988020_0_4_c'
const JPN = '#tourn_GPW_50003675_5_3_18988020_0_3_c'
const GER = '#tourn_GPW_50003675_5_2_18988020_0_2_c'
const ESP_GER = '#tourn_GPF_50003675_5_0102_79321019_0_11_c'
const ESP_CRC = '#tourn_GPF_50003675_5_0104_79321019_0_10_c'
const GER_JPN = '#tourn_GPF_50003675_5_0203_79321019_0_5_c'
const JPN_GER = '#tourn_GPF_50003675_5_0302_79321019_0_8_c'

// GROUP F
const BEL = '#tourn_GPW_50003675_6_1_18993020_0_1_c'
const MAR = '#tourn_GPW_50003675_6_3_18993020_0_4_c'
const BEL_MAR = '#tourn_GPF_50003675_6_0103_79326019_0_3_c'
const MAR_BEL = '#tourn_GPF_50003675_6_0301_79326019_0_10_c'

// GROUP G
const SRB = '#tourn_GPW_50003675_7_3_18990020_0_3_c'
const CMR = '#tourn_GPW_50003675_7_4_18990020_0_2_c'
const BRA = '#tourn_GPW_50003675_7_1_18990020_0_1_c'
const BRA_SUI = '#tourn_GPF_50003675_7_0102_79324019_0_3_c'
const BRA_SRB = '#tourn_GPF_50003675_7_0103_79324019_0_2_c'
const BRA_CMR = '#tourn_GPF_50003675_7_0104_79324019_0_1_c'
const SRB_BRA = '#tourn_GPF_50003675_7_0301_79324019_0_7_c'
const CMR_BRA = '#tourn_GPF_50003675_7_0401_79324019_0_4_c'

// GROUP H
const POR = '#tourn_GPW_50003675_8_1_18991020_0_3_c'
const POR_URU = '#tourn_GPF_50003675_8_0102_79323019_0_9_c'
const POR_KOR = '#tourn_GPF_50003675_8_0104_79323019_0_8_c'
// ! COPY THIS IN A FRESH HKJC CONSOLE END

// ! Main Combination 01-24
// ? Nov 20 | 24 * 28 * $10 = $6720
const c_01_to_24_F6x1_8C6 = () => { // eslint-disable-line
  // Base Teams
  // A       B       C       D       E       F       G       H
  // NED_QAT ENG_USA ARG_KSA TUN_FRA ESP_GER BEL_MAR SRB_BRA POR_URU
  // QAT_NED                 FRA_TUN ESP_CRC MAR_BEL CMR_BRA

  // Ignored
  // const temps03 = [QAT_NED, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, MAR_BEL, SRB_BRA, POR_URU] // 19
  // const temps04 = [QAT_NED, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, MAR_BEL, CMR_BRA, POR_URU] // 20
  // const temps07 = [QAT_NED, ENG_USA, ARG_KSA, TUN_FRA, ESP_CRC, MAR_BEL, SRB_BRA, POR_URU] // 23
  // const temps08 = [QAT_NED, ENG_USA, ARG_KSA, TUN_FRA, ESP_CRC, MAR_BEL, CMR_BRA, POR_URU] // 24
  // const temps09 = [QAT_NED, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, BEL_MAR, SRB_BRA, POR_URU] // 25
  // const temps10 = [QAT_NED, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, BEL_MAR, CMR_BRA, POR_URU] // 26
  // const temps13 = [QAT_NED, ENG_USA, ARG_KSA, FRA_TUN, ESP_CRC, BEL_MAR, SRB_BRA, POR_URU] // 29
  // const temps14 = [QAT_NED, ENG_USA, ARG_KSA, FRA_TUN, ESP_CRC, BEL_MAR, CMR_BRA, POR_URU] // 30

  const teams01 = [NED_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_CRC, BEL_MAR, SRB_BRA, POR_URU] // 13
  const teams02 = [NED_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_CRC, MAR_BEL, SRB_BRA, POR_URU] // 15
  const teams03 = [NED_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, BEL_MAR, SRB_BRA, POR_URU] // 09
  const teams04 = [NED_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, MAR_BEL, SRB_BRA, POR_URU] // 11
  const teams05 = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_CRC, BEL_MAR, SRB_BRA, POR_URU] // 05
  const teams06 = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_CRC, MAR_BEL, SRB_BRA, POR_URU] // 07
  const teams07 = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, BEL_MAR, SRB_BRA, POR_URU] // 01
  const teams08 = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, MAR_BEL, SRB_BRA, POR_URU] // 03
  const teams09 = [NED_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_CRC, BEL_MAR, CMR_BRA, POR_URU] // 14
  const teams10 = [NED_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_CRC, MAR_BEL, CMR_BRA, POR_URU] // 16
  const teams11 = [NED_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, BEL_MAR, CMR_BRA, POR_URU] // 10
  const teams12 = [NED_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, MAR_BEL, CMR_BRA, POR_URU] // 12
  const teams13 = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_CRC, BEL_MAR, CMR_BRA, POR_URU] // 06
  const teams14 = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_CRC, MAR_BEL, CMR_BRA, POR_URU] // 08
  const teams15 = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, BEL_MAR, CMR_BRA, POR_URU] // 02
  const teams16 = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, MAR_BEL, CMR_BRA, POR_URU] // 04
  const teams17 = [QAT_NED, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, BEL_MAR, SRB_BRA, POR_URU] // 17
  const teams18 = [QAT_NED, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, MAR_BEL, SRB_BRA, POR_URU] // 27
  const teams19 = [QAT_NED, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, BEL_MAR, CMR_BRA, POR_URU] // 18
  const teams20 = [QAT_NED, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, MAR_BEL, CMR_BRA, POR_URU] // 28
  const teams21 = [QAT_NED, ENG_USA, ARG_KSA, TUN_FRA, ESP_CRC, BEL_MAR, SRB_BRA, POR_URU] // 21
  const teams22 = [QAT_NED, ENG_USA, ARG_KSA, FRA_TUN, ESP_CRC, MAR_BEL, SRB_BRA, POR_URU] // 31
  const teams23 = [QAT_NED, ENG_USA, ARG_KSA, TUN_FRA, ESP_CRC, BEL_MAR, CMR_BRA, POR_URU] // 22
  const teams24 = [QAT_NED, ENG_USA, ARG_KSA, FRA_TUN, ESP_CRC, MAR_BEL, CMR_BRA, POR_URU] // 32

  const combinations = [
    ...findCombination(teams01, 6),
    ...findCombination(teams02, 6),
    ...findCombination(teams03, 6),
    ...findCombination(teams04, 6),
    ...findCombination(teams05, 6),
    ...findCombination(teams06, 6),
    ...findCombination(teams07, 6),
    ...findCombination(teams08, 6),
    ...findCombination(teams09, 6),
    ...findCombination(teams10, 6),
    ...findCombination(teams11, 6),
    ...findCombination(teams12, 6),
    ...findCombination(teams13, 6),
    ...findCombination(teams14, 6),
    ...findCombination(teams15, 6),
    ...findCombination(teams16, 6),
    ...findCombination(teams17, 6),
    ...findCombination(teams18, 6),
    ...findCombination(teams19, 6),
    ...findCombination(teams20, 6),
    ...findCombination(teams21, 6),
    ...findCombination(teams22, 6),
    ...findCombination(teams23, 6),
    ...findCombination(teams24, 6)
  ]
  executeCombo(combinations)
}

// ? Nov 20 | 28 * $10 * 4 times = $1120
const extra_c_07_F6x1_8C6 = () => { // eslint-disable-line
  const teams07 = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, BEL_MAR, SRB_BRA, POR_URU]
  const combinations = [
    ...findCombination(teams07, 6),
    ...findCombination(teams07, 6),
    ...findCombination(teams07, 6),
    ...findCombination(teams07, 6)
  ]
  executeCombo(combinations)
}

// ! Main Combination 25-36
// ? Nov 21 | 12 * 28 * $10 = $3360
const c_25_to_36_F6x1_8C6 = () => { // eslint-disable-line
  // Base Teams
  // A       B       C       D       E       F       G       H
  // ECU_QAT ENG_USA ARG_KSA TUN_FRA ESP_GER BEL_MAR SRB_BRA POR_URU
  // ECU_NED                 FRA_TUN         MAR_BEL CMR_BRA

  // Ignored
  // const temps04 = [ECU_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, MAR_BEL, CMR_BRA, POR_URU] // 04
  // const temps08 = [ECU_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, MAR_BEL, CMR_BRA, POR_URU] // 08
  // const temps12 = [ECU_NED, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, MAR_BEL, CMR_BRA, POR_URU] // 12
  // const temps16 = [ECU_NED, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, MAR_BEL, CMR_BRA, POR_URU] // 16

  const teams25 = [ECU_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, BEL_MAR, SRB_BRA, POR_URU] // 01
  const teams26 = [ECU_NED, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, BEL_MAR, SRB_BRA, POR_URU] // 09
  const teams27 = [ECU_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, BEL_MAR, SRB_BRA, POR_URU] // 05
  const teams28 = [ECU_NED, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, BEL_MAR, SRB_BRA, POR_URU] // 13
  const teams29 = [ECU_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, MAR_BEL, SRB_BRA, POR_URU] // 03
  const teams30 = [ECU_NED, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, MAR_BEL, SRB_BRA, POR_URU] // 11
  const teams31 = [ECU_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, MAR_BEL, SRB_BRA, POR_URU] // 07
  const teams32 = [ECU_NED, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, MAR_BEL, SRB_BRA, POR_URU] // 15
  const teams33 = [ECU_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, BEL_MAR, CMR_BRA, POR_URU] // 02
  const teams34 = [ECU_NED, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, BEL_MAR, CMR_BRA, POR_URU] // 10
  const teams35 = [ECU_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, BEL_MAR, CMR_BRA, POR_URU] // 06
  const teams36 = [ECU_NED, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, BEL_MAR, CMR_BRA, POR_URU] // 14

  const combinations = [
    ...findCombination(teams25, 6),
    ...findCombination(teams26, 6),
    ...findCombination(teams27, 6),
    ...findCombination(teams28, 6),
    ...findCombination(teams29, 6),
    ...findCombination(teams30, 6),
    ...findCombination(teams31, 6),
    ...findCombination(teams32, 6),
    ...findCombination(teams33, 6),
    ...findCombination(teams34, 6),
    ...findCombination(teams35, 6),
    ...findCombination(teams36, 6)
  ]
  executeCombo(combinations)
}

// ? Nov 21 | 12 * 7 * $10 = $840
const extra_c_25_to_36_wo_group_E_F6x1_7C6 = () => { // eslint-disable-line
  const teams25 = [ECU_QAT, ENG_USA, ARG_KSA, TUN_FRA, BEL_MAR, SRB_BRA, POR_URU]
  const teams26 = [ECU_NED, ENG_USA, ARG_KSA, TUN_FRA, BEL_MAR, SRB_BRA, POR_URU]
  const teams27 = [ECU_QAT, ENG_USA, ARG_KSA, FRA_TUN, BEL_MAR, SRB_BRA, POR_URU]
  const teams28 = [ECU_NED, ENG_USA, ARG_KSA, FRA_TUN, BEL_MAR, SRB_BRA, POR_URU]
  const teams29 = [ECU_QAT, ENG_USA, ARG_KSA, TUN_FRA, MAR_BEL, SRB_BRA, POR_URU]
  const teams30 = [ECU_NED, ENG_USA, ARG_KSA, TUN_FRA, MAR_BEL, SRB_BRA, POR_URU]
  const teams31 = [ECU_QAT, ENG_USA, ARG_KSA, FRA_TUN, MAR_BEL, SRB_BRA, POR_URU]
  const teams32 = [ECU_NED, ENG_USA, ARG_KSA, FRA_TUN, MAR_BEL, SRB_BRA, POR_URU]
  const teams33 = [ECU_QAT, ENG_USA, ARG_KSA, TUN_FRA, BEL_MAR, CMR_BRA, POR_URU]
  const teams34 = [ECU_NED, ENG_USA, ARG_KSA, TUN_FRA, BEL_MAR, CMR_BRA, POR_URU]
  const teams35 = [ECU_QAT, ENG_USA, ARG_KSA, FRA_TUN, BEL_MAR, CMR_BRA, POR_URU]
  const teams36 = [ECU_NED, ENG_USA, ARG_KSA, FRA_TUN, BEL_MAR, CMR_BRA, POR_URU]

  const combinations = [
    ...findCombination(teams25, 6),
    ...findCombination(teams26, 6),
    ...findCombination(teams27, 6),
    ...findCombination(teams28, 6),
    ...findCombination(teams29, 6),
    ...findCombination(teams30, 6),
    ...findCombination(teams31, 6),
    ...findCombination(teams32, 6),
    ...findCombination(teams33, 6),
    ...findCombination(teams34, 6),
    ...findCombination(teams35, 6),
    ...findCombination(teams36, 6)
  ]
  executeCombo(combinations)
}

// ? Nov 21 | ((6 * 7 * $10) * 2 Times) + ((1 * 7 * $10) * 2 Times) = $840 + $140 = $980
// ? Odds Team $20 Extra
// ? Team25 $20 Extra
const extra_c_25_to_36_odds_wo_group_E_F6x1_7C6 = () => { // eslint-disable-line
  const teams25 = [ECU_QAT, ENG_USA, ARG_KSA, TUN_FRA, BEL_MAR, SRB_BRA, POR_URU]
  const teams27 = [ECU_QAT, ENG_USA, ARG_KSA, FRA_TUN, BEL_MAR, SRB_BRA, POR_URU]
  const teams29 = [ECU_QAT, ENG_USA, ARG_KSA, TUN_FRA, MAR_BEL, SRB_BRA, POR_URU]
  const teams31 = [ECU_QAT, ENG_USA, ARG_KSA, FRA_TUN, MAR_BEL, SRB_BRA, POR_URU]
  const teams33 = [ECU_QAT, ENG_USA, ARG_KSA, TUN_FRA, BEL_MAR, CMR_BRA, POR_URU]
  const teams35 = [ECU_QAT, ENG_USA, ARG_KSA, FRA_TUN, BEL_MAR, CMR_BRA, POR_URU]

  const combinations = [
    ...findCombination(teams25, 6),
    ...findCombination(teams25, 6),

    ...findCombination(teams25, 6),
    ...findCombination(teams27, 6),
    ...findCombination(teams29, 6),
    ...findCombination(teams31, 6),
    ...findCombination(teams33, 6),
    ...findCombination(teams35, 6),

    ...findCombination(teams25, 6),
    ...findCombination(teams27, 6),
    ...findCombination(teams29, 6),
    ...findCombination(teams31, 6),
    ...findCombination(teams33, 6),
    ...findCombination(teams35, 6)
  ]

  executeCombo(combinations)
}

// ? Nov 21 | 5 * 9 * $100 = $4500
const group_winner_c_25_To_36_F8x9_8C7_AND_8C8 = () => { // eslint-disable-line
  // Base Teams
  // A   B   C   D   E   F   G   H
  // ECU ENG ARG TUN ESP BEL SRB POR
  //             FRA     MAR CMR

  // Ignored
  // [ECU, ENG, ARG, TUN, ESP, MAR, CMR, POR] // 04
  // [ECU, ENG, ARG, FRA, ESP, BEL, SRB, POR] // 05
  // [ECU, ENG, ARG, FRA, ESP, MAR, CMR, POR] // 08

  const combinations = [
    [ECU, ENG, ARG, TUN, ESP, BEL, SRB, POR], // 01
    [ECU, ENG, ARG, TUN, ESP, BEL, CMR, POR], // 02
    [ECU, ENG, ARG, TUN, ESP, MAR, SRB, POR], // 03
    [ECU, ENG, ARG, FRA, ESP, BEL, CMR, POR], // 06
    [ECU, ENG, ARG, FRA, ESP, MAR, SRB, POR] // 07
  ]

  // 5 * 9 * 100 = 4500
  executeCombo(combinations, '100', '9')
}

// ? Nov 21 | D | $1000 | Reward Amount = 56.2 * $1000 = $56,200
// ? Nov 21 | J | $2000 | Reward Amount = 56.2 * $2000 = $112,400
const group_winner_stop_loss_c_25_to_36_F5x1_5C5 = () => { // eslint-disable-line
  const teams = [ECU, ENG, ARG, SRB, POR] // 3.6*1.35*1.29*5.9*1.52 = 56.2
  executeCombo([teams], '1000')
}

// ! Main Combination 37-42
// ? Nov 22 | 6 * 28 * $10 = $1680
const c_37_to_42_F6x1_8C6 = () => { // eslint-disable-line
  // Base Teams
  // A       B       C       D       E       F       G       H
  // ECU_NED ENG_IRN ARG_KSA TUN_FRA ESP_GER BEL_MAR SRB_BRA POR_URU
  //                         FRA_TUN         MAR_BEL CMR_BRA

  // Ignored
  // const temps04 = [ECU_NED, ENG_IRN, ARG_KSA, TUN_FRA, ESP_GER, MAR_BEL, CMR_BRA, POR_URU] // 04
  // const temps08 = [ECU_NED, ENG_IRN, ARG_KSA, FRA_TUN, ESP_GER, MAR_BEL, CMR_BRA, POR_URU] // 08

  const teams37 = [ECU_NED, ENG_IRN, ARG_KSA, TUN_FRA, ESP_GER, BEL_MAR, SRB_BRA, POR_URU] // 01
  const teams38 = [ECU_NED, ENG_IRN, ARG_KSA, FRA_TUN, ESP_GER, BEL_MAR, SRB_BRA, POR_URU] // 05
  const teams39 = [ECU_NED, ENG_IRN, ARG_KSA, TUN_FRA, ESP_GER, MAR_BEL, SRB_BRA, POR_URU] // 03
  const teams40 = [ECU_NED, ENG_IRN, ARG_KSA, FRA_TUN, ESP_GER, MAR_BEL, SRB_BRA, POR_URU] // 07
  const teams41 = [ECU_NED, ENG_IRN, ARG_KSA, TUN_FRA, ESP_GER, BEL_MAR, CMR_BRA, POR_URU] // 02
  const teams42 = [ECU_NED, ENG_IRN, ARG_KSA, FRA_TUN, ESP_GER, BEL_MAR, CMR_BRA, POR_URU] // 06

  const combinations = [
    ...findCombination(teams37, 6),
    ...findCombination(teams38, 6),
    ...findCombination(teams39, 6),
    ...findCombination(teams40, 6),
    ...findCombination(teams41, 6),
    ...findCombination(teams42, 6)
  ]
  executeCombo(combinations)
}

// ? Nov 22 | 6 * 7 * $10 = $420
const c_37_to_42_wo_group_E_F6x1_7C6 = () => { // eslint-disable-line
  const teams37 = [ECU_NED, ENG_IRN, ARG_KSA, TUN_FRA, BEL_MAR, SRB_BRA, POR_URU]
  const teams38 = [ECU_NED, ENG_IRN, ARG_KSA, FRA_TUN, BEL_MAR, SRB_BRA, POR_URU]
  const teams39 = [ECU_NED, ENG_IRN, ARG_KSA, TUN_FRA, MAR_BEL, SRB_BRA, POR_URU]
  const teams40 = [ECU_NED, ENG_IRN, ARG_KSA, FRA_TUN, MAR_BEL, SRB_BRA, POR_URU]
  const teams41 = [ECU_NED, ENG_IRN, ARG_KSA, TUN_FRA, BEL_MAR, CMR_BRA, POR_URU]
  const teams42 = [ECU_NED, ENG_IRN, ARG_KSA, FRA_TUN, BEL_MAR, CMR_BRA, POR_URU]

  const combinations = [
    ...findCombination(teams37, 6),
    ...findCombination(teams38, 6),
    ...findCombination(teams39, 6),
    ...findCombination(teams40, 6),
    ...findCombination(teams41, 6),
    ...findCombination(teams42, 6)
  ]
  executeCombo(combinations)
}

// ? Nov 22 | D | $200 | Reward Amount = (4.5 * 5.25 * 9.5 * 25) * $200 = 5610 * $200 = $1122000
// ? Nov 22 | J | $400 | Reward Amount = (4.5 * 5.25 * 9.5 * 25) * $400 = 5610 * $200 = $2244000
const c_37_to_42_group_A_to_D_IRN_F4x1_4C4 = () => { // eslint-disable-line
  const combinations = [
    [ECU_NED, ENG_IRN, ARG_KSA, TUN_FRA]
  ]
  executeCombo(combinations, '200')
}

// ? Nov 22 | $100 | Reward Amount = (4.5 * 2.4* 9.5* 25) * $200 = 2565 * $100 = $256500
const c_37_to_42_group_A_to_D_USA_F4x1_4C4 = () => { // eslint-disable-line
  const combinations = [
    [ECU_NED, ENG_USA, ARG_KSA, TUN_FRA]
  ]
  executeCombo(combinations, '200')
}

// ! Main Combination 43-48
// ? Nov 25 | 1 * 28 * $50 = $1400
const c_43_F6x1_8C6 = () => { // eslint-disable-line
  const teams43 = [ECU_NED, ENG_IRN, POL_ARG, FRA_TUN, JPN_GER, MAR_BEL, BRA_SRB, POR_KOR]

  const combinations = [
    ...findCombination(teams43, 6)
  ]
  executeCombo(combinations, '50')
}

// ? Nov 25 | 1 * 28 * $20 = $560
const c_44_F6x1_8C6 = () => { // eslint-disable-line
  const teams44 = [ECU_NED, ENG_IRN, POL_ARG, FRA_TUN, JPN_GER, MAR_BEL, BRA_CMR, POR_KOR]

  const combinations = [
    ...findCombination(teams44, 6)
  ]
  executeCombo(combinations, '20')
}

// ? Nov 25 | 1 * 28 * $10 = $280
const c_45_F6x1_8C6 = () => { // eslint-disable-line
  const teams45 = [ECU_NED, ENG_IRN, POL_ARG, FRA_TUN, JPN_GER, MAR_BEL, BRA_SUI, POR_KOR]

  const combinations = [
    ...findCombination(teams45, 6)
  ]
  executeCombo(combinations)
}

// ? Nov 25 | 3 * 28 * $10 = $840
const c_46_to_48_F6x1_8C6 = () => { // eslint-disable-line
  const teams46 = [ECU_NED, ENG_IRN, POL_ARG, FRA_TUN, ESP_GER, MAR_BEL, BRA_SRB, POR_KOR]
  const teams47 = [ECU_NED, ENG_IRN, POL_ARG, FRA_TUN, ESP_GER, MAR_BEL, BRA_CMR, POR_KOR]
  const teams48 = [ECU_NED, ENG_IRN, POL_ARG, FRA_TUN, ESP_GER, MAR_BEL, BRA_SUI, POR_KOR]

  const combinations = [
    ...findCombination(teams46, 6),
    ...findCombination(teams47, 6),
    ...findCombination(teams48, 6)
  ]
  executeCombo(combinations)
}

// ? Nov 25 | $2500 = $2500
const group_winner_c_43_to_45_F8x1_8C8 = () => { // eslint-disable-line
  const combinations = [
    [ECU, ENG, POL, FRA, JPN, MAR, BRA, POR]
  ]
  executeCombo(combinations, '2500')
}

// ? Nov 25 | 8 * $200 = $1600
const group_winner_c_43_to_45_F8x8_8C7 = () => { // eslint-disable-line
  const combinations = [
    [ECU, ENG, POL, FRA, JPN, MAR, BRA, POR]
  ]
  executeCombo(combinations, '200', '8')
}

// ? Nov 25 | $500 = $500
const group_winner_c_46_to_48_F8x1_8C8 = () => { // eslint-disable-line
  const combinations = [
    [ECU, ENG, POL, FRA, ESP, MAR, BRA, POR]
  ]
  executeCombo(combinations, '500')
}

// ! Main Combination 49-56
// TODO A: Nov 25 | 3 * 28 * $10 = $840
const c_49_to_50_F6x1_8C6 = () => { // eslint-disable-line
  const teams49 = [ECU_SEN, ENG_IRN, POL_ARG, FRA_TUN, JPN_GER, MAR_BEL, BRA_SRB, POR_KOR]
  const teams50 = [ECU_SEN, ENG_IRN, POL_ARG, FRA_TUN, GER_JPN, MAR_BEL, BRA_SRB, POR_KOR]

  const combinations = [
    ...findCombination(teams49, 6),
    ...findCombination(teams49, 6),
    ...findCombination(teams50, 6)
  ]
  executeCombo(combinations)
}

// TODO B: Nov 25 | 7 * $40 = $280
const c_49_F6x1_7C6 = () => { // eslint-disable-line
  const teams49 = [ECU_SEN, POL_ARG, FRA_TUN, JPN_GER, MAR_BEL, BRA_SRB, POR_KOR]

  const combinations = [
    ...findCombination(teams49, 6)
  ]
  executeCombo(combinations, '40')
}

// TODO B: Nov 25 | 7 * $10 = $70
const c_50_F6x1_7C6 = () => { // eslint-disable-line
  const teams50 = [ECU_SEN, POL_ARG, FRA_TUN, GER_JPN, MAR_BEL, BRA_SRB, POR_KOR]

  const combinations = [
    ...findCombination(teams50, 6)
  ]
  executeCombo(combinations)
}

// TODO: Nov 25 | $500
const group_winner_c_49_to_50_F8x1_8C8 = () => { // eslint-disable-line
  const combinations = [
    [ECU, ENG, POL, FRA, GER, MAR, BRA, POR]
  ]

  executeCombo(combinations, '500')
}
