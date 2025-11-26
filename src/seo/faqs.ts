// src/seo/faqs.ts

export type FaqPageId =
  | "model-saas-unit-economics"
  | "model-vc-method"
  | "model-berkus-valuation"
  | "model-first-chicago"
  | "model-perpetuity-exit"
  | "model-decision-analysis-vc";

export function getFaqJson(page: FaqPageId) {
  switch (page) {
    case "model-saas-unit-economics":
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the SaaS Unit Economics Model?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The SaaS Unit Economics Model is an Excel-based financial model that values SaaS and other recurring revenue businesses by analysing individual customer profitability and lifetime contribution to overall business value. It focuses on the fundamental relationship between customer acquisition, retention, and lifetime value, rather than just aggregate P&L figures."
            }
          },
          {
            "@type": "Question",
            name: "How is the model structured?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The model uses a dual-framework structure: a Customer Life Time model with constant assumptions and perpetuity logic for quick analysis and scenario modelling, and a By Year model with variable assumptions per year and exit valuation analysis. Together, these give both rapid insight and comprehensive multi-year planning capability."
            }
          },
          {
            "@type": "Question",
            name: "Who should use the SaaS Unit Economics Model?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The model is designed for SaaS companies, e-commerce businesses, subscription services, marketplaces, and other recurring revenue businesses that need detailed customer economics analysis. It is particularly valuable for startups seeking investment, growth companies optimising operations, and investors or advisors conducting due diligence."
            }
          },
          {
            "@type": "Question",
            name: "Do I need advanced Excel skills to work with the model?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You do not need advanced Excel or VBA skills. The model is built in standard, no-macro Excel with a consistent structure, colour coding, and dedicated input sections. Basic comfort with Excel is sufficient, and the detailed documentation explains how to use the key assumptions, scenarios, and outputs."
            }
          },
          {
            "@type": "Question",
            name: "What are the main limitations of the SaaS Unit Economics Model?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Like any structured model, it relies on simplified assumptions and good input data. It may not capture all real-world complexity, especially for very early-stage companies with limited data or rapidly changing business models. Results should be tested with sensitivity analysis, updated regularly as new data becomes available, and used alongside other valuation methods and benchmarks."
            }
          }
        ]
      };

    case "model-vc-method":
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the Venture Capital Valuation Model?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Venture Capital Valuation Model is a systematic framework for analysing multi-round startup financing with explicit consideration of investor return requirements and entrepreneur ownership implications. It works backwards from expected exit value and timing to derive current pre-money and post-money valuations that meet target investor returns."
            }
          },
          {
            "@type": "Question",
            name: "When is the Venture Capital Method most useful?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The method is particularly useful for high-growth startups that expect more than one investment round and face significant exit uncertainty. It helps entrepreneurs and investors analyse ownership dilution across rounds, required exit valuations, and whether proposed deal terms are consistent with target internal rates of return."
            }
          },
          {
            "@type": "Question",
            name: "Who should use this model?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Growth-stage entrepreneurs planning multi-round financing, venture capital investors evaluating deals and portfolios, and financial advisors who need a structured venture capital valuation framework can all benefit from the model."
            }
          },
          {
            "@type": "Question",
            name: "How does the Excel implementation support analysis?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Excel model supports multi-scenario analysis with base, low, and high exit valuations, timing assumptions, and required return inputs. It uses colour-coded inputs, protected calculation logic, and real-time updates so users can see how changes in exit value, holding period, and return targets affect ownership requirements and valuation."
            }
          },
          {
            "@type": "Question",
            name: "What are the main limitations of the Venture Capital Method?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The method depends heavily on assumed exit valuations, timing, and required returns, which are uncertain and can vary with market conditions. It uses simplified dilution assumptions and does not capture all details of complex financing structures, so results should be tested with scenarios and used alongside other valuation methods and market benchmarks."
            }
          }
        ]
      };

    case "model-berkus-valuation":
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the Berkus Valuation Model?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Berkus Valuation Model is an early-stage startup valuation framework that focuses on risk mitigation rather than detailed financial projections. It estimates pre-revenue valuation by assessing five factors: Sound Idea, Working Prototype, Quality Management Team, Strategic Relationships, and Product Rollout."
            }
          },
          {
            "@type": "Question",
            name: "When is the Berkus Model most appropriate?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Berkus approach is most useful for pre-revenue or very early-stage startups where traditional financial projections are highly unreliable. It provides a structured way to justify valuations when there is limited historical data and high uncertainty."
            }
          },
          {
            "@type": "Question",
            name: "How does the Excel model implement the Berkus approach?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Excel implementation requires users to define maximum values for each of the five risk factors and assign performance scores on a 1–5 scale. Each factor's contribution to valuation is calculated as Maximum Value multiplied by Performance Score divided by 5, and the total pre-money valuation is the sum across all factors, with multiple scenarios for Very Low through Very High outcomes."
            }
          },
          {
            "@type": "Question",
            name: "Who benefits from using the Berkus Valuation Model?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Angel investors, early-stage venture capitalists, pre-revenue entrepreneurs, and financial advisors can all benefit. The model provides a transparent framework for discussing valuation ranges, prioritising risk mitigation activities, and benchmarking early-stage opportunities."
            }
          },
          {
            "@type": "Question",
            name: "What are the main limitations and best practices?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Berkus model depends on subjective scoring and maximum value assumptions, so results can be biased if not grounded in evidence and market reality. Best practice is to require clear justification for each score, use multiple independent assessments, present valuation as a range rather than a single number, and document all assumptions."
            }
          }
        ]
      };

    case "model-first-chicago":
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the First Chicago Valuation Model?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The First Chicago Valuation Model is a scenario-based framework for startup valuation that combines separate downside, base, and upside financial projections with probability weighting. It was originally developed by the venture capital division of First Chicago Bank to address uncertainty more explicitly than single-point valuation methods."
            }
          },
          {
            "@type": "Question",
            name: "How does the model handle uncertainty?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Instead of relying solely on discount rates to capture risk, the model builds three distinct scenarios—Downside, Base Case, and Upside—with separate revenue, margin, and cash-flow assumptions. Each scenario is assigned a probability, and the final valuation is a probability-weighted expected value across the three NPVs."
            }
          },
          {
            "@type": "Question",
            name: "Who should use the First Chicago Model?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Venture capital investors, growth-stage entrepreneurs, and financial advisors who need a structured way to present valuation ranges and risk-adjusted outcomes can all use the First Chicago approach. It is particularly helpful for investment committee materials and sophisticated fundraising discussions."
            }
          },
          {
            "@type": "Question",
            name: "What does the Excel implementation include?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Excel model provides three integrated scenario sheets or sections with 3–5 year projections, exit value calculations based on revenue and profit multiples, discount rate inputs, and probability weighting. It uses a consistent colour-coded layout and protected formulas so users can focus on assumptions and scenarios."
            }
          },
          {
            "@type": "Question",
            name: "What are key limitations and best practices?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The model still depends on financial projections and probability estimates that can be wrong, especially for early-stage startups. Best practice is to use conservative base cases, test sensitivity to exit multiples and discount rates, document all scenario assumptions, and present results as ranges rather than precise point estimates."
            }
          }
        ]
      };

    case "model-perpetuity-exit":
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What are the Perpetuity & Exit Valuation Models?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Perpetuity & Exit Valuation Models are a set of simple Excel tools that apply perpetuity and exit-based valuation methods to analyse how cash flow, growth rates, discount rates, exit timing, and multiples affect net present value. They provide three perpetuity approaches and one exit value approach with consistent scenario analysis."
            }
          },
          {
            "@type": "Question",
            name: "What kinds of questions do these models help answer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "They help users understand which value drivers matter most: how changes in growth assumptions, discount rates, exit multiples, or investment timing affect valuation, and how downside, base, and upside scenarios compare. This supports strategic decisions about funding, growth, and value-creation priorities."
            }
          },
          {
            "@type": "Question",
            name: "Who should use the Perpetuity & Exit Models?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Entrepreneurs, investors, and financial advisors who need quick but robust valuation and sensitivity analysis can use these models. They are particularly useful for understanding value driver sensitivity before building more detailed, company-specific models."
            }
          },
          {
            "@type": "Question",
            name: "How are the models implemented in Excel?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Excel implementation uses a consistent three-scenario framework, discount rate inputs, flexible exit year selection, and optional funding assumptions. It follows the same colour-coding and protection standards as other models, with yellow input cells, white calculation cells, and grey key result cells."
            }
          },
          {
            "@type": "Question",
            name: "What are the main limitations and recommended use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The models are intentionally simplified and focus on valuation mechanics rather than detailed operating forecasts. Results depend heavily on the quality of input assumptions, so they should be used for sensitivity understanding, cross-checks, and education rather than as the only basis for major valuation decisions."
            }
          }
        ]
      };

    case "model-decision-analysis-vc":
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the Decision Analysis for Venture Capital Model?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Decision Analysis for Venture Capital Model is an Excel implementation of Clint Korver's decision analysis framework for startup investing. It decomposes risk into business stages and competitive outcomes and uses probability-weighted analysis to estimate probability-weighted multiples on investment."
            }
          },
          {
            "@type": "Question",
            name: "How does the model decompose startup risk?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The model separates risk into stage risks—such as technology, market, and competitive stages—and then considers different competitive outcomes such as Market Leader, Challenger, Also-ran, and Failure. Each path is assigned probabilities and associated exit multiples, which are combined into a probability-weighted multiple on investment."
            }
          },
          {
            "@type": "Question",
            name: "Who should use this decision analysis model?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Venture capital investors, growth-stage entrepreneurs, and financial advisors who want a more explicit, probability-based view of risk and return can use this model. It is especially helpful for investment committee discussions and for structuring conversations about risk mitigation and upside potential."
            }
          },
          {
            "@type": "Question",
            name: "What does the Excel implementation provide?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Excel model provides a single integrated sheet or system where users assign stage and competitive probabilities, specify exit multiples for different outcomes, and calculate probability-weighted multiples on investment. It uses a colour-coded, protected layout with real-time updates when probabilities or exit assumptions change."
            }
          },
          {
            "@type": "Question",
            name: "What are the main limitations and best practices?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The model relies on subjective probability estimates and external exit valuation inputs, which can be uncertain and biased. Best practice is to use conservative assumptions, run sensitivity analysis across key probabilities and exit multiples, document the reasoning behind inputs, and update the analysis as companies progress through business stages."
            }
          }
        ]
      };

    default:
      return null;
  }
}
