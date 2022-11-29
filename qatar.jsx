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
const NED_SEN = '#tourn_GPF_50003675_1_0103_79327019_0_6_c'
const NED_QAT = '#tourn_GPF_50003675_1_0104_79327019_0_5_c'
const ECU_NED = '#tourn_GPF_50003675_1_0201_79327019_0_1_c'
const NED_ECU = '#tourn_GPF_50003675_1_0102_79327019_0_4_c'
const ECU_SEN = '#tourn_GPF_50003675_1_0203_79327019_0_3_c'
const ECU_QAT = '#tourn_GPF_50003675_1_0204_79327019_0_2_c'
const QAT_NED = '#tourn_GPF_50003675_1_0401_79327019_0_8_c'

// GROUP B
const ENG = '#tourn_GPW_50003675_2_1_18995020_0_1_c'
const IRN = '#tourn_GPW_50003675_2_4_18995020_0_2_c'
const ENG_USA = '#tourn_GPF_50003675_2_0102_79325019_0_2_c'
const ENG_IRN = '#tourn_GPF_50003675_2_0104_79325019_0_1_c'
const IRN_ENG = '#tourn_GPF_50003675_2_0401_79325019_0_4_c'

// GROUP C
const ARG = '#tourn_GPW_50003675_3_1_18989020_0_1_c'
const POL = '#tourn_GPW_50003675_3_3_18989020_0_3_c'
const ARG_KSA = '#tourn_GPF_50003675_3_0104_79322019_0_3_c'
const POL_ARG = '#tourn_GPF_50003675_3_0301_79322019_0_7_c'

// GROUP D
const TUN = '#tourn_GPW_50003675_4_3_18992020_0_4_c'
const FRA = '#tourn_GPW_50003675_4_1_18992020_0_3_c'
const FRA_DEN = '#tourn_GPF_50003675_4_0102_79320019_0_8_c'
const FRA_TUN = '#tourn_GPF_50003675_4_0103_79320019_0_9_c'
const FRA_AUS = '#tourn_GPF_50003675_4_0104_79320019_0_7_c'
const TUN_FRA = '#tourn_GPF_50003675_4_0301_79320019_0_12_c'

// GROUP E
const ESP = '#tourn_GPW_50003675_5_1_18988020_0_4_c'
const JPN = '#tourn_GPW_50003675_5_3_18988020_0_3_c'
const GER = '#tourn_GPW_50003675_5_2_18988020_0_2_c'
const ESP_GER = '#tourn_GPF_50003675_5_0102_79321019_0_11_c'
const ESP_JPN = '#tourn_GPF_50003675_5_0103_79321019_0_12_c'
const ESP_CRC = '#tourn_GPF_50003675_5_0104_79321019_0_10_c'
const GER_JPN = '#tourn_GPF_50003675_5_0203_79321019_0_5_c'
const JPN_ESP = '#tourn_GPF_50003675_5_0301_79321019_0_9_c'
const JPN_GER = '#tourn_GPF_50003675_5_0302_79321019_0_8_c'

// GROUP F
const BEL = '#tourn_GPW_50003675_6_1_18993020_0_1_c'
const MAR = '#tourn_GPW_50003675_6_3_18993020_0_4_c'
const CAN = '#tourn_GPW_50003675_6_4_18993020_0_2_c'
const BEL_MAR = '#tourn_GPF_50003675_6_0103_79326019_0_3_c'
const CRO_MAR = '#tourn_GPF_50003675_6_0203_79326019_0_9_c'
const MAR_BEL = '#tourn_GPF_50003675_6_0301_79326019_0_10_c'
const MAR_CRO = '#tourn_GPF_50003675_6_0302_79326019_0_12_c'
const CAN_BEL = '#tourn_GPF_50003675_6_0401_79326019_0_4_c'

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
const POR_GHA = '#tourn_GPF_50003675_8_0103_79323019_0_7_c'
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

// ! Main Combination 49-50
// ? Nov 25 | 7 * $40 = $280
const c_49_wo_group_B_F6x1_7C6 = () => { // eslint-disable-line
  // Ignore Group B
  // const teams49 = [ECU_SEN, ENG_IRN, POL_ARG, FRA_TUN, JPN_GER, MAR_BEL, BRA_SRB, POR_KOR]
  const teams49 = [ECU_SEN, POL_ARG, FRA_TUN, JPN_GER, MAR_BEL, BRA_SRB, POR_KOR]

  const combinations = [
    ...findCombination(teams49, 6)
  ]
  executeCombo(combinations, '40')
}

// ? Nov 25 | 7 * $10 = $70
const c_50_wo_group_B_F6x1_7C6 = () => { // eslint-disable-line
  // Ignore Group B
  // const teams50 = [ECU_SEN, ENG_IRN, POL_ARG, FRA_TUN, GER_JPN, MAR_BEL, BRA_SRB, POR_KOR]
  const teams50 = [ECU_SEN, POL_ARG, FRA_TUN, GER_JPN, MAR_BEL, BRA_SRB, POR_KOR]

  const combinations = [
    ...findCombination(teams50, 6)
  ]
  executeCombo(combinations)
}

// ? Nov 25 | $500
const group_winner_c_49_to_50_F8x1_8C8 = () => { // eslint-disable-line
  const combinations = [
    [ECU, ENG, POL, FRA, GER, MAR, BRA, POR]
  ]

  executeCombo(combinations, '500')
}

// ! Main Combination 51-58
// ? Nov 26 | 8 * 7 * $10 = $560
const c_51_to_58_wo_group_A_F6x1_7C6 = () => { // eslint-disable-line
  // Base Teams
  // A       B       C       D       E       F       G       H
  // NED_ECU IRN_ENG POL_ARG FRA_TUN GER_JPN MAR_BEL BRA_SRB POR_KOR
  //                                 ESP_JPN CAN_BEL BRA_CMR

  const teams51 = [IRN_ENG, POL_ARG, FRA_TUN, GER_JPN, MAR_BEL, BRA_SRB, POR_KOR] // 01
  const teams52 = [IRN_ENG, POL_ARG, FRA_TUN, GER_JPN, MAR_BEL, BRA_CMR, POR_KOR] // 02
  const teams53 = [IRN_ENG, POL_ARG, FRA_TUN, GER_JPN, CAN_BEL, BRA_SRB, POR_KOR] // 03
  const teams54 = [IRN_ENG, POL_ARG, FRA_TUN, GER_JPN, CAN_BEL, BRA_CMR, POR_KOR] // 04
  const temps55 = [IRN_ENG, POL_ARG, FRA_TUN, ESP_JPN, MAR_BEL, BRA_SRB, POR_KOR] // 05
  const temps56 = [IRN_ENG, POL_ARG, FRA_TUN, ESP_JPN, MAR_BEL, BRA_CMR, POR_KOR] // 06
  const temps57 = [IRN_ENG, POL_ARG, FRA_TUN, ESP_JPN, CAN_BEL, BRA_SRB, POR_KOR] // 07
  const temps58 = [IRN_ENG, POL_ARG, FRA_TUN, ESP_JPN, CAN_BEL, BRA_CMR, POR_KOR] // 08

  const combinations = [
    ...findCombination(teams51, 6),
    ...findCombination(teams52, 6),
    ...findCombination(teams53, 6),
    ...findCombination(teams54, 6),
    ...findCombination(temps55, 6),
    ...findCombination(temps56, 6),
    ...findCombination(temps57, 6),
    ...findCombination(temps58, 6)
  ]
  executeCombo(combinations)
}

// ? Nov 26 | 4 * 7 * $10 = $280
const extra_c_51_wo_group_A_F6x1_7C6 = () => { // eslint-disable-line
  const teams51 = [IRN_ENG, POL_ARG, FRA_TUN, GER_JPN, MAR_BEL, BRA_SRB, POR_KOR]

  const combinations = [
    ...findCombination(teams51, 6),
    ...findCombination(teams51, 6),
    ...findCombination(teams51, 6),
    ...findCombination(teams51, 6)
  ]
  executeCombo(combinations)
}

// ? Nov 26 | 1 * 7 * $10 = $70
const extra_c_52_wo_group_A_F6x1_7C6 = () => { // eslint-disable-line
  const teams52 = [IRN_ENG, POL_ARG, FRA_TUN, GER_JPN, MAR_BEL, BRA_CMR, POR_KOR]

  const combinations = [
    ...findCombination(teams52, 6)
  ]
  executeCombo(combinations)
}

// ? Nov 26 | 2 * 7 * $10 = $140
const extra_c_53_wo_group_A_F6x1_7C6 = () => { // eslint-disable-line
  const teams53 = [IRN_ENG, POL_ARG, FRA_TUN, GER_JPN, CAN_BEL, BRA_SRB, POR_KOR]

  const combinations = [
    ...findCombination(teams53, 6),
    ...findCombination(teams53, 6)
  ]
  executeCombo(combinations)
}

// ? Nov 26 | 8 * 8 * $50 = $3200
const group_winner_c_51_to_58_wo_group_A_F7x8_7C7 = () => { // eslint-disable-line
  const combinations = [
    [IRN, POL, FRA, GER, MAR, BRA, POR], // A 7X1 = 10 * 4.6 * 1.2 * 13 * 5.6 * 1.13 * 1.29 = 5857 * $50 = $292850
    [IRN, POL, FRA, GER, MAR, BRA, POR], // A 7X1 = 10 * 4.6 * 1.2 * 13 * 5.6 * 1.13 * 1.29 = 5857 * $50 = $292850
    [IRN, POL, FRA, GER, MAR, BRA, POR], // A 7X1 = 10 * 4.6 * 1.2 * 13 * 5.6 * 1.13 * 1.29 = 5857 * $50 = $292850
    [IRN, POL, FRA, GER, MAR, BRA, POR], // A 7X1 = 10 * 4.6 * 1.2 * 13 * 5.6 * 1.13 * 1.29 = 5857 * $50 = $292850
    [IRN, POL, FRA, GER, CAN, BRA, POR], // B 7X1 = 10 * 4.6 * 1.2 * 13 * 15 * 1.13 * 1.29 = 15690 * $50 = $784500
    [IRN, POL, FRA, GER, CAN, BRA, POR], // B 7X1 = 10 * 4.6 * 1.2 * 13 * 15 * 1.13 * 1.29 = 15690 * $50 = $784500
    [IRN, POL, FRA, ESP, MAR, BRA, POR], // C 7X1 = 10 * 4.6 * 1.2 * 1.25 * 5.6 * 1.13 * 1.29 =  563 * $50 = $56,300
    [IRN, POL, FRA, ESP, CAN, BRA, POR] // D 7X1 = 10 * 4.6 * 1.2 * 1.25 * 15 * 1.13 * 1.29 = 1508 * $50 = $150,800
  ]

  executeCombo(combinations, '50', '8')
}

// ! Main Combination 59-66
// ? Nov 26 | 4 * 7 * $10 = $280
const c_59_to_62_wo_group_A_F6x1_7C6 = () => { // eslint-disable-line
  // Base Teams
  // A       B       C       D       E       F       G       H
  // NED_ECU IRN_ENG POL_ARG FRA_TUN JPN_GER MAR_BEL BRA_SRB POR_KOR
  //                                         CAN_BEL BRA_CMR

  const teams59 = [IRN_ENG, POL_ARG, FRA_TUN, JPN_GER, MAR_BEL, BRA_SRB, POR_KOR] // 01
  const teams60 = [IRN_ENG, POL_ARG, FRA_TUN, JPN_GER, MAR_BEL, BRA_CMR, POR_KOR] // 02
  const teams61 = [IRN_ENG, POL_ARG, FRA_TUN, JPN_GER, CAN_BEL, BRA_SRB, POR_KOR] // 03
  const teams62 = [IRN_ENG, POL_ARG, FRA_TUN, JPN_GER, CAN_BEL, BRA_CMR, POR_KOR] // 04

  const combinations = [
    ...findCombination(teams59, 6),
    ...findCombination(teams60, 6),
    ...findCombination(teams61, 6),
    ...findCombination(teams62, 6)
  ]
  executeCombo(combinations)
}

// ? Nov 26 | 4 * 7 * $10 = $280
const c_63_to_66_wo_group_A_F6x1_7C6 = () => { // eslint-disable-line
  // Base Teams
  // A       B       C       D       E       F       G       H
  // NED_ECU IRN_ENG POL_ARG FRA_TUN JPN_ESP MAR_BEL BRA_SRB POR_KOR
  //                                         CAN_BEL BRA_CMR

  const teams63 = [IRN_ENG, POL_ARG, FRA_TUN, JPN_ESP, MAR_BEL, BRA_SRB, POR_KOR] // 01
  const teams64 = [IRN_ENG, POL_ARG, FRA_TUN, JPN_ESP, MAR_BEL, BRA_CMR, POR_KOR] // 02
  const teams65 = [IRN_ENG, POL_ARG, FRA_TUN, JPN_ESP, CAN_BEL, BRA_SRB, POR_KOR] // 03
  const teams66 = [IRN_ENG, POL_ARG, FRA_TUN, JPN_ESP, CAN_BEL, BRA_CMR, POR_KOR] // 04

  const combinations = [
    ...findCombination(teams63, 6),
    ...findCombination(teams64, 6),
    ...findCombination(teams65, 6),
    ...findCombination(teams66, 6)
  ]
  executeCombo(combinations)
}

// ! Main Combination 67-74
// ? Nov 27 | 8 * 28 * $50 = $11200
const c_67_to_74_F8x28_8C6 = () => { // eslint-disable-line
  // Base Teams
  // A       B       C       D       E       F       G       H
  // NED_SEN IRN_ENG POL_ARG FRA_AUS ESP_GER MAR_BEL BRA_SRB POR_KOR
  //                         FRA_DEN ESP_JPN CAN_BEL
  // Odds
  // 2.90    10.10   4.90    2.90    3.25    9.50    2.75    4.20
  //                         1.40    1.75    22.0
  // Highest Odds 6x1
  // 10.10 * 4.90 * 2.90 * 3.25 * 22.0 * 4.20 = 43099
  // 43099 * $50 = $2154950
  // Highest Odds 7x1
  // 2.90 * 10.10 * 4.90 * 2.90 * 3.25 * 22.0 * 4.20 = 124988
  // 124988 * $10 = 1249880

  const teams67 = [NED_SEN, IRN_ENG, POL_ARG, FRA_AUS, ESP_GER, MAR_BEL, BRA_SRB, POR_KOR] // 01 | 8x1 $60 | 7x1 $50 | 6x1 $50
  const teams68 = [NED_SEN, IRN_ENG, POL_ARG, FRA_AUS, ESP_GER, CAN_BEL, BRA_SRB, POR_KOR] // 02 | 8x1 $10 | 7x1 $10 | 6x1 $50
  const teams69 = [NED_SEN, IRN_ENG, POL_ARG, FRA_DEN, ESP_GER, MAR_BEL, BRA_SRB, POR_KOR] // 05 | 8x1 $80 | 7x1 $50 | 6x1 $50
  const teams70 = [NED_SEN, IRN_ENG, POL_ARG, FRA_DEN, ESP_GER, CAN_BEL, BRA_SRB, POR_KOR] // 06 | 8x1 $10 | 7x1 $10 | 6x1 $50
  const teams71 = [NED_SEN, IRN_ENG, POL_ARG, FRA_AUS, ESP_JPN, MAR_BEL, BRA_SRB, POR_KOR] // 03 | 8x1 $00 | 7x1 $10 | 6x1 $50
  const teams72 = [NED_SEN, IRN_ENG, POL_ARG, FRA_AUS, ESP_JPN, CAN_BEL, BRA_SRB, POR_KOR] // 04 | 8x1 $00 | 7x1 $10 | 6x1 $50
  const teams73 = [NED_SEN, IRN_ENG, POL_ARG, FRA_DEN, ESP_JPN, MAR_BEL, BRA_SRB, POR_KOR] // 07 | 8x1 $10 | 7x1 $10 | 6x1 $50
  const teams74 = [NED_SEN, IRN_ENG, POL_ARG, FRA_DEN, ESP_JPN, CAN_BEL, BRA_SRB, POR_KOR] // 08 | 8x1 $10 | 7x1 $10 | 6x1 $50

  const combinations = [
    teams67,
    teams68,
    teams69,
    teams70,
    teams71,
    teams72,
    teams73,
    teams74
  ]
  executeCombo(combinations, '50', '28')
}

// ! Main Combination 67-74 | 7x1 8C7
// ? Nov 27 | 6 * 8 * $10 = $480
const c_67_to_74_F8x8_8C7 = () => { // eslint-disable-line
  const teams68 = [NED_SEN, IRN_ENG, POL_ARG, FRA_AUS, ESP_GER, CAN_BEL, BRA_SRB, POR_KOR]
  const teams70 = [NED_SEN, IRN_ENG, POL_ARG, FRA_DEN, ESP_GER, CAN_BEL, BRA_SRB, POR_KOR]
  const teams71 = [NED_SEN, IRN_ENG, POL_ARG, FRA_AUS, ESP_JPN, MAR_BEL, BRA_SRB, POR_KOR]
  const teams72 = [NED_SEN, IRN_ENG, POL_ARG, FRA_AUS, ESP_JPN, CAN_BEL, BRA_SRB, POR_KOR]
  const teams73 = [NED_SEN, IRN_ENG, POL_ARG, FRA_DEN, ESP_JPN, MAR_BEL, BRA_SRB, POR_KOR]
  const teams74 = [NED_SEN, IRN_ENG, POL_ARG, FRA_DEN, ESP_JPN, CAN_BEL, BRA_SRB, POR_KOR]

  const combinations = [
    teams68,
    teams70,
    teams71,
    teams72,
    teams73,
    teams74
  ]
  executeCombo(combinations, '10', '8')
}

// ? Nov 27 | 2 * 8 * $50 = $800
const c_67_and_69_F8x8_8C7 = () => { // eslint-disable-line
  const teams67 = [NED_SEN, IRN_ENG, POL_ARG, FRA_AUS, ESP_GER, MAR_BEL, BRA_SRB, POR_KOR]
  const teams69 = [NED_SEN, IRN_ENG, POL_ARG, FRA_DEN, ESP_GER, MAR_BEL, BRA_SRB, POR_KOR]

  const combinations = [
    teams67,
    teams69
  ]
  executeCombo(combinations, '50', '8')
}

// ! Main Combination 67-74 | 8x1 8C8
// ? Nov 27 | 4 * $10 = $40
const c_67_to_74_F8x1_8C8 = () => { // eslint-disable-line
  const teams68 = [NED_SEN, IRN_ENG, POL_ARG, FRA_AUS, ESP_GER, CAN_BEL, BRA_SRB, POR_KOR]
  const teams70 = [NED_SEN, IRN_ENG, POL_ARG, FRA_DEN, ESP_GER, CAN_BEL, BRA_SRB, POR_KOR]
  const teams73 = [NED_SEN, IRN_ENG, POL_ARG, FRA_DEN, ESP_JPN, MAR_BEL, BRA_SRB, POR_KOR]
  const teams74 = [NED_SEN, IRN_ENG, POL_ARG, FRA_DEN, ESP_JPN, CAN_BEL, BRA_SRB, POR_KOR]

  const combinations = [
    teams68,
    teams70,
    teams73,
    teams74
  ]
  executeCombo(combinations)
}

// ? Nov 27 | $60
const c_67_F8x1_8C8 = () => { // eslint-disable-line
  const teams67 = [NED_SEN, IRN_ENG, POL_ARG, FRA_AUS, ESP_GER, MAR_BEL, BRA_SRB, POR_KOR]

  const combinations = [
    teams67
  ]
  executeCombo(combinations, '60')
}

// ? Nov 27 | $80
const c_69_F8x1_8C8 = () => { // eslint-disable-line
  const teams69 = [NED_SEN, IRN_ENG, POL_ARG, FRA_DEN, ESP_GER, MAR_BEL, BRA_SRB, POR_KOR]

  const combinations = [
    teams69
  ]
  executeCombo(combinations, '80')
}

// ! Main Combination 75-82 | 6x1 8C6
// ? Nov 27 | 8 * 28 * $30 =  $6720
const c_75_to_82_F8x28_8C6 = () => { // eslint-disable-line
  // Base Teams
  // A       B       C       D       E       F       G       H
  // NED_SEN IRN_ENG POL_ARG FRA_AUS ESP_GER MAR_BEL BRA_CMR POR_KOR
  //                         FRA_DEN ESP_JPN CAN_BEL
  // Odds
  // 2.90    10.10   4.90    2.90    3.25    9.50    16.0    4.20
  //                         1.40    1.75    22.0
  // Highest Odds 6x1
  // 10.10 * 4.90 * 3.25 * 22.0 * 16.0 * 4.20 = 237789
  // 237789 * $30 = $7133670
  // Highest Odds 7x1
  // 10.10 * 4.90 * 2.90 * 3.25 * 22.0 * 16.0 * 4.20 = 689589
  // 689589 * $10 = $6895890

  const teams75 = [NED_SEN, IRN_ENG, POL_ARG, FRA_AUS, ESP_GER, MAR_BEL, BRA_CMR, POR_KOR] // 01 | 8x1 $10 | 7x1 $10 | 6x1 $30
  const teams76 = [NED_SEN, IRN_ENG, POL_ARG, FRA_AUS, ESP_GER, CAN_BEL, BRA_CMR, POR_KOR] // 02 | 8x1 $10 | 7x1 $10 | 6x1 $30
  const teams77 = [NED_SEN, IRN_ENG, POL_ARG, FRA_DEN, ESP_GER, MAR_BEL, BRA_CMR, POR_KOR] // 05 | 8x1 $10 | 7x1 $10 | 6x1 $30
  const teams78 = [NED_SEN, IRN_ENG, POL_ARG, FRA_DEN, ESP_GER, CAN_BEL, BRA_CMR, POR_KOR] // 06 | 8x1 $10 | 7x1 $10 | 6x1 $30
  const teams79 = [NED_SEN, IRN_ENG, POL_ARG, FRA_AUS, ESP_JPN, MAR_BEL, BRA_CMR, POR_KOR] // 03 | 8x1 $10 | 7x1 $10 | 6x1 $30
  const teams80 = [NED_SEN, IRN_ENG, POL_ARG, FRA_AUS, ESP_JPN, CAN_BEL, BRA_CMR, POR_KOR] // 04 | 8x1 $10 | 7x1 $10 | 6x1 $30
  const teams81 = [NED_SEN, IRN_ENG, POL_ARG, FRA_DEN, ESP_JPN, MAR_BEL, BRA_CMR, POR_KOR] // 07 | 8x1 $10 | 7x1 $10 | 6x1 $30
  const teams82 = [NED_SEN, IRN_ENG, POL_ARG, FRA_DEN, ESP_JPN, CAN_BEL, BRA_CMR, POR_KOR] // 08 | 8x1 $10 | 7x1 $10 | 6x1 $30

  const combinations = [
    teams75,
    teams76,
    teams77,
    teams78,
    teams79,
    teams80,
    teams81,
    teams82
  ]
  executeCombo(combinations, '30', '28')
}

// ! Main Combination 75-82 | 7x1 8C7
// ? Nov 27 | 8 * 8 * $10 =  $640
const c_75_to_82_F8x8_8C7 = () => { // eslint-disable-line
  const teams75 = [NED_SEN, IRN_ENG, POL_ARG, FRA_AUS, ESP_GER, MAR_BEL, BRA_CMR, POR_KOR]
  const teams76 = [NED_SEN, IRN_ENG, POL_ARG, FRA_AUS, ESP_GER, CAN_BEL, BRA_CMR, POR_KOR]
  const teams77 = [NED_SEN, IRN_ENG, POL_ARG, FRA_DEN, ESP_GER, MAR_BEL, BRA_CMR, POR_KOR]
  const teams78 = [NED_SEN, IRN_ENG, POL_ARG, FRA_DEN, ESP_GER, CAN_BEL, BRA_CMR, POR_KOR]
  const teams79 = [NED_SEN, IRN_ENG, POL_ARG, FRA_AUS, ESP_JPN, MAR_BEL, BRA_CMR, POR_KOR]
  const teams80 = [NED_SEN, IRN_ENG, POL_ARG, FRA_AUS, ESP_JPN, CAN_BEL, BRA_CMR, POR_KOR]
  const teams81 = [NED_SEN, IRN_ENG, POL_ARG, FRA_DEN, ESP_JPN, MAR_BEL, BRA_CMR, POR_KOR]
  const teams82 = [NED_SEN, IRN_ENG, POL_ARG, FRA_DEN, ESP_JPN, CAN_BEL, BRA_CMR, POR_KOR]

  const combinations = [
    teams75,
    teams76,
    teams77,
    teams78,
    teams79,
    teams80,
    teams81,
    teams82
  ]
  executeCombo(combinations, '10', '8')
}

// ! Main Combination 75-82 | 8x1 8C8
// ? Nov 27 | 6 * $10 = $60
const c_75_to_82_F8x1_8C8 = () => { // eslint-disable-line
  const teams75 = [NED_SEN, IRN_ENG, POL_ARG, FRA_AUS, ESP_GER, MAR_BEL, BRA_CMR, POR_KOR]
  const teams76 = [NED_SEN, IRN_ENG, POL_ARG, FRA_AUS, ESP_GER, CAN_BEL, BRA_CMR, POR_KOR]
  const teams77 = [NED_SEN, IRN_ENG, POL_ARG, FRA_DEN, ESP_GER, MAR_BEL, BRA_CMR, POR_KOR]
  const teams78 = [NED_SEN, IRN_ENG, POL_ARG, FRA_DEN, ESP_GER, CAN_BEL, BRA_CMR, POR_KOR]
  const teams81 = [NED_SEN, IRN_ENG, POL_ARG, FRA_DEN, ESP_JPN, MAR_BEL, BRA_CMR, POR_KOR]
  const teams82 = [NED_SEN, IRN_ENG, POL_ARG, FRA_DEN, ESP_JPN, CAN_BEL, BRA_CMR, POR_KOR]

  const combinations = [
    teams75,
    teams76,
    teams77,
    teams78,
    teams81,
    teams82
  ]
  executeCombo(combinations)
}

// ! Main Combination 83-86 | 6x1 8C6
// ? Nov 28 | 28 * $200 = $5600
const c_83_F8x28_8C6 = () => { // eslint-disable-line
  // Base Teams
  // A       B       C       D       E       F       G       H
  // NED_SEN IRN_ENG POL_ARG FRA_AUS ESP_GER MAR_CRO BRA_SRB POR_KOR
  //                                         CRO_MAR BRA_CMR
  // Odds
  // 2.90    10.10   4.90    2.90    1.14    5.50    2.75    4.20
  //                                         2.06    16.0
  // ? MAR_CRO SRB
  // Highest Odds 6x1
  // 2.9 * 10.10 * 4.90 * 5.50 * 2.75 * 4.20 = 9117
  //  9117 * $1090 = $9937530
  // Highest Odds 7x1
  // 2.9 * 10.10 * 4.90 * 2.9 * 5.50 * 2.75 * 4.20 = 26439
  // 26439 * $370 = $9782430
  // Highest Odds 8x1
  // 2.9 * 10.10 * 4.90 * 2.9 * 1.14 * 5.50 * 2.75 * 4.20 = 30141
  // 30141 * $330 = $9946530
  // ? MAR_CRO CMR
  // Highest Odds 7x1
  // 2.9 * 10.10 * 4.90 * 2.9 * 5.50 * 16.0 * 4.20 = 153831
  // 153831 * $60 = $9229860
  // Highest Odds 8x1
  // 2.9 * 10.10 * 4.90 * 2.9 * 1.14 * 5.50 * 16.0 * 4.20 = 175367
  // 175367 * $50 = $8768350
  // ? CRO_MAR SRB
  // Highest Odds 7x1
  // 2.9 * 10.10 * 4.90 * 2.9 * 2.06 * 2.75 * 4.20 = 9902
  // 9902 * $1000 = $9902000
  // Highest Odds 8x1
  // 2.9 * 10.10 * 4.90 * 2.9 * 1.14 * 2.06 * 2.75 * 4.20 = 11289
  // 11289 * $880 = $9934320
  // ? CRO_MAR CMR
  // Highest Odds 7x1
  // 2.9 * 10.10 * 4.90 * 2.9 * 2.06 * 16.0 * 4.20 = 57616
  // 57616 * $170 = $9794720
  // Highest Odds 8x1
  // 2.9 * 10.10 * 4.90 * 2.9 * 1.14 * 2.06 * 16.0 * 4.20 = 65683
  // 65683 * $150 = $9852450

  // Teams
  // const teams83 = [NED_SEN, IRN_ENG, POL_ARG, FRA_AUS, ESP_GER, MAR_CRO, BRA_SRB, POR_KOR] // 01 | 8x1 $330 | 7x1 $370 | 6x1 $200
  // const teams84 = [NED_SEN, IRN_ENG, POL_ARG, FRA_AUS, ESP_GER, MAR_CRO, BRA_CMR, POR_KOR] // 02 | 8x1  $50 | 7x1  $60 | 6x1   $0
  // const teams85 = [NED_SEN, IRN_ENG, POL_ARG, FRA_AUS, ESP_GER, CRO_MAR, BRA_SRB, POR_KOR] // 03 | 8x1 $100 | 7x1 $100 | 6x1   $0
  // const teams86 = [NED_SEN, IRN_ENG, POL_ARG, FRA_AUS, ESP_GER, CRO_MAR, BRA_CMR, POR_KOR] // 04 | 8x1  $50 | 7x1  $60 | 6x1   $0

  const teams83 = [NED_SEN, IRN_ENG, POL_ARG, FRA_AUS, ESP_GER, MAR_CRO, BRA_SRB, POR_KOR]

  const combinations = [
    teams83
  ]
  executeCombo(combinations, '200', '28')
}

// ! Main Combination 83-86 | 7x1 8C7
// ? Nov 28 | 8 * $370 = $2960
const c_83_F8x8_8C7 = () => { // eslint-disable-line
  const teams83 = [NED_SEN, IRN_ENG, POL_ARG, FRA_AUS, ESP_GER, MAR_CRO, BRA_SRB, POR_KOR]

  const combinations = [
    teams83
  ]
  executeCombo(combinations, '370', '8')
}

// ? Nov 28 | 8 * $100 = $800
const c_85_F8x8_8C7 = () => { // eslint-disable-line
  const teams85 = [NED_SEN, IRN_ENG, POL_ARG, FRA_AUS, ESP_GER, CRO_MAR, BRA_SRB, POR_KOR]

  const combinations = [
    teams85
  ]
  executeCombo(combinations, '100', '8')
}

// ? Nov 28 | 2 * 8 * $60 = $960
const c_84_and_86_F8x8_8C7 = () => { // eslint-disable-line
  const teams84 = [NED_SEN, IRN_ENG, POL_ARG, FRA_AUS, ESP_GER, MAR_CRO, BRA_CMR, POR_KOR]
  const teams86 = [NED_SEN, IRN_ENG, POL_ARG, FRA_AUS, ESP_GER, CRO_MAR, BRA_CMR, POR_KOR]

  const combinations = [
    teams84,
    teams86
  ]
  executeCombo(combinations, '60', '8')
}

// ! Main Combination 83-86 | 8x1 8C8
// ? Nov 28 | $330
const c_83_F8x1_8C8 = () => { // eslint-disable-line
  const teams83 = [NED_SEN, IRN_ENG, POL_ARG, FRA_AUS, ESP_GER, MAR_CRO, BRA_SRB, POR_KOR]

  const combinations = [
    teams83
  ]
  executeCombo(combinations, '330')
}

// ? Nov 28 | $100
const c_85_F8x1_8C8 = () => { // eslint-disable-line
  const teams85 = [NED_SEN, IRN_ENG, POL_ARG, FRA_AUS, ESP_GER, CRO_MAR, BRA_SRB, POR_KOR]

  const combinations = [
    teams85
  ]
  executeCombo(combinations, '100')
}

// ? Nov 28 | 2 * $50 = $100
const c_84_and_86_F8x1_8C8 = () => { // eslint-disable-line
  const teams84 = [NED_SEN, IRN_ENG, POL_ARG, FRA_AUS, ESP_GER, MAR_CRO, BRA_CMR, POR_KOR]
  const teams86 = [NED_SEN, IRN_ENG, POL_ARG, FRA_AUS, ESP_GER, CRO_MAR, BRA_CMR, POR_KOR]

  const combinations = [
    teams84,
    teams86
  ]
  executeCombo(combinations, '50')
}

// ! Nov 29
// ! Nov 29
// ! Nov 29
// ! Nov 29
// ! Nov 29
// ! Main Combination 87-94 | 6x1 8C6
// TODO: Nov 29 | 28 * $200 = $5600
const c_87_F8x28_8C6 = () => { // eslint-disable-line
  // Base Teams
  // A       B       C       D       E       F       G       H
  // NED_SEN IRN_ENG POL_ARG FRA_DEN ESP_GER MAR_CRO BRA_SRB POR_GHA
  // NED_ECU                                 CRO_MAR BRA_SUI
  // Odds
  // 2.90    10.10   4.90    1.40    1.14    5.50    2.35    2.15
  // 1.90                                    2.06    1.45
  // ? const teams87 = [NED_SEN, IRN_ENG, POL_ARG, FRA_DEN, ESP_GER, MAR_CRO, BRA_SRB, POR_GHA] // 8x1 $1570 | 7x1 $370
  // Highest Odds 6x1 | 2.90 * 10.10 * 4.9 * 5.50 * 2.35 * 2.15 = 3989 | 10000000 / 3989 = 2500
  // Highest Odds 7x1 | 2.90 * 10.10 * 4.9 * 1.4 * 5.50 * 2.35 * 2.15 = 5584 | 10000000 / 5584 = 1790
  // Highest Odds 8x1 | 2.90 * 10.10 * 4.9 * 1.4 * 1.14 * 5.50 * 2.35 * 2.15 = 6366 | 10000000 / 6366 = 1570
  // ? const teams88 = [NED_SEN, IRN_ENG, POL_ARG, FRA_DEN, ESP_GER, MAR_CRO, BRA_SUI, POR_GHA] // 8x1 $330
  // Highest Odds 7x1 | 2.90 * 10.10 * 4.9 * 1.4 * 5.50 * 1.45 * 2.15 = 3446 | 10000000 / 3446 = 2900
  // Highest Odds 8x1 | 2.90 * 10.10 * 4.9 * 1.4 * 1.14 * 5.50 * 1.45 * 2.15 = 3928 | 10000000 / 3928 = 2540
  // ? const teams89 = [NED_SEN, IRN_ENG, POL_ARG, FRA_DEN, ESP_GER, CRO_MAR, BRA_SRB, POR_GHA] // 8x1 $850
  // Highest Odds 7x1 | 2.90 * 10.10 * 4.9 * 1.4 * 2.06 * 2.35 * 2.15 = 2092 | 10000000 / 2092 = 4780
  // Highest Odds 8x1 | 2.90 * 10.10 * 4.9 * 1.4 * 1.14 * 2.06 * 2.35 * 2.15 = 2385 | 10000000 / 2385 = 4190
  // ? const teams90 = [NED_SEN, IRN_ENG, POL_ARG, FRA_DEN, ESP_GER, CRO_MAR, BRA_SUI, POR_GHA] // 8x1 $350
  // Highest Odds 7x1 | 2.90 * 10.10 * 4.9 * 1.4 * 2.06 * 1.45 * 2.15 = 1291 | 10000000 / 1291 = 7740
  // Highest Odds 8x1 | 2.90 * 10.10 * 4.9 * 1.4 * 1.14 * 2.06 * 1.45 * 2.15 = 1472 | 10000000 / 1472 = 6790
  // ? const teams91 = [NED_ECU, IRN_ENG, POL_ARG, FRA_DEN, ESP_GER, MAR_CRO, BRA_SRB, POR_GHA] // 8x1 $300
  // Highest Odds 7x1 | 1.90 * 10.10 * 4.9 * 1.4 * 5.50 * 2.35 * 2.15 = 3659 | 10000000 / 3659 = 2730
  // Highest Odds 8x1 | 1.90 * 10.10 * 4.9 * 1.4 * 1.14 * 5.50 * 2.35 * 2.15 = 4171 | 10000000 / 4171 = 2390
  // ? const teams92 = [NED_ECU, IRN_ENG, POL_ARG, FRA_DEN, ESP_GER, MAR_CRO, BRA_SUI, POR_GHA] // 8x1 $200
  // Highest Odds 7x1 | 1.90 * 10.10 * 4.9 * 1.4 * 5.50 * 1.45 * 2.15 = 2258 | 10000000 / 2258 = 4420
  // Highest Odds 8x1 | 1.90 * 10.10 * 4.9 * 1.4 * 1.14 * 5.50 * 1.45 * 2.15 = 2574 | 10000000 / 2574 = 3880
  // ? const teams93 = [NED_ECU, IRN_ENG, POL_ARG, FRA_DEN, ESP_GER, CRO_MAR, BRA_SRB, POR_GHA] // 8x1 $650
  // Highest Odds 7x1 | 1.90 * 10.10 * 4.9 * 1.4 * 2.06 * 2.35 * 2.15 = 1371 | 10000000 / 1371 = 7290
  // Highest Odds 8x1 | 1.90 * 10.10 * 4.9 * 1.4 * 1.14 * 2.06 * 2.35 * 2.15 = 1562 | 10000000 / 1562 = 6400
  // ? const teams94 = [NED_ECU, IRN_ENG, POL_ARG, FRA_DEN, ESP_GER, CRO_MAR, BRA_SUI, POR_GHA] // 8x1 $350
  // Highest Odds 7x1 | 1.90 * 10.10 * 4.9 * 1.4 * 2.06 * 1.45 * 2.15 = 846 | 10000000 / 846 = 11820
  // Highest Odds 8x1 | 1.90 * 10.10 * 4.9 * 1.4 * 1.14 * 2.06 * 1.45 * 2.15 = 964 | 10000000 / 964 = 10370

  const teams87 = [NED_SEN, IRN_ENG, POL_ARG, FRA_DEN, ESP_GER, MAR_CRO, BRA_SRB, POR_GHA]
  const combinations = [
    teams87
  ]
  executeCombo(combinations, '200', '28')
}

// ! Main Combination 87-94 | 7x1 8C7
// TODO: Nov 29 | 8 * $370 = $2960
const c_87_F8x8_8C7 = () => { // eslint-disable-line
  const teams87 = [NED_SEN, IRN_ENG, POL_ARG, FRA_DEN, ESP_GER, MAR_CRO, BRA_SRB, POR_GHA]

  const combinations = [
    teams87
  ]
  executeCombo(combinations, '370', '8')
}

// ! Main Combination 87-98 | 6x1 6C6
// TODO: Nov 29 | 2 * $2500 = $5000
const c_87_89_F6x1_6C6 = () => { // eslint-disable-line
  const teams87 = [NED_SEN, IRN_ENG, POL_ARG, MAR_CRO, BRA_SRB, POR_GHA]
  const teams89 = [NED_SEN, IRN_ENG, POL_ARG, CRO_MAR, BRA_SRB, POR_GHA]
  const combinations = [
    teams87,
    teams89
  ]
  executeCombo(combinations, '2500')
}

// TODO: Nov 29 | 4 * $500 = $2000
const c_88_90_91_93_F6x1_6C6 = () => { // eslint-disable-line
  const teams88 = [NED_SEN, IRN_ENG, POL_ARG, MAR_CRO, BRA_SUI, POR_GHA]
  const teams90 = [NED_SEN, IRN_ENG, POL_ARG, CRO_MAR, BRA_SUI, POR_GHA]
  const teams91 = [NED_ECU, IRN_ENG, POL_ARG, MAR_CRO, BRA_SRB, POR_GHA]
  const teams93 = [NED_ECU, IRN_ENG, POL_ARG, CRO_MAR, BRA_SRB, POR_GHA]
  const combinations = [
    teams88,
    teams90,
    teams91,
    teams93
  ]
  executeCombo(combinations, '500')
}

// TODO: Nov 29 | 2 * $350 = $700
const c_95_97_F6x1_6C6 = () => { // eslint-disable-line
  const teams95 = [NED_SEN, IRN_ENG, POL_ARG, MAR_BEL, BRA_SRB, POR_GHA]
  const teams97 = [NED_ECU, IRN_ENG, POL_ARG, MAR_BEL, BRA_SRB, POR_GHA]
  const combinations = [
    teams95,
    teams97
  ]
  executeCombo(combinations, '350')
}

// TODO: Nov 29 | 4 * $300 = $1200
const c_92_94_96_98_F6x1_6C6 = () => { // eslint-disable-line
  const teams92 = [NED_ECU, IRN_ENG, POL_ARG, MAR_CRO, BRA_SUI, POR_GHA]
  const teams94 = [NED_ECU, IRN_ENG, POL_ARG, CRO_MAR, BRA_SUI, POR_GHA]
  const teams96 = [NED_SEN, IRN_ENG, POL_ARG, MAR_BEL, BRA_SUI, POR_GHA]
  const teams98 = [NED_ECU, IRN_ENG, POL_ARG, MAR_BEL, BRA_SUI, POR_GHA]
  const combinations = [
    teams92,
    teams94,
    teams96,
    teams98
  ]
  executeCombo(combinations, '300')
}

// 5600 + 2960 + 5000 + 2000 + 700 + 1200 = 17460
