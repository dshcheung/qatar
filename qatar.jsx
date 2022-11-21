// ! COPY THIS IN A FRESH HKJC CONSOLE START
// ? Check Selection | Remember to check team combination before placing bets
const checkSelection = (teams) => {
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
    console.log('Bet Placed')
  }, CLOSE_TIME)
}

// executeCombo
const executeCombo = (combinations, valueAmount = '10', formula = '1') => {
  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination, valueAmount, formula)
      console.log('Starting Combination', i + 1)
    }, TOTAL_TIME * i)
  })
}

// GROUP A
const ECU = '#tourn_GPW_50003675_1_2_18994020_0_1_c'
const ECU_QAT = '#tourn_GPF_50003675_1_0204_79327019_0_2_c'
const ECU_NED = '#tourn_GPF_50003675_1_0201_79327019_0_1_c'
const NED_QAT = '#tourn_GPF_50003675_1_0104_79327019_0_5_c'
const QAT_NED = '#tourn_GPF_50003675_1_0401_79327019_0_8_c'

// GROUP B
const ENG = '#tourn_GPW_50003675_2_1_18995020_0_1_c'
const ENG_USA = '#tourn_GPF_50003675_2_0102_79325019_0_2_c'

// GROUP C
const ARG = '#tourn_GPW_50003675_3_1_18989020_0_1_c'
const ARG_KSA = '#tourn_GPF_50003675_3_0104_79322019_0_3_c'

// GROUP D
const TUN = '#tourn_GPW_50003675_4_3_18992020_0_4_c'
const FRA = '#tourn_GPW_50003675_4_1_18992020_0_3_c'
const FRA_TUN = '#tourn_GPF_50003675_4_0103_79320019_0_9_c'
const TUN_FRA = '#tourn_GPF_50003675_4_0301_79320019_0_12_c'

// GROUP E
const ESP = '#tourn_GPW_50003675_5_1_18988020_0_4_c'
const ESP_CRC = '#tourn_GPF_50003675_5_0104_79321019_0_10_c'
const ESP_GER = '#tourn_GPF_50003675_5_0102_79321019_0_11_c'

// GROUP F
const BEL = '#tourn_GPW_50003675_6_1_18993020_0_1_c'
const MAR = '#tourn_GPW_50003675_6_3_18993020_0_4_c'
const MAR_BEL = '#tourn_GPF_50003675_6_0301_79326019_0_10_c'
const BEL_MAR = '#tourn_GPF_50003675_6_0103_79326019_0_3_c'

// GROUP G
const SRB = '#tourn_GPW_50003675_7_3_18990020_0_3_c'
const CMR = '#tourn_GPW_50003675_7_4_18990020_0_2_c'
const SRB_BRA = '#tourn_GPF_50003675_7_0301_79324019_0_7_c'
const CMR_BRA = '#tourn_GPF_50003675_7_0401_79324019_0_4_c'

// GROUP H
const POR = '#tourn_GPW_50003675_8_1_18991020_0_3_c'
const POR_URU = '#tourn_GPF_50003675_8_0102_79323019_0_9_c'
// ! COPY THIS IN A FRESH HKJC CONSOLE END

// 24 * 28 * $10 = $6720
const combination01To24F6x1 = () => {
  const teams01 = [NED_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_CRC, BEL_MAR, SRB_BRA, POR_URU]
  const teams02 = [NED_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_CRC, MAR_BEL, SRB_BRA, POR_URU]
  const teams03 = [NED_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, BEL_MAR, SRB_BRA, POR_URU]
  const teams04 = [NED_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, MAR_BEL, SRB_BRA, POR_URU]
  const teams05 = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_CRC, BEL_MAR, SRB_BRA, POR_URU]
  const teams06 = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_CRC, MAR_BEL, SRB_BRA, POR_URU]
  const teams07 = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, BEL_MAR, SRB_BRA, POR_URU]
  const teams08 = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, MAR_BEL, SRB_BRA, POR_URU]
  const teams09 = [NED_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_CRC, BEL_MAR, CMR_BRA, POR_URU]
  const teams10 = [NED_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_CRC, MAR_BEL, CMR_BRA, POR_URU]
  const teams11 = [NED_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, BEL_MAR, CMR_BRA, POR_URU]
  const teams12 = [NED_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, MAR_BEL, CMR_BRA, POR_URU]
  const teams13 = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_CRC, BEL_MAR, CMR_BRA, POR_URU]
  const teams14 = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_CRC, MAR_BEL, CMR_BRA, POR_URU]
  const teams15 = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, BEL_MAR, CMR_BRA, POR_URU]
  const teams16 = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, MAR_BEL, CMR_BRA, POR_URU]
  const teams17 = [QAT_NED, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, BEL_MAR, SRB_BRA, POR_URU]
  const teams18 = [QAT_NED, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, MAR_BEL, SRB_BRA, POR_URU]
  const teams19 = [QAT_NED, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, BEL_MAR, CMR_BRA, POR_URU]
  const teams20 = [QAT_NED, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, MAR_BEL, CMR_BRA, POR_URU]
  const teams21 = [QAT_NED, ENG_USA, ARG_KSA, TUN_FRA, ESP_CRC, BEL_MAR, SRB_BRA, POR_URU]
  const teams22 = [QAT_NED, ENG_USA, ARG_KSA, FRA_TUN, ESP_CRC, MAR_BEL, SRB_BRA, POR_URU]
  const teams23 = [QAT_NED, ENG_USA, ARG_KSA, TUN_FRA, ESP_CRC, BEL_MAR, CMR_BRA, POR_URU]
  const teams24 = [QAT_NED, ENG_USA, ARG_KSA, FRA_TUN, ESP_CRC, MAR_BEL, CMR_BRA, POR_URU]

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

// 28 * $10 * 4 times = $1120
const extraCombination07F6x1 = () => {
  const teams07 = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, BEL_MAR, SRB_BRA, POR_URU]
  const combinations = [
    ...findCombination(teams07, 6),
    ...findCombination(teams07, 6),
    ...findCombination(teams07, 6),
    ...findCombination(teams07, 6)
  ]
  executeCombo(combinations)
}

// 12 * 28 * $10 = $3360
const combination25To36F6x1 = () => {
  // TBR
  // const teams04 = [ECU_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, MAR_BEL, CMR_BRA, POR_URU]
  // const teams08 = [ECU_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, MAR_BEL, CMR_BRA, POR_URU]
  // const teams12 = [ECU_NED, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, MAR_BEL, CMR_BRA, POR_URU]
  // const teams16 = [ECU_NED, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, MAR_BEL, CMR_BRA, POR_URU]

  const teams25 = [ECU_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, BEL_MAR, SRB_BRA, POR_URU]
  const teams26 = [ECU_NED, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, BEL_MAR, SRB_BRA, POR_URU]
  const teams27 = [ECU_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, BEL_MAR, SRB_BRA, POR_URU]
  const teams28 = [ECU_NED, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, BEL_MAR, SRB_BRA, POR_URU]
  const teams29 = [ECU_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, MAR_BEL, SRB_BRA, POR_URU]
  const teams30 = [ECU_NED, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, MAR_BEL, SRB_BRA, POR_URU]
  const teams31 = [ECU_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, MAR_BEL, SRB_BRA, POR_URU]
  const teams32 = [ECU_NED, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, MAR_BEL, SRB_BRA, POR_URU]
  const teams33 = [ECU_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, BEL_MAR, CMR_BRA, POR_URU]
  const teams34 = [ECU_NED, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, BEL_MAR, CMR_BRA, POR_URU]
  const teams35 = [ECU_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, BEL_MAR, CMR_BRA, POR_URU]
  const teams36 = [ECU_NED, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, BEL_MAR, CMR_BRA, POR_URU]

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

// 12 * 7 * $10 = $840
const combination25To36WithoutGroupEF6x1 = () => {
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

// (6 * 7 * $10) * 2 times = $840 | Odds Team $20 Extra
// (1 * 7 * $10) * 2 times = $140 | Team25 $20 Extra
// $840 + $140 = $980
const combination25To36WithoutGroupEAndNEDF6x1 = () => {
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

// 5 * 9 * $100 = $4500
const groupWinnerF8x9 = () => {
  // TBR
  // [ECU, ENG, ARG, TUN, ESP, MAR, CMR, POR]
  // [ECU, ENG, ARG, FRA, ESP, MAR, CMR, POR]
  // [ECU, ENG, ARG, FRA, ESP, BEL, SRB, POR],

  const combinations = [
    [ECU, ENG, ARG, TUN, ESP, BEL, SRB, POR],
    [ECU, ENG, ARG, TUN, ESP, BEL, CMR, POR],
    [ECU, ENG, ARG, TUN, ESP, MAR, SRB, POR],
    [ECU, ENG, ARG, FRA, ESP, BEL, CMR, POR],
    [ECU, ENG, ARG, FRA, ESP, MAR, SRB, POR]
  ]

  // 5 * 9 * 100 = 4500
  executeCombo(combinations, '100', '9')
}

// ! Total Without Error
// $6720 + $1120 + $3360 + $840 + $980 + $4500 = $17520

// ! AMOUNT SPENT
// ! Nov 20
// ? Base 01-24
// 24 * 28 * 10 = 6720
// ? 07 | $40
// 28 * 40 = 1120
// ? Total
// 6720 + 1120 = 7840

// ! Nov 21
// ? Base 25-36
// 12 * 28 * 10 = 3360
// ? Base 25-36 Without ESP
// 12 * 7 * 10 = 840
// ? Base 25-36 Without ESP & NED
// ((6 * 7 * 2 * 10) + (1 * 7 * 2 * 10)) = 980
// ? 8x9
// 5 * 9 * 100 = 4500
// ? Total
// 3360 + 840 + 980 + 4500 = 9680

// ! Total without failed
// 7840 + 9680 = 17520
