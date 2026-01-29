var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": ""
},
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface  OpenIntro Statistics offers a traditional introduction to statistics at the college level. This book is now available in PreTeXt format, enabling enhanced online features and accessibility.  The book's approach balances conceptual understanding with computational skills and practical application. Real data and examples are used throughout to illustrate statistical concepts.  "
},
{
  "id": "acknowledgement",
  "level": "1",
  "url": "acknowledgement.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " Acknowledgements  This textbook is built on the contributions of many individuals over many years. We are grateful to all who have contributed to making statistics education more accessible.  "
},
{
  "id": "sec-stents-strokes",
  "level": "1",
  "url": "sec-stents-strokes.html",
  "type": "Section",
  "number": "1.1",
  "title": "Case study: using stents to prevent strokes",
  "body": " Case study: using stents to prevent strokes  stroke   This section introduces a classic challenge in statistics: evaluating the efficacy of a medical treatment. Terms in this section, and indeed much of this chapter, will all be revisited later in the text. The plan for now is simply to get a sense of the role statistics can play in practice.  In this section we will consider an experiment that studies effectiveness of stents in treating patients at risk of stroke. Stents are devices put inside blood vessels that assist in patient recovery after cardiac events and reduce the risk of an additional heart attack or death. Many doctors have hoped that there would be similar benefits for patients at risk of stroke. We start by writing the principal question the researchers hope to answer:   Does the use of stents reduce the risk of stroke?   The researchers who asked this question conducted an experiment with 451 at-risk patients. Each volunteer patient was randomly assigned to one of two groups:      Treatment group . Patients in the treatment group received a stent and medical management. The medical management included medications, management of risk factors, and help in lifestyle modification.     Control group . Patients in the control group received the same medical management as the treatment group, but they did not receive stents.     Researchers randomly assigned 224 patients to the treatment group and 227 to the control group. In this study, the control group provides a reference point against which we can measure the medical impact of stents in the treatment group.  Researchers studied the effect of stents at two time points: 30 days after enrollment and 365 days after enrollment. The results of 5 patients are summarized in . Patient outcomes are recorded as stroke or no event , representing whether or not the patient had a stroke at the end of a time period.    Results for five patients from the stent study    Patient  group  0-30 days  0-365 days    1  treatment  no event  no event    2  treatment  stroke  stroke    3  treatment  no event  no event          450  control  no event  no event    451  control  no event  no event     Considering data from each patient individually would be a long, cumbersome path towards answering the original research question. Instead, performing a statistical data analysis allows us to consider all of the data at once. summarizes the raw data in a more helpful way. In this table, we can quickly see what happened over the entire study. For instance, to identify the number of patients in the treatment group who had a stroke within 30 days, we look on the left-side of the table at the intersection of the treatment and stroke: 33.   Descriptive statistics for the stent study     0-30 days   0-365 days     stroke  no event   stroke  no event    treatment  33  191   45  179    control  13  214   28  199    Total  46  405   73  378      Computing proportions from the stent study   Of the 224 patients in the treatment group, 45 had a stroke by the end of the first year. Using these two numbers, compute the proportion of patients in the treatment group who had a stroke by the end of their first year.    The proportion of the 224 patients who had a stroke within 365 days: .    We can compute summary statistics from the table. A summary statistic is a single number summarizing a large amount of data. For instance, the primary results of the study after 1 year could be described by two summary statistics: the proportion of people who had a stroke in the treatment and control groups.     Proportion who had a stroke in the treatment (stent) group: .    Proportion who had a stroke in the control group: .     These two summary statistics are useful in looking for differences in the groups, and we are in for a surprise: an additional 8% of patients in the treatment group had a stroke! This is important for two reasons. First, it is contrary to what doctors expected, which was that stents would reduce the rate of strokes. Second, it leads to a statistical question: do the data show a real difference between the groups?  This second question is subtle. Suppose you flip a coin 100 times. While the chance a coin lands heads in any given coin flip is 50%, we probably won't observe exactly 50 heads. This type of fluctuation is part of almost any type of data generating process. It is possible that the 8% difference in the stent study is due to this natural variation. However, the larger the difference we observe (for a particular sample size), the less believable it is that the difference is due to chance. So what we are really asking is the following: is the difference so large that we should reject the notion that it was due to chance?  While we don't yet have our statistical tools to fully address this question on our own, we can comprehend the conclusions of the published analysis: there was compelling evidence of harm by stents in this study of stroke patients.   Be careful  Do not generalize the results of this study to all patients and all stents. This study looked at patients with very specific characteristics who volunteered to be a part of this study and who may not be representative of all stroke patients. In addition, there are many types of stents and this study only considered the self-expanding Wingspan stent (Boston Scientific). However, this study does leave us with an important lesson: we should keep our eyes open for surprises.    Exercises   Migraine and acupuncture, Part I   A migraine is a particularly painful type of headache, which patients sometimes wish to treat with acupuncture. To determine whether acupuncture relieves migraine pain, researchers conducted a randomized controlled study where 89 females diagnosed with migraine headaches were randomly assigned to one of two groups: treatment or control. 43 patients in the treatment group received acupuncture that is specifically designed to treat migraines. 46 patients in the control group received placebo acupuncture (needle insertion at non-acupoint locations). 24 hours after patients received acupuncture, they were asked if they were pain free. Results are summarized in the contingency table below.   Migraine and acupuncture study results      Pain free       Yes  No  Total     Treatment  10  33  43    Group  Control  2  44  46     Total  12  77  89        What percent of patients in the treatment group were pain free 24 hours after receiving acupuncture?    What percent were pain free in the control group?    In which group did a higher percent of patients become pain free 24 hours after receiving acupuncture?    Your findings so far might suggest that acupuncture is an effective treatment for migraines for all people who suffer from migraines. However, this is not the only possible conclusion that can be drawn based on your findings so far. What is one other possible explanation for the observed difference between the percentages of patients that are pain free 24 hours after receiving acupuncture in the two groups?        Sinusitis and antibiotics, Part I   Researchers studying the effect of antibiotic treatment for acute sinusitis compared to symptomatic treatments randomly assigned 166 adults diagnosed with acute sinusitis to one of two groups: treatment or control. Study participants received either a 10-day course of amoxicillin (an antibiotic) or a placebo similar in appearance and taste. The placebo consisted of symptomatic treatments such as acetaminophen, nasal decongestants, etc. At the end of the 10-day period, patients were asked if they experienced improvement in symptoms. The distribution of responses is summarized below.   Sinusitis and antibiotics study results      Self-reported improvement       in symptoms       Yes  No  Total     Treatment  66  19  85    Group  Control  65  16  81     Total  131  35  166        What percent of patients in the treatment group experienced improvement in symptoms?    What percent experienced improvement in symptoms in the control group?    In which group did a higher percentage of patients experience improvement in symptoms?    Your findings so far might suggest a real difference in effectiveness of antibiotic and placebo treatments for improving symptoms of sinusitis. However, this is not the only possible conclusion that can be drawn based on your findings so far. What is one other possible explanation for the observed difference between the percentages of patients in the antibiotic and placebo treatment groups that experience improvement in symptoms of sinusitis?        "
},
{
  "id": "sec-stents-strokes-3-5",
  "level": "2",
  "url": "sec-stents-strokes.html#sec-stents-strokes-3-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Treatment group Control group "
},
{
  "id": "table-stent-study-results-df",
  "level": "2",
  "url": "sec-stents-strokes.html#table-stent-study-results-df",
  "type": "Table",
  "number": "1.1.1",
  "title": "Results for five patients from the stent study",
  "body": " Results for five patients from the stent study    Patient  group  0-30 days  0-365 days    1  treatment  no event  no event    2  treatment  stroke  stroke    3  treatment  no event  no event          450  control  no event  no event    451  control  no event  no event    "
},
{
  "id": "table-stent-study-results",
  "level": "2",
  "url": "sec-stents-strokes.html#table-stent-study-results",
  "type": "Table",
  "number": "1.1.2",
  "title": "Descriptive statistics for the stent study",
  "body": " Descriptive statistics for the stent study     0-30 days   0-365 days     stroke  no event   stroke  no event    treatment  33  191   45  179    control  13  214   28  199    Total  46  405   73  378    "
},
{
  "id": "guided-practice-stent-proportion",
  "level": "2",
  "url": "sec-stents-strokes.html#guided-practice-stent-proportion",
  "type": "Checkpoint",
  "number": "1.1.3",
  "title": "Computing proportions from the stent study.",
  "body": " Computing proportions from the stent study   Of the 224 patients in the treatment group, 45 had a stroke by the end of the first year. Using these two numbers, compute the proportion of patients in the treatment group who had a stroke by the end of their first year.    The proportion of the 224 patients who had a stroke within 365 days: .   "
},
{
  "id": "sec-stents-strokes-8",
  "level": "2",
  "url": "sec-stents-strokes.html#sec-stents-strokes-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "summary statistic "
},
{
  "id": "sec-stents-strokes-13",
  "level": "2",
  "url": "sec-stents-strokes.html#sec-stents-strokes-13",
  "type": "Warning",
  "number": "1.1.4",
  "title": "Be careful.",
  "body": " Be careful  Do not generalize the results of this study to all patients and all stents. This study looked at patients with very specific characteristics who volunteered to be a part of this study and who may not be representative of all stroke patients. In addition, there are many types of stents and this study only considered the self-expanding Wingspan stent (Boston Scientific). However, this study does leave us with an important lesson: we should keep our eyes open for surprises.  "
},
{
  "id": "ex-migraine-acupuncture",
  "level": "2",
  "url": "sec-stents-strokes.html#ex-migraine-acupuncture",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "Migraine and acupuncture, Part I.",
  "body": " Migraine and acupuncture, Part I   A migraine is a particularly painful type of headache, which patients sometimes wish to treat with acupuncture. To determine whether acupuncture relieves migraine pain, researchers conducted a randomized controlled study where 89 females diagnosed with migraine headaches were randomly assigned to one of two groups: treatment or control. 43 patients in the treatment group received acupuncture that is specifically designed to treat migraines. 46 patients in the control group received placebo acupuncture (needle insertion at non-acupoint locations). 24 hours after patients received acupuncture, they were asked if they were pain free. Results are summarized in the contingency table below.   Migraine and acupuncture study results      Pain free       Yes  No  Total     Treatment  10  33  43    Group  Control  2  44  46     Total  12  77  89        What percent of patients in the treatment group were pain free 24 hours after receiving acupuncture?    What percent were pain free in the control group?    In which group did a higher percent of patients become pain free 24 hours after receiving acupuncture?    Your findings so far might suggest that acupuncture is an effective treatment for migraines for all people who suffer from migraines. However, this is not the only possible conclusion that can be drawn based on your findings so far. What is one other possible explanation for the observed difference between the percentages of patients that are pain free 24 hours after receiving acupuncture in the two groups?      "
},
{
  "id": "ex-sinusitis-antibiotics",
  "level": "2",
  "url": "sec-stents-strokes.html#ex-sinusitis-antibiotics",
  "type": "Exercise",
  "number": "1.1.2",
  "title": "Sinusitis and antibiotics, Part I.",
  "body": " Sinusitis and antibiotics, Part I   Researchers studying the effect of antibiotic treatment for acute sinusitis compared to symptomatic treatments randomly assigned 166 adults diagnosed with acute sinusitis to one of two groups: treatment or control. Study participants received either a 10-day course of amoxicillin (an antibiotic) or a placebo similar in appearance and taste. The placebo consisted of symptomatic treatments such as acetaminophen, nasal decongestants, etc. At the end of the 10-day period, patients were asked if they experienced improvement in symptoms. The distribution of responses is summarized below.   Sinusitis and antibiotics study results      Self-reported improvement       in symptoms       Yes  No  Total     Treatment  66  19  85    Group  Control  65  16  81     Total  131  35  166        What percent of patients in the treatment group experienced improvement in symptoms?    What percent experienced improvement in symptoms in the control group?    In which group did a higher percentage of patients experience improvement in symptoms?    Your findings so far might suggest a real difference in effectiveness of antibiotic and placebo treatments for improving symptoms of sinusitis. However, this is not the only possible conclusion that can be drawn based on your findings so far. What is one other possible explanation for the observed difference between the percentages of patients in the antibiotic and placebo treatment groups that experience improvement in symptoms of sinusitis?      "
},
{
  "id": "sec-data-basics",
  "level": "1",
  "url": "sec-data-basics.html",
  "type": "Section",
  "number": "1.2",
  "title": "Data basics",
  "body": " Data basics   Effective organization and description of data is a first step in most analyses. This section introduces the data matrix for organizing data as well as some terminology about different forms of data that will be used throughout this book.    Observations, variables, and data matrices  loan50 data   displays rows 1, 2, 3, and 50 of a data set for 50 randomly sampled loans offered through Lending Club, which is a peer-to-peer lending company. These observations will be referred to as the loan50 data set.  Each row in the table represents a single loan. The formal name for a row is a case or observational unit . The columns represent characteristics, called variables , for each of the loans. For example, the first row represents a loan of $22,000 with an interest rate of 10.90%, where the borrower is based in New Jersey (NJ) and has an income of $59,000.   Four rows from the loan50 data matrix     loan_amount  interest_rate  term  grade  state  total_income  homeownership    1  22000  10.90  60.00  B  NJ  59000.00  rent    2  6000  9.92  36.00  B  CA  60000.00  rent    3  25000  26.30  36.00  E  SC  75000.00  mortgage              50  15000  6.08  36.00  A  TX  77500.00  mortgage      Reading data from a data matrix   What is the grade of the first loan in ? And what is the home ownership status of the borrower for that first loan?    The loan's grade is B, and the borrower rents their residence.    In practice, it is especially important to ask clarifying questions to ensure important aspects of the data are understood. For instance, it is always important to be sure we know what each variable means and the units of measurement. Descriptions of the loan50 variables are given in .   Variables and their descriptions for the loan50 data set      variable  description    loan_amount  Amount of the loan received, in US dollars.    interest_rate  Interest rate on the loan, in an annual percentage.    term  The length of the loan, which is always set as a whole number of months.    grade  Loan grade, which takes values A through G and represents the quality of the loan and its likelihood of being repaid.    state  US state where the borrower resides.    total_income  Borrower's total income, including any second income, in US dollars.    homeownership  Indicates whether the person owns, owns but has a mortgage, or rents.     The data in represent a data matrix , which is a convenient and common way to organize data, especially if collecting data in a spreadsheet. Each row of a data matrix corresponds to a unique case (observational unit), and each column corresponds to a variable.  When recording data, use a data matrix unless you have a very good reason to use a different structure. This structure allows new cases to be added as rows or new variables as new columns.   Organizing a gradebook   The grades for assignments, quizzes, and exams in a course are often recorded in a gradebook that takes the form of a data matrix. How might you organize grade data using a data matrix?    There are multiple strategies that can be followed. One common strategy is to have each student represented by a row, and then add a column for each assignment, quiz, or exam. Under this setup, it is easy to review a single line to understand a student's grade history. There should also be columns to include student information, such as one column to list student names.     county data We consider data for 3,142 counties in the United States. The data includes each county's name, the state where it resides, its population in 2017, how its population changed from 2010 to 2017, poverty rate, and six additional characteristics.   Organizing county data   How might the county data described above be organized in a data matrix?    Each county may be viewed as a case, and there are eleven pieces of information recorded for each case. A table with 3,142 rows and 11 columns could hold these data, where each row represents a county and each column represents a particular piece of information.      Types of variables  Examine the unemp_rate , pop , state , and median_edu variables in the county data set. Each of these variables is inherently different from the other three, yet some share certain characteristics.  First consider unemp_rate , which is said to be a numerical variable since it can take a wide range of numerical values, and it is sensible to add, subtract, or take averages with those values. On the other hand, we would not classify a variable reporting telephone area codes as numerical since the average, sum, and difference of area codes doesn't have any clear meaning.  The pop variable is also numerical, although it seems to be a little different than unemp_rate . This variable of the population count can only take whole non-negative numbers (0, 1, 2, ). For this reason, the population variable is said to be discrete since it can only take numerical values with jumps. On the other hand, the unemployment rate variable is said to be continuous .  The variable state can take up to 51 values after accounting for Washington, DC: AL, AK, , and WY. Because the responses themselves are categories, state is called a categorical variable, and the possible values are called the variable's levels .  Finally, consider the median_edu variable, which describes the median education level of county residents and takes values below_hs , hs_diploma , some_college , or bachelors in each county. This variable seems to be a hybrid: it is a categorical variable but the levels have a natural ordering. A variable with these properties is called an ordinal variable, while a regular categorical variable without this type of special ordering is called a nominal variable. To simplify analyses, any ordinal variable in this book will be treated as a nominal (unordered) categorical variable.   Breakdown of variables into their respective types   A tree diagram showing \"all variables\" at the top, branching into \"numeric\" and \"categorical\". The \"numeric\" branch splits into \"continuous\" and \"discrete\", while the \"categorical\" branch splits into \"nominal (unordered categorical)\" and \"ordinal (ordered categorical)\".     Classifying variables by type   Data were collected about students in a statistics course. Three variables were recorded for each student: number of siblings, student height, and whether the student had previously taken a statistics course. Classify each of the variables as continuous numerical, discrete numerical, or categorical.    The number of siblings and student height represent numerical variables. Because the number of siblings is a count, it is discrete. Height varies continuously, so it is a continuous numerical variable. The last variable classifies students into two categories those who have and those who have not taken a statistics course which makes this variable categorical.     Classifying experiment variables   An experiment is evaluating the effectiveness of a new drug in treating migraines. A group variable is used to indicate the experiment group for each patient: treatment or control. The num_migraines variable represents the number of migraines the patient experienced during a 3-month period. Classify each variable as either numerical or categorical.    The group variable can take just one of two group names, making it categorical. The num_migraines variable describes a count of the number of migraines, which is an outcome where basic arithmetic is sensible, which means this is numerical outcome; more specifically, since it represents a count, num_migraines is a discrete numerical variable.      Relationships between variables  Many analyses are motivated by a researcher looking for a relationship between two or more variables. A social scientist may like to answer some of the following questions:     If homeownership is lower than the national average in one county, will the percent of multi-unit structures in that county tend to be above or below the national average?    Does a higher than average increase in county population tend to correspond to counties with higher or lower median household incomes?    How useful a predictor is median education level for the median household income for US counties?     To answer these questions, data must be collected, such as the county data set. Examining summary statistics could provide insights for each of the three questions about counties. Additionally, graphs can be used to visually explore data.   Scatterplots are one type of graph used to study the relationship between two numerical variables. A scatterplot comparing the variables homeownership and multi_unit (the percent of units in multi-unit structures such as apartments and condos) shows that counties with a higher rate of multi-units tend to have lower homeownership rates. We might brainstorm as to why this relationship exists and investigate each idea to determine which are the most reasonable explanations.  The multi-unit and homeownership rates are said to be associated because the plot shows a discernible pattern. When two variables show some connection with one another, they are called associated variables. Associated variables can also be called dependent variables and vice-versa.    Exercises   Air pollution and birth outcomes, study components   Researchers collected data to examine the relationship between air pollutants and preterm births in Southern California. During the study air pollution levels were measured by air quality monitoring stations. Length of gestation data were collected on 143,196 births between the years 1989 and 1993, and air pollution exposure during gestation was calculated for each birth. The analysis suggested that increased ambient PM 10 and, to a lesser degree, CO concentrations may be associated with the occurrence of preterm births.   Identify the main research question of the study.  Who are the subjects in this study, and how many are included?  What are the variables in the study? Identify each variable as numerical or categorical. If numerical, state whether the variable is discrete or continuous. If categorical, state whether the variable is ordinal.      Buteyko method, study components   The Buteyko method is a shallow breathing technique developed by Konstantin Buteyko, a Russian doctor, in 1952. Anecdotal evidence suggests that the Buteyko method can reduce asthma symptoms and improve quality of life. In a scientific study to determine the effectiveness of this method, researchers recruited 600 asthma patients aged 18-69 who relied on medication for asthma treatment. These patients were randomly split into two research groups: one practiced the Buteyko method and the other did not. Patients were scored on quality of life, activity, asthma symptoms, and medication reduction on a scale from 0 to 10. On average, the participants in the Buteyko group experienced a significant reduction in asthma symptoms and an improvement in quality of life.   Identify the main research question of the study.  Who are the subjects in this study, and how many are included?  What are the variables in the study? Identify each variable as numerical or categorical. If numerical, state whether the variable is discrete or continuous. If categorical, state whether the variable is ordinal.      Cheaters, study components   Researchers studying the relationship between honesty, age and self-control conducted an experiment on 160 children between the ages of 5 and 15. Participants reported their age, sex, and whether they were an only child or not. The researchers asked each child to toss a fair coin in private and to record the outcome (white or black) on a paper sheet, and said they would only reward children who report white. The study found differences in cheating rates based on instructions and characteristics.   Identify the main research question of the study.  Who are the subjects in this study, and how many are included?  How many variables were recorded for each subject in the study in order to conclude these findings? State the variables and their types.      Stealers, study components   In a study of the relationship between socio-economic class and unethical behavior, 129 University of California undergraduates at Berkeley were asked to identify themselves as having low or high social-class by comparing themselves to others with the most (least) money, most (least) education, and most (least) respected jobs. They were also presented with a jar of individually wrapped candies and informed that the candies were for children in a nearby laboratory, but that they could take some if they wanted. After completing some unrelated tasks, participants reported the number of candies they had taken. It was found that those who were identified as upper-class took more candy than others.   Identify the main research question of the study.  Who are the subjects in this study, and how many are included?  The study found that students who were identified as upper-class took more candy than others. How many variables were recorded for each subject in the study in order to conclude these findings? State the variables and their types.      Relaxing after work   The General Social Survey asked the question, “After an average work day, about how many hours do you have to relax or pursue activities that you enjoy?” to a random sample of 1,155 Americans. The average relaxing time was found to be 1.65 hours. Determine which of the following is an observation, a variable, a sample statistic, or a population parameter.   An American in the sample.  Number of hours spent relaxing after an average work day.  1.65.  Average number of hours all Americans spend relaxing after an average work day.      Cats on YouTube   Suppose you want to estimate the percentage of videos on YouTube that are cat videos. It is impossible for you to watch all videos on YouTube so you use a random video picker to select 1000 videos for you. You find that 2% of these videos are cat videos. Determine which of the following is an observation, a variable, a sample statistic, or a population parameter.   Percentage of all videos on YouTube that are cat videos.  2%.  A video in your sample.  Whether or not a video is a cat video.      Course satisfaction across sections   A large college class has 160 students. All 160 students attend the lectures together, but the students are divided into 4 groups, each of 40 students, for lab sections administered by different teaching assistants. The professor wants to conduct a survey about how satisfied the students are with the course, and he believes that the lab section a student is in might affect the student's overall satisfaction with the course.   What type of study is this?  Suggest a sampling strategy for carrying out this study.      Housing proposal across dorms   On a large college campus first-year students and sophomores live in dorms located on the eastern part of the campus and juniors and seniors live in dorms located on the western part of the campus. Suppose you want to collect student opinions on a new housing structure the college administration is proposing and you want to make sure your survey equally represents opinions from students from all years.   What type of study is this?  Suggest a sampling strategy for carrying out this study.      Internet use and life expectancy   A study evaluated the relationship between estimated life expectancy at birth (as of 2014) and percentage of internet users (as of 2009) in 208 countries. A scatterplot shows life expectancy versus percent internet users.   Describe the relationship between life expectancy and percentage of internet users.  What type of study is this?  State a possible confounding variable that might explain this relationship and describe its potential effect.    Life expectancy versus internet use   Scatterplot of life expectancy at birth versus percent internet users for 208 countries.       Stressed out, Part I   A study surveyed a random sample of otherwise healthy high school students and found that they are more likely to get muscle cramps when they are stressed. The study also noted that students drink more coffee and sleep less when they are stressed.   What type of study is this?  Can this study be used to conclude a causal relationship between increased stress and muscle cramps?  State possible confounding variables that might explain the observed relationship between increased stress and muscle cramps.      Evaluate sampling methods   A university wants to determine what fraction of its undergraduate student body support a new $25 annual fee to improve the student union. For each proposed method below, indicate whether the method is reasonable or not.   Survey a simple random sample of 500 students.  Stratify students by their field of study, then sample 10% of students from each stratum.  Cluster students by their ages (e.g. 18 years old in one cluster, 19 years old in one cluster, etc.), then randomly sample three clusters and survey all students in those clusters.      Random digit dialing   The Gallup Poll uses a procedure called random digit dialing, which creates phone numbers based on a list of all area codes in America in conjunction with the associated number of residential households in each area code. Give a possible reason the Gallup Poll chooses to use random digit dialing instead of picking phone numbers from the phone book.     Haters are gonna hate, study confirms   A study asked a group of 200 randomly sampled men and women to evaluate how they felt about various subjects to measure their attitude towards mostly independent stimuli, then presented information about a fictitious microwave oven. People who reacted positively to the subjects also tended to react positively to the microwave oven, and those who reacted negatively tended to react negatively to it.   What are the cases?  What are the response variables?  What are the explanatory variables?  Does the study employ random sampling?  Is this an observational study or an experiment? Explain.  Can we establish a causal link between the explanatory and response variables?  Can the results of the study be generalized to the population at large?      Family size   Suppose we want to estimate household size. If we select students at random at an elementary school and ask them what their family size is, will this be a good measure of household size? Or will our average be biased? If so, will it overestimate or underestimate the true value?     Sampling strategies   A statistics student curious about the relationship between the amount of time students spend on social networking sites and their performance at school considers several sampling strategies. For each, name the sampling method proposed and any bias you might expect.   Randomly sample 40 students from the population, give them the survey, ask them to return it the next day.  Give out the survey only to friends, making sure each one fills it out.  Post a link to an online survey on Facebook and ask friends to fill it out.  Randomly sample 5 classes and ask a random sample of students from those classes to fill out the survey.      Reading the paper   Consider two news excerpts, one about smoking and dementia, and another about sleep disorders and bullying. For each, evaluate whether the conclusions are justified and what can actually be concluded from the studies described.   Researchers analyzed data on over 23,000 people aged 50-60 and found smokers were more likely to develop dementia. Can we conclude smoking causes dementia later in life? Explain.  A study collected survey data on children’s sleep habits and bullying behavior and found those with sleep problems were twice as likely to have disruptive behavior or bullying issues. Does this show sleep disorders lead to bullying? If not, how best to describe the conclusion?      Migraine and acupuncture, Part II   A randomized controlled study assigned migraine patients to acupuncture designed for migraines (treatment) or placebo acupuncture (control). Twenty-four hours later, patients reported whether they were pain free. Identify the explanatory and response variables.     Sinusitis and antibiotics, Part II   A study on acute sinusitis compared a 10-day antibiotic course (treatment) to a placebo (control), then asked patients if they experienced improvement in symptoms. Identify the explanatory and response variables.     Fisher’s irises   A data set contains sepal length and width, and petal length and width from three species of iris flowers (setosa, versicolor, virginica), with 50 flowers from each species.   How many cases are included?  How many numerical variables are included? Identify each and whether it is continuous or discrete.  How many categorical variables are included? List them and their levels.    Iris versicolor   Photo of a purple iris flower.       Smoking habits of UK residents   A survey was conducted to study the smoking habits of UK residents. A portion of the data matrix is shown with variables: sex, age, marital status, gross income, smoking status, and cigarettes per day on weekends and weekdays.   Subset of UK smoking survey    sex age marital grossIncome smoke amtWeekends amtWeekdays   1 Female 42 Single Under GBP 2,600 Yes 12 cig\/day 12 cig\/day  2 Male 44 Single GBP 10,400 to GBP 15,600 No N\/A N\/A  3 Male 53 Married Above GBP 36,400 Yes 6 cig\/day 6 cig\/day   1691 Male 40 Single GBP 2,600 to GBP 5,200 Yes 8 cig\/day 8 cig\/day     What does each row of the data matrix represent?  How many participants were included in the survey?  Indicate whether each variable is numerical or categorical. If numerical, state if continuous or discrete. If categorical, indicate if ordinal.      US Airports   A visualization shows the geographical distribution of airports in the contiguous United States, by ownership and usage type. Each observation is an airport.   Distribution of US airports by ownership and use   Maps showing public\/private ownership and use of airports across the US.     List the variables used in creating this visualization.  Indicate whether each variable is numerical or categorical. If numerical, state if continuous or discrete. If categorical, indicate if ordinal.      UN Votes   A visualization shows voting patterns in the United States, Canada, and Mexico in the UN General Assembly from 1946 to 2015, displaying the percentage of roll calls voting yes for various issues. Each observation is a country\/year pair.   UN General Assembly voting patterns   Trends of percent yes votes over time for several UN issues for three countries.     List the variables used in creating this visualization.  Indicate whether each variable is numerical or categorical. If numerical, state if continuous or discrete. If categorical, indicate if ordinal.      "
},
{
  "id": "subsec-observations-variables-4",
  "level": "2",
  "url": "sec-data-basics.html#subsec-observations-variables-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "case observational unit variables "
},
{
  "id": "table-loan50-df",
  "level": "2",
  "url": "sec-data-basics.html#table-loan50-df",
  "type": "Table",
  "number": "1.2.1",
  "title": "Four rows from the <code class=\"code-inline tex2jax_ignore\">loan50<\/code> data matrix",
  "body": " Four rows from the loan50 data matrix     loan_amount  interest_rate  term  grade  state  total_income  homeownership    1  22000  10.90  60.00  B  NJ  59000.00  rent    2  6000  9.92  36.00  B  CA  60000.00  rent    3  25000  26.30  36.00  E  SC  75000.00  mortgage              50  15000  6.08  36.00  A  TX  77500.00  mortgage    "
},
{
  "id": "guided-practice-loan50-first",
  "level": "2",
  "url": "sec-data-basics.html#guided-practice-loan50-first",
  "type": "Checkpoint",
  "number": "1.2.2",
  "title": "Reading data from a data matrix.",
  "body": " Reading data from a data matrix   What is the grade of the first loan in ? And what is the home ownership status of the borrower for that first loan?    The loan's grade is B, and the borrower rents their residence.   "
},
{
  "id": "table-loan50-variables",
  "level": "2",
  "url": "sec-data-basics.html#table-loan50-variables",
  "type": "Table",
  "number": "1.2.3",
  "title": "Variables and their descriptions for the <code class=\"code-inline tex2jax_ignore\">loan50<\/code> data set",
  "body": " Variables and their descriptions for the loan50 data set      variable  description    loan_amount  Amount of the loan received, in US dollars.    interest_rate  Interest rate on the loan, in an annual percentage.    term  The length of the loan, which is always set as a whole number of months.    grade  Loan grade, which takes values A through G and represents the quality of the loan and its likelihood of being repaid.    state  US state where the borrower resides.    total_income  Borrower's total income, including any second income, in US dollars.    homeownership  Indicates whether the person owns, owns but has a mortgage, or rents.    "
},
{
  "id": "subsec-observations-variables-9",
  "level": "2",
  "url": "sec-data-basics.html#subsec-observations-variables-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "data matrix "
},
{
  "id": "guided-practice-gradebook",
  "level": "2",
  "url": "sec-data-basics.html#guided-practice-gradebook",
  "type": "Checkpoint",
  "number": "1.2.4",
  "title": "Organizing a gradebook.",
  "body": " Organizing a gradebook   The grades for assignments, quizzes, and exams in a course are often recorded in a gradebook that takes the form of a data matrix. How might you organize grade data using a data matrix?    There are multiple strategies that can be followed. One common strategy is to have each student represented by a row, and then add a column for each assignment, quiz, or exam. Under this setup, it is easy to review a single line to understand a student's grade history. There should also be columns to include student information, such as one column to list student names.   "
},
{
  "id": "guided-practice-county-data-matrix",
  "level": "2",
  "url": "sec-data-basics.html#guided-practice-county-data-matrix",
  "type": "Checkpoint",
  "number": "1.2.5",
  "title": "Organizing county data.",
  "body": " Organizing county data   How might the county data described above be organized in a data matrix?    Each county may be viewed as a case, and there are eleven pieces of information recorded for each case. A table with 3,142 rows and 11 columns could hold these data, where each row represents a county and each column represents a particular piece of information.   "
},
{
  "id": "subsec-types-of-variables-3",
  "level": "2",
  "url": "sec-data-basics.html#subsec-types-of-variables-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "numerical "
},
{
  "id": "subsec-types-of-variables-4",
  "level": "2",
  "url": "sec-data-basics.html#subsec-types-of-variables-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "discrete continuous "
},
{
  "id": "subsec-types-of-variables-5",
  "level": "2",
  "url": "sec-data-basics.html#subsec-types-of-variables-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "categorical levels "
},
{
  "id": "subsec-types-of-variables-6",
  "level": "2",
  "url": "sec-data-basics.html#subsec-types-of-variables-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ordinal nominal "
},
{
  "id": "fig-variable-types",
  "level": "2",
  "url": "sec-data-basics.html#fig-variable-types",
  "type": "Figure",
  "number": "1.2.6",
  "title": "",
  "body": " Breakdown of variables into their respective types   A tree diagram showing \"all variables\" at the top, branching into \"numeric\" and \"categorical\". The \"numeric\" branch splits into \"continuous\" and \"discrete\", while the \"categorical\" branch splits into \"nominal (unordered categorical)\" and \"ordinal (ordered categorical)\".   "
},
{
  "id": "example-classify-variables",
  "level": "2",
  "url": "sec-data-basics.html#example-classify-variables",
  "type": "Example",
  "number": "1.2.7",
  "title": "Classifying variables by type.",
  "body": " Classifying variables by type   Data were collected about students in a statistics course. Three variables were recorded for each student: number of siblings, student height, and whether the student had previously taken a statistics course. Classify each of the variables as continuous numerical, discrete numerical, or categorical.    The number of siblings and student height represent numerical variables. Because the number of siblings is a count, it is discrete. Height varies continuously, so it is a continuous numerical variable. The last variable classifies students into two categories those who have and those who have not taken a statistics course which makes this variable categorical.   "
},
{
  "id": "guided-practice-migraine-variables",
  "level": "2",
  "url": "sec-data-basics.html#guided-practice-migraine-variables",
  "type": "Checkpoint",
  "number": "1.2.8",
  "title": "Classifying experiment variables.",
  "body": " Classifying experiment variables   An experiment is evaluating the effectiveness of a new drug in treating migraines. A group variable is used to indicate the experiment group for each patient: treatment or control. The num_migraines variable represents the number of migraines the patient experienced during a 3-month period. Classify each variable as either numerical or categorical.    The group variable can take just one of two group names, making it categorical. The num_migraines variable describes a count of the number of migraines, which is an outcome where basic arithmetic is sensible, which means this is numerical outcome; more specifically, since it represents a count, num_migraines is a discrete numerical variable.   "
},
{
  "id": "subsec-relationships-between-variables-5",
  "level": "2",
  "url": "sec-data-basics.html#subsec-relationships-between-variables-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Scatterplots "
},
{
  "id": "subsec-relationships-between-variables-6",
  "level": "2",
  "url": "sec-data-basics.html#subsec-relationships-between-variables-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "associated dependent "
},
{
  "id": "ex-air-pollution-components",
  "level": "2",
  "url": "sec-data-basics.html#ex-air-pollution-components",
  "type": "Exercise",
  "number": "1.2.4.1",
  "title": "Air pollution and birth outcomes, study components.",
  "body": " Air pollution and birth outcomes, study components   Researchers collected data to examine the relationship between air pollutants and preterm births in Southern California. During the study air pollution levels were measured by air quality monitoring stations. Length of gestation data were collected on 143,196 births between the years 1989 and 1993, and air pollution exposure during gestation was calculated for each birth. The analysis suggested that increased ambient PM 10 and, to a lesser degree, CO concentrations may be associated with the occurrence of preterm births.   Identify the main research question of the study.  Who are the subjects in this study, and how many are included?  What are the variables in the study? Identify each variable as numerical or categorical. If numerical, state whether the variable is discrete or continuous. If categorical, state whether the variable is ordinal.    "
},
{
  "id": "ex-buteyko-components",
  "level": "2",
  "url": "sec-data-basics.html#ex-buteyko-components",
  "type": "Exercise",
  "number": "1.2.4.2",
  "title": "Buteyko method, study components.",
  "body": " Buteyko method, study components   The Buteyko method is a shallow breathing technique developed by Konstantin Buteyko, a Russian doctor, in 1952. Anecdotal evidence suggests that the Buteyko method can reduce asthma symptoms and improve quality of life. In a scientific study to determine the effectiveness of this method, researchers recruited 600 asthma patients aged 18-69 who relied on medication for asthma treatment. These patients were randomly split into two research groups: one practiced the Buteyko method and the other did not. Patients were scored on quality of life, activity, asthma symptoms, and medication reduction on a scale from 0 to 10. On average, the participants in the Buteyko group experienced a significant reduction in asthma symptoms and an improvement in quality of life.   Identify the main research question of the study.  Who are the subjects in this study, and how many are included?  What are the variables in the study? Identify each variable as numerical or categorical. If numerical, state whether the variable is discrete or continuous. If categorical, state whether the variable is ordinal.    "
},
{
  "id": "ex-cheaters-components",
  "level": "2",
  "url": "sec-data-basics.html#ex-cheaters-components",
  "type": "Exercise",
  "number": "1.2.4.3",
  "title": "Cheaters, study components.",
  "body": " Cheaters, study components   Researchers studying the relationship between honesty, age and self-control conducted an experiment on 160 children between the ages of 5 and 15. Participants reported their age, sex, and whether they were an only child or not. The researchers asked each child to toss a fair coin in private and to record the outcome (white or black) on a paper sheet, and said they would only reward children who report white. The study found differences in cheating rates based on instructions and characteristics.   Identify the main research question of the study.  Who are the subjects in this study, and how many are included?  How many variables were recorded for each subject in the study in order to conclude these findings? State the variables and their types.    "
},
{
  "id": "ex-stealers-components",
  "level": "2",
  "url": "sec-data-basics.html#ex-stealers-components",
  "type": "Exercise",
  "number": "1.2.4.4",
  "title": "Stealers, study components.",
  "body": " Stealers, study components   In a study of the relationship between socio-economic class and unethical behavior, 129 University of California undergraduates at Berkeley were asked to identify themselves as having low or high social-class by comparing themselves to others with the most (least) money, most (least) education, and most (least) respected jobs. They were also presented with a jar of individually wrapped candies and informed that the candies were for children in a nearby laboratory, but that they could take some if they wanted. After completing some unrelated tasks, participants reported the number of candies they had taken. It was found that those who were identified as upper-class took more candy than others.   Identify the main research question of the study.  Who are the subjects in this study, and how many are included?  The study found that students who were identified as upper-class took more candy than others. How many variables were recorded for each subject in the study in order to conclude these findings? State the variables and their types.    "
},
{
  "id": "ex-relax-after-work",
  "level": "2",
  "url": "sec-data-basics.html#ex-relax-after-work",
  "type": "Exercise",
  "number": "1.2.4.5",
  "title": "Relaxing after work.",
  "body": " Relaxing after work   The General Social Survey asked the question, “After an average work day, about how many hours do you have to relax or pursue activities that you enjoy?” to a random sample of 1,155 Americans. The average relaxing time was found to be 1.65 hours. Determine which of the following is an observation, a variable, a sample statistic, or a population parameter.   An American in the sample.  Number of hours spent relaxing after an average work day.  1.65.  Average number of hours all Americans spend relaxing after an average work day.    "
},
{
  "id": "ex-cats-on-youtube",
  "level": "2",
  "url": "sec-data-basics.html#ex-cats-on-youtube",
  "type": "Exercise",
  "number": "1.2.4.6",
  "title": "Cats on YouTube.",
  "body": " Cats on YouTube   Suppose you want to estimate the percentage of videos on YouTube that are cat videos. It is impossible for you to watch all videos on YouTube so you use a random video picker to select 1000 videos for you. You find that 2% of these videos are cat videos. Determine which of the following is an observation, a variable, a sample statistic, or a population parameter.   Percentage of all videos on YouTube that are cat videos.  2%.  A video in your sample.  Whether or not a video is a cat video.    "
},
{
  "id": "ex-course-satisfaction",
  "level": "2",
  "url": "sec-data-basics.html#ex-course-satisfaction",
  "type": "Exercise",
  "number": "1.2.4.7",
  "title": "Course satisfaction across sections.",
  "body": " Course satisfaction across sections   A large college class has 160 students. All 160 students attend the lectures together, but the students are divided into 4 groups, each of 40 students, for lab sections administered by different teaching assistants. The professor wants to conduct a survey about how satisfied the students are with the course, and he believes that the lab section a student is in might affect the student's overall satisfaction with the course.   What type of study is this?  Suggest a sampling strategy for carrying out this study.    "
},
{
  "id": "ex-housing-proposal-dorms",
  "level": "2",
  "url": "sec-data-basics.html#ex-housing-proposal-dorms",
  "type": "Exercise",
  "number": "1.2.4.8",
  "title": "Housing proposal across dorms.",
  "body": " Housing proposal across dorms   On a large college campus first-year students and sophomores live in dorms located on the eastern part of the campus and juniors and seniors live in dorms located on the western part of the campus. Suppose you want to collect student opinions on a new housing structure the college administration is proposing and you want to make sure your survey equally represents opinions from students from all years.   What type of study is this?  Suggest a sampling strategy for carrying out this study.    "
},
{
  "id": "ex-internet-life-expectancy",
  "level": "2",
  "url": "sec-data-basics.html#ex-internet-life-expectancy",
  "type": "Exercise",
  "number": "1.2.4.9",
  "title": "Internet use and life expectancy.",
  "body": " Internet use and life expectancy   A study evaluated the relationship between estimated life expectancy at birth (as of 2014) and percentage of internet users (as of 2009) in 208 countries. A scatterplot shows life expectancy versus percent internet users.   Describe the relationship between life expectancy and percentage of internet users.  What type of study is this?  State a possible confounding variable that might explain this relationship and describe its potential effect.    Life expectancy versus internet use   Scatterplot of life expectancy at birth versus percent internet users for 208 countries.     "
},
{
  "id": "ex-stressed-out-part1",
  "level": "2",
  "url": "sec-data-basics.html#ex-stressed-out-part1",
  "type": "Exercise",
  "number": "1.2.4.10",
  "title": "Stressed out, Part I.",
  "body": " Stressed out, Part I   A study surveyed a random sample of otherwise healthy high school students and found that they are more likely to get muscle cramps when they are stressed. The study also noted that students drink more coffee and sleep less when they are stressed.   What type of study is this?  Can this study be used to conclude a causal relationship between increased stress and muscle cramps?  State possible confounding variables that might explain the observed relationship between increased stress and muscle cramps.    "
},
{
  "id": "ex-evaluate-sampling-methods",
  "level": "2",
  "url": "sec-data-basics.html#ex-evaluate-sampling-methods",
  "type": "Exercise",
  "number": "1.2.4.11",
  "title": "Evaluate sampling methods.",
  "body": " Evaluate sampling methods   A university wants to determine what fraction of its undergraduate student body support a new $25 annual fee to improve the student union. For each proposed method below, indicate whether the method is reasonable or not.   Survey a simple random sample of 500 students.  Stratify students by their field of study, then sample 10% of students from each stratum.  Cluster students by their ages (e.g. 18 years old in one cluster, 19 years old in one cluster, etc.), then randomly sample three clusters and survey all students in those clusters.    "
},
{
  "id": "ex-random-digit-dialing",
  "level": "2",
  "url": "sec-data-basics.html#ex-random-digit-dialing",
  "type": "Exercise",
  "number": "1.2.4.12",
  "title": "Random digit dialing.",
  "body": " Random digit dialing   The Gallup Poll uses a procedure called random digit dialing, which creates phone numbers based on a list of all area codes in America in conjunction with the associated number of residential households in each area code. Give a possible reason the Gallup Poll chooses to use random digit dialing instead of picking phone numbers from the phone book.   "
},
{
  "id": "ex-haters-gonna-hate",
  "level": "2",
  "url": "sec-data-basics.html#ex-haters-gonna-hate",
  "type": "Exercise",
  "number": "1.2.4.13",
  "title": "Haters are gonna hate, study confirms.",
  "body": " Haters are gonna hate, study confirms   A study asked a group of 200 randomly sampled men and women to evaluate how they felt about various subjects to measure their attitude towards mostly independent stimuli, then presented information about a fictitious microwave oven. People who reacted positively to the subjects also tended to react positively to the microwave oven, and those who reacted negatively tended to react negatively to it.   What are the cases?  What are the response variables?  What are the explanatory variables?  Does the study employ random sampling?  Is this an observational study or an experiment? Explain.  Can we establish a causal link between the explanatory and response variables?  Can the results of the study be generalized to the population at large?    "
},
{
  "id": "ex-family-size-bias",
  "level": "2",
  "url": "sec-data-basics.html#ex-family-size-bias",
  "type": "Exercise",
  "number": "1.2.4.14",
  "title": "Family size.",
  "body": " Family size   Suppose we want to estimate household size. If we select students at random at an elementary school and ask them what their family size is, will this be a good measure of household size? Or will our average be biased? If so, will it overestimate or underestimate the true value?   "
},
{
  "id": "ex-sampling-strategies-social-media",
  "level": "2",
  "url": "sec-data-basics.html#ex-sampling-strategies-social-media",
  "type": "Exercise",
  "number": "1.2.4.15",
  "title": "Sampling strategies.",
  "body": " Sampling strategies   A statistics student curious about the relationship between the amount of time students spend on social networking sites and their performance at school considers several sampling strategies. For each, name the sampling method proposed and any bias you might expect.   Randomly sample 40 students from the population, give them the survey, ask them to return it the next day.  Give out the survey only to friends, making sure each one fills it out.  Post a link to an online survey on Facebook and ask friends to fill it out.  Randomly sample 5 classes and ask a random sample of students from those classes to fill out the survey.    "
},
{
  "id": "ex-reading-the-paper",
  "level": "2",
  "url": "sec-data-basics.html#ex-reading-the-paper",
  "type": "Exercise",
  "number": "1.2.4.16",
  "title": "Reading the paper.",
  "body": " Reading the paper   Consider two news excerpts, one about smoking and dementia, and another about sleep disorders and bullying. For each, evaluate whether the conclusions are justified and what can actually be concluded from the studies described.   Researchers analyzed data on over 23,000 people aged 50-60 and found smokers were more likely to develop dementia. Can we conclude smoking causes dementia later in life? Explain.  A study collected survey data on children’s sleep habits and bullying behavior and found those with sleep problems were twice as likely to have disruptive behavior or bullying issues. Does this show sleep disorders lead to bullying? If not, how best to describe the conclusion?    "
},
{
  "id": "ex-migraine-exp-response",
  "level": "2",
  "url": "sec-data-basics.html#ex-migraine-exp-response",
  "type": "Exercise",
  "number": "1.2.4.17",
  "title": "Migraine and acupuncture, Part II.",
  "body": " Migraine and acupuncture, Part II   A randomized controlled study assigned migraine patients to acupuncture designed for migraines (treatment) or placebo acupuncture (control). Twenty-four hours later, patients reported whether they were pain free. Identify the explanatory and response variables.   "
},
{
  "id": "ex-sinusitis-exp-response",
  "level": "2",
  "url": "sec-data-basics.html#ex-sinusitis-exp-response",
  "type": "Exercise",
  "number": "1.2.4.18",
  "title": "Sinusitis and antibiotics, Part II.",
  "body": " Sinusitis and antibiotics, Part II   A study on acute sinusitis compared a 10-day antibiotic course (treatment) to a placebo (control), then asked patients if they experienced improvement in symptoms. Identify the explanatory and response variables.   "
},
{
  "id": "ex-fishers-irises",
  "level": "2",
  "url": "sec-data-basics.html#ex-fishers-irises",
  "type": "Exercise",
  "number": "1.2.4.19",
  "title": "Fisher’s irises.",
  "body": " Fisher’s irises   A data set contains sepal length and width, and petal length and width from three species of iris flowers (setosa, versicolor, virginica), with 50 flowers from each species.   How many cases are included?  How many numerical variables are included? Identify each and whether it is continuous or discrete.  How many categorical variables are included? List them and their levels.    Iris versicolor   Photo of a purple iris flower.     "
},
{
  "id": "ex-smoking-habits-uk",
  "level": "2",
  "url": "sec-data-basics.html#ex-smoking-habits-uk",
  "type": "Exercise",
  "number": "1.2.4.20",
  "title": "Smoking habits of UK residents.",
  "body": " Smoking habits of UK residents   A survey was conducted to study the smoking habits of UK residents. A portion of the data matrix is shown with variables: sex, age, marital status, gross income, smoking status, and cigarettes per day on weekends and weekdays.   Subset of UK smoking survey    sex age marital grossIncome smoke amtWeekends amtWeekdays   1 Female 42 Single Under GBP 2,600 Yes 12 cig\/day 12 cig\/day  2 Male 44 Single GBP 10,400 to GBP 15,600 No N\/A N\/A  3 Male 53 Married Above GBP 36,400 Yes 6 cig\/day 6 cig\/day   1691 Male 40 Single GBP 2,600 to GBP 5,200 Yes 8 cig\/day 8 cig\/day     What does each row of the data matrix represent?  How many participants were included in the survey?  Indicate whether each variable is numerical or categorical. If numerical, state if continuous or discrete. If categorical, indicate if ordinal.    "
},
{
  "id": "ex-us-airports",
  "level": "2",
  "url": "sec-data-basics.html#ex-us-airports",
  "type": "Exercise",
  "number": "1.2.4.21",
  "title": "US Airports.",
  "body": " US Airports   A visualization shows the geographical distribution of airports in the contiguous United States, by ownership and usage type. Each observation is an airport.   Distribution of US airports by ownership and use   Maps showing public\/private ownership and use of airports across the US.     List the variables used in creating this visualization.  Indicate whether each variable is numerical or categorical. If numerical, state if continuous or discrete. If categorical, indicate if ordinal.    "
},
{
  "id": "ex-un-votes",
  "level": "2",
  "url": "sec-data-basics.html#ex-un-votes",
  "type": "Exercise",
  "number": "1.2.4.22",
  "title": "UN Votes.",
  "body": " UN Votes   A visualization shows voting patterns in the United States, Canada, and Mexico in the UN General Assembly from 1946 to 2015, displaying the percentage of roll calls voting yes for various issues. Each observation is a country\/year pair.   UN General Assembly voting patterns   Trends of percent yes votes over time for several UN issues for three countries.     List the variables used in creating this visualization.  Indicate whether each variable is numerical or categorical. If numerical, state if continuous or discrete. If categorical, indicate if ordinal.    "
},
{
  "id": "sec-sampling-principles",
  "level": "1",
  "url": "sec-sampling-principles.html",
  "type": "Section",
  "number": "1.3",
  "title": "Sampling principles and strategies",
  "body": " Sampling principles and strategies   The first step in research is to pose a clear question, then decide what subjects to study and how to collect reliable data. Careful sampling is essential for trustworthy conclusions.    Populations and samples  Each research question targets a population. Often it is too expensive to measure every case, so we select a sample—a subset of the population—to estimate the quantity of interest.   Identifying populations   Consider: (1) the average mercury content in Atlantic swordfish, (2) the average time to degree for Duke undergrads in the last 5 years, (3) whether a new drug reduces deaths in patients with severe heart disease. Each has a population and cases; samples are used to estimate population features.     Identifying populations   For questions (2) and (3) above, identify the target population and what represents a single case.    Graduated Duke undergrads in the last five years; each graduate is a case. People with severe heart disease; each patient is a case.      Anecdotal evidence  Conclusions based on a few striking cases—anecdotal evidence—may not represent the population. Such cases are memorable but rarely typical.   Anecdotal evidence can mislead   Snowy trees after a storm; one storm in one region says little about global climate.     Be cautious with anecdotal evidence: it may be true but not representative.     Sampling from a population  We typically use a random sample to avoid bias. In a simple random sample each case has equal chance of selection and selection of one case gives no information about others.   Selecting a random sample   Randomly selecting cases from a population to form a sample.     Unintentional bias   Letting a nutrition major hand-pick graduates might overrepresent health-related fields. Hand selection risks bias even when unintended.     Biased selection   Sampling only from a subset (e.g., health-related majors) introduces bias.    Non-response can also bias results: if only a fraction respond, the sample may not represent the population.   Effect of non-response   Surveys may only capture a subset of the intended population.     Interpreting online reviews   Product ratings online come from those who choose to post. If 50% of reviews are negative, does that imply 50% of buyers are dissatisfied?    Likely not; reviewers are self-selected and may be more motivated when dissatisfied, creating negative bias.      Observational studies  Observational data arise without assigning treatments. They can show association but cannot alone establish causation due to possible confounding variables.   Sunscreen and skin cancer   Suppose an observational study finds sunscreen use associated with higher skin cancer. Does sunscreen cause cancer?    No. Sun exposure confounds: more sun leads to both more sunscreen and higher cancer risk.    Confounding variables affect both explanatory and response variables. Observational studies may be prospective (following subjects forward) or retrospective (using past records).    Four sampling methods  Randomness underlies most statistical methods. Common designs:   Simple random sample: every case equally likely, independent selection.  Stratified sample: divide into similar strata, then sample within each.  Cluster sample: divide into clusters, sample clusters, include all cases in chosen clusters.  Multistage sample: sample clusters, then sample within clusters.    Simple random vs. stratified sampling   Comparison of selecting individuals directly versus sampling within strata.     Cluster and multistage sampling   Sampling entire clusters or sampling within selected clusters.     Choosing a sampling design   Estimating malaria rate across 30 similar villages: cluster or multistage sampling (select villages, then people) is cost-effective and yields reliable estimates with appropriate analysis.      Exercises    Air pollution and birth outcomes, scope of inference   For the air pollution and preterm births study: identify population and sample; discuss generalizability and causality.     Cheaters, scope of inference   For the honesty study on 160 children: identify population and sample; discuss generalizability and causality.     Buteyko method, scope of inference   For the Buteyko asthma study: identify population and sample; discuss generalizability and causality.     Stealers, scope of inference   For the socio-economic class and candy study: identify population and sample; discuss generalizability and causality.     Relaxing after work   Classify observation, variable, statistic, parameter for the relaxing time survey (mean 1.65 hours).     Cats on YouTube   Classify observation, variable, statistic, parameter for estimating percent cat videos.     Course satisfaction across sections   Large class with four lab sections: identify study type and propose sampling strategy.     Housing proposal across dorms   Survey opinions across east\/west campus dorms ensuring equal year representation: identify study type and sampling plan.     Internet use and life expectancy   Interpret the life expectancy vs. internet use scatterplot; identify study type and a confounder.     Stressed out, Part I   Stress and muscle cramps observational study: study type, causality, possible confounders.     Evaluate sampling methods   Assess reasonableness of three proposed sampling designs for a student fee survey.     Random digit dialing   Why Gallup uses random digit dialing instead of the phone book.     Haters are gonna hate, study confirms   Dispositional attitude study with fake microwave reviews: identify cases, variables, sampling, design, causality, generalization.     Family size   Surveying elementary students about family size: is the estimate biased and in which direction?     Sampling strategies   Classify four proposed sampling methods for a social networking survey and discuss bias.     Reading the paper   Evaluate conclusions in two news articles: smoking and dementia; sleep disorders and bullying.     "
},
{
  "id": "ex-population-examples",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-population-examples",
  "type": "Example",
  "number": "1.3.1",
  "title": "Identifying populations.",
  "body": " Identifying populations   Consider: (1) the average mercury content in Atlantic swordfish, (2) the average time to degree for Duke undergrads in the last 5 years, (3) whether a new drug reduces deaths in patients with severe heart disease. Each has a population and cases; samples are used to estimate population features.   "
},
{
  "id": "gp-population-identification",
  "level": "2",
  "url": "sec-sampling-principles.html#gp-population-identification",
  "type": "Checkpoint",
  "number": "1.3.2",
  "title": "Identifying populations.",
  "body": " Identifying populations   For questions (2) and (3) above, identify the target population and what represents a single case.    Graduated Duke undergrads in the last five years; each graduate is a case. People with severe heart disease; each patient is a case.   "
},
{
  "id": "fig-mn-winter",
  "level": "2",
  "url": "sec-sampling-principles.html#fig-mn-winter",
  "type": "Figure",
  "number": "1.3.3",
  "title": "",
  "body": " Anecdotal evidence can mislead   Snowy trees after a storm; one storm in one region says little about global climate.   "
},
{
  "id": "fig-pop-to-sample",
  "level": "2",
  "url": "sec-sampling-principles.html#fig-pop-to-sample",
  "type": "Figure",
  "number": "1.3.4",
  "title": "",
  "body": " Selecting a random sample   Randomly selecting cases from a population to form a sample.   "
},
{
  "id": "ex-bias-example",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-bias-example",
  "type": "Example",
  "number": "1.3.5",
  "title": "Unintentional bias.",
  "body": " Unintentional bias   Letting a nutrition major hand-pick graduates might overrepresent health-related fields. Hand selection risks bias even when unintended.   "
},
{
  "id": "fig-pop-to-sub-sample",
  "level": "2",
  "url": "sec-sampling-principles.html#fig-pop-to-sub-sample",
  "type": "Figure",
  "number": "1.3.6",
  "title": "",
  "body": " Biased selection   Sampling only from a subset (e.g., health-related majors) introduces bias.   "
},
{
  "id": "fig-survey-sample",
  "level": "2",
  "url": "sec-sampling-principles.html#fig-survey-sample",
  "type": "Figure",
  "number": "1.3.7",
  "title": "",
  "body": " Effect of non-response   Surveys may only capture a subset of the intended population.   "
},
{
  "id": "gp-online-reviews",
  "level": "2",
  "url": "sec-sampling-principles.html#gp-online-reviews",
  "type": "Checkpoint",
  "number": "1.3.8",
  "title": "Interpreting online reviews.",
  "body": " Interpreting online reviews   Product ratings online come from those who choose to post. If 50% of reviews are negative, does that imply 50% of buyers are dissatisfied?    Likely not; reviewers are self-selected and may be more motivated when dissatisfied, creating negative bias.   "
},
{
  "id": "gp-sunscreen-confounding",
  "level": "2",
  "url": "sec-sampling-principles.html#gp-sunscreen-confounding",
  "type": "Checkpoint",
  "number": "1.3.9",
  "title": "Sunscreen and skin cancer.",
  "body": " Sunscreen and skin cancer   Suppose an observational study finds sunscreen use associated with higher skin cancer. Does sunscreen cause cancer?    No. Sun exposure confounds: more sun leads to both more sunscreen and higher cancer risk.   "
},
{
  "id": "subsec-four-sampling-methods-3-1-1",
  "level": "2",
  "url": "sec-sampling-principles.html#subsec-four-sampling-methods-3-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Simple random sample: "
},
{
  "id": "subsec-four-sampling-methods-3-2-1",
  "level": "2",
  "url": "sec-sampling-principles.html#subsec-four-sampling-methods-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Stratified sample: "
},
{
  "id": "subsec-four-sampling-methods-3-3-1",
  "level": "2",
  "url": "sec-sampling-principles.html#subsec-four-sampling-methods-3-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cluster sample: "
},
{
  "id": "subsec-four-sampling-methods-3-4-1",
  "level": "2",
  "url": "sec-sampling-principles.html#subsec-four-sampling-methods-3-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Multistage sample: "
},
{
  "id": "fig-simple-stratified",
  "level": "2",
  "url": "sec-sampling-principles.html#fig-simple-stratified",
  "type": "Figure",
  "number": "1.3.10",
  "title": "",
  "body": " Simple random vs. stratified sampling   Comparison of selecting individuals directly versus sampling within strata.   "
},
{
  "id": "fig-cluster-multistage",
  "level": "2",
  "url": "sec-sampling-principles.html#fig-cluster-multistage",
  "type": "Figure",
  "number": "1.3.11",
  "title": "",
  "body": " Cluster and multistage sampling   Sampling entire clusters or sampling within selected clusters.   "
},
{
  "id": "ex-malaria-sampling",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-malaria-sampling",
  "type": "Example",
  "number": "1.3.12",
  "title": "Choosing a sampling design.",
  "body": " Choosing a sampling design   Estimating malaria rate across 30 similar villages: cluster or multistage sampling (select villages, then people) is cost-effective and yields reliable estimates with appropriate analysis.   "
},
{
  "id": "ex-air-pollution-scope",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-air-pollution-scope",
  "type": "Exercise",
  "number": "1.3.6.1",
  "title": "Air pollution and birth outcomes, scope of inference.",
  "body": " Air pollution and birth outcomes, scope of inference   For the air pollution and preterm births study: identify population and sample; discuss generalizability and causality.   "
},
{
  "id": "ex-cheaters-scope",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-cheaters-scope",
  "type": "Exercise",
  "number": "1.3.6.2",
  "title": "Cheaters, scope of inference.",
  "body": " Cheaters, scope of inference   For the honesty study on 160 children: identify population and sample; discuss generalizability and causality.   "
},
{
  "id": "ex-buteyko-scope",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-buteyko-scope",
  "type": "Exercise",
  "number": "1.3.6.3",
  "title": "Buteyko method, scope of inference.",
  "body": " Buteyko method, scope of inference   For the Buteyko asthma study: identify population and sample; discuss generalizability and causality.   "
},
{
  "id": "ex-stealers-scope",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-stealers-scope",
  "type": "Exercise",
  "number": "1.3.6.4",
  "title": "Stealers, scope of inference.",
  "body": " Stealers, scope of inference   For the socio-economic class and candy study: identify population and sample; discuss generalizability and causality.   "
},
{
  "id": "ex-relax-after-work-definitions",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-relax-after-work-definitions",
  "type": "Exercise",
  "number": "1.3.6.5",
  "title": "Relaxing after work.",
  "body": " Relaxing after work   Classify observation, variable, statistic, parameter for the relaxing time survey (mean 1.65 hours).   "
},
{
  "id": "ex-cats-on-youtube-definitions",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-cats-on-youtube-definitions",
  "type": "Exercise",
  "number": "1.3.6.6",
  "title": "Cats on YouTube.",
  "body": " Cats on YouTube   Classify observation, variable, statistic, parameter for estimating percent cat videos.   "
},
{
  "id": "ex-course-satisfaction-sections",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-course-satisfaction-sections",
  "type": "Exercise",
  "number": "1.3.6.7",
  "title": "Course satisfaction across sections.",
  "body": " Course satisfaction across sections   Large class with four lab sections: identify study type and propose sampling strategy.   "
},
{
  "id": "ex-housing-proposal",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-housing-proposal",
  "type": "Exercise",
  "number": "1.3.6.8",
  "title": "Housing proposal across dorms.",
  "body": " Housing proposal across dorms   Survey opinions across east\/west campus dorms ensuring equal year representation: identify study type and sampling plan.   "
},
{
  "id": "ex-internet-life-expectancy-scope",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-internet-life-expectancy-scope",
  "type": "Exercise",
  "number": "1.3.6.9",
  "title": "Internet use and life expectancy.",
  "body": " Internet use and life expectancy   Interpret the life expectancy vs. internet use scatterplot; identify study type and a confounder.   "
},
{
  "id": "ex-stressed-out-observational",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-stressed-out-observational",
  "type": "Exercise",
  "number": "1.3.6.10",
  "title": "Stressed out, Part I.",
  "body": " Stressed out, Part I   Stress and muscle cramps observational study: study type, causality, possible confounders.   "
},
{
  "id": "ex-evaluate-sampling-methods-union",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-evaluate-sampling-methods-union",
  "type": "Exercise",
  "number": "1.3.6.11",
  "title": "Evaluate sampling methods.",
  "body": " Evaluate sampling methods   Assess reasonableness of three proposed sampling designs for a student fee survey.   "
},
{
  "id": "ex-random-digit-dialing-gallup",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-random-digit-dialing-gallup",
  "type": "Exercise",
  "number": "1.3.6.12",
  "title": "Random digit dialing.",
  "body": " Random digit dialing   Why Gallup uses random digit dialing instead of the phone book.   "
},
{
  "id": "ex-haters-scope",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-haters-scope",
  "type": "Exercise",
  "number": "1.3.6.13",
  "title": "Haters are gonna hate, study confirms.",
  "body": " Haters are gonna hate, study confirms   Dispositional attitude study with fake microwave reviews: identify cases, variables, sampling, design, causality, generalization.   "
},
{
  "id": "ex-family-size-bias-question",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-family-size-bias-question",
  "type": "Exercise",
  "number": "1.3.6.14",
  "title": "Family size.",
  "body": " Family size   Surveying elementary students about family size: is the estimate biased and in which direction?   "
},
{
  "id": "ex-sampling-strategies-social",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-sampling-strategies-social",
  "type": "Exercise",
  "number": "1.3.6.15",
  "title": "Sampling strategies.",
  "body": " Sampling strategies   Classify four proposed sampling methods for a social networking survey and discuss bias.   "
},
{
  "id": "ex-reading-paper",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-reading-paper",
  "type": "Exercise",
  "number": "1.3.6.16",
  "title": "Reading the paper.",
  "body": " Reading the paper   Evaluate conclusions in two news articles: smoking and dementia; sleep disorders and bullying.   "
},
{
  "id": "sec-experiments",
  "level": "1",
  "url": "sec-experiments.html",
  "type": "Section",
  "number": "1.4",
  "title": "Experiments",
  "body": " Experiments   In experiments, researchers assign treatments to cases. Randomized experiments are the gold standard for establishing causation.    Principles of experimental design  Four core principles:   Controlling: hold other factors constant across groups.  Randomization: randomly assign cases to treatments to balance unmeasured factors.  Replication: use enough cases (and replicate studies) to estimate effects precisely.  Blocking: when a known factor affects the response, group by that factor and randomize within blocks.    Blocking on patient risk   Patients split into low\/high risk blocks, then randomized within blocks to control and treatment.      Reducing bias in human experiments  To avoid placebo and observer effects, patients are blinded to treatment via placebos; double-blind designs also blind caregivers\/researchers interacting with patients.   Blinding in the stent study   Was the stent study an experiment? Was it blind or double-blind?    It was an experiment (researchers assigned treatments). It was not blind, so not double-blind.     Placebos via sham surgery   Could the stent study have used a placebo? What would it look like?    A sham surgery—performing surgical steps without implanting the stent—could serve as a placebo, though with ethical considerations.      Exercises   Light and exam performance   Design: compare lighting types on exam performance, blocking by sex. Identify response, explanatory variable (with levels), and blocking variable.     Vitamin supplements   Study with placebo, 1g, 3g vitamin C, 3g vitamin C plus additives; appearance identical. Nurses know assignments; assessors are blinded. No significant differences found.   Experiment or observational?  Explanatory and response variables?  Were patients blinded?  Was it double-blind?  Does non-adherence introduce confounding?      Light, noise, and exam performance   Design tests light (3 levels) and noise (3 levels) on exam performance, blocking by sex.   What type of study?  How many factors? List factors and levels.  Role of sex variable?      Music and learning   Outline an experiment comparing study with no music, instrumental music, or music with lyrics.     Soda preference   Outline an experiment to compare regular Coke vs. Diet Coke preference.     Exercise and mental health   A stratified randomized study assigns half of each age group (18-30, 31-40, 41-55) to exercise twice a week and half to no exercise; mental health measured pre\/post.   Study type?  Treatment and control groups?  Is blocking used? What variable?  Is blinding used?  Can results establish causation and generalize? Explain.  Any reservations about funding this study?      "
},
{
  "id": "fig-blocking",
  "level": "2",
  "url": "sec-experiments.html#fig-blocking",
  "type": "Figure",
  "number": "1.4.1",
  "title": "",
  "body": " Blocking on patient risk   Patients split into low\/high risk blocks, then randomized within blocks to control and treatment.   "
},
{
  "id": "gp-stents-blinding",
  "level": "2",
  "url": "sec-experiments.html#gp-stents-blinding",
  "type": "Checkpoint",
  "number": "1.4.2",
  "title": "Blinding in the stent study.",
  "body": " Blinding in the stent study   Was the stent study an experiment? Was it blind or double-blind?    It was an experiment (researchers assigned treatments). It was not blind, so not double-blind.   "
},
{
  "id": "gp-sham-surgery",
  "level": "2",
  "url": "sec-experiments.html#gp-sham-surgery",
  "type": "Checkpoint",
  "number": "1.4.3",
  "title": "Placebos via sham surgery.",
  "body": " Placebos via sham surgery   Could the stent study have used a placebo? What would it look like?    A sham surgery—performing surgical steps without implanting the stent—could serve as a placebo, though with ethical considerations.   "
},
{
  "id": "ex-light-exam-performance",
  "level": "2",
  "url": "sec-experiments.html#ex-light-exam-performance",
  "type": "Exercise",
  "number": "1.4.3.1",
  "title": "Light and exam performance.",
  "body": " Light and exam performance   Design: compare lighting types on exam performance, blocking by sex. Identify response, explanatory variable (with levels), and blocking variable.   "
},
{
  "id": "ex-vitamin-supplement",
  "level": "2",
  "url": "sec-experiments.html#ex-vitamin-supplement",
  "type": "Exercise",
  "number": "1.4.3.2",
  "title": "Vitamin supplements.",
  "body": " Vitamin supplements   Study with placebo, 1g, 3g vitamin C, 3g vitamin C plus additives; appearance identical. Nurses know assignments; assessors are blinded. No significant differences found.   Experiment or observational?  Explanatory and response variables?  Were patients blinded?  Was it double-blind?  Does non-adherence introduce confounding?    "
},
{
  "id": "ex-light-noise-exam",
  "level": "2",
  "url": "sec-experiments.html#ex-light-noise-exam",
  "type": "Exercise",
  "number": "1.4.3.3",
  "title": "Light, noise, and exam performance.",
  "body": " Light, noise, and exam performance   Design tests light (3 levels) and noise (3 levels) on exam performance, blocking by sex.   What type of study?  How many factors? List factors and levels.  Role of sex variable?    "
},
{
  "id": "ex-music-learning",
  "level": "2",
  "url": "sec-experiments.html#ex-music-learning",
  "type": "Exercise",
  "number": "1.4.3.4",
  "title": "Music and learning.",
  "body": " Music and learning   Outline an experiment comparing study with no music, instrumental music, or music with lyrics.   "
},
{
  "id": "ex-soda-preference",
  "level": "2",
  "url": "sec-experiments.html#ex-soda-preference",
  "type": "Exercise",
  "number": "1.4.3.5",
  "title": "Soda preference.",
  "body": " Soda preference   Outline an experiment to compare regular Coke vs. Diet Coke preference.   "
},
{
  "id": "ex-exercise-mental-health",
  "level": "2",
  "url": "sec-experiments.html#ex-exercise-mental-health",
  "type": "Exercise",
  "number": "1.4.3.6",
  "title": "Exercise and mental health.",
  "body": " Exercise and mental health   A stratified randomized study assigns half of each age group (18-30, 31-40, 41-55) to exercise twice a week and half to no exercise; mental health measured pre\/post.   Study type?  Treatment and control groups?  Is blocking used? What variable?  Is blinding used?  Can results establish causation and generalize? Explain.  Any reservations about funding this study?    "
},
{
  "id": "sec-review-exercises",
  "level": "1",
  "url": "sec-review-exercises.html",
  "type": "Section",
  "number": "1.5",
  "title": "Review exercises",
  "body": " Review exercises   Review exercises   Pet names   Seattle pet registry data show proportions of cats and dogs with each name. A scatterplot compares name popularity.   Cat vs. dog name popularity   Scatterplot of name proportions for cats and dogs; includes diagonal x=y line.     Experiment or observational study?  Most common dog and cat names?  Which names are more common for cats than dogs?  Is the relationship positive or negative? Interpret.      Stressed out, Part II   Half of subjects are randomly assigned to a stressful falling-elevator experience; half to no stress. Determine study type and whether causation can be concluded.     Chia seeds and weight loss   38 men and 38 women randomly assigned to chia seeds or placebo for 12 weeks; volunteers. No significant differences found.   Study type?  Experimental and control treatments?  Was blocking used? If so, what variable?  Was blinding used?  Can we make causal statements? Can we generalize?      City council survey   Household survey across diverse neighborhoods. For each sampling plan (simple random; stratified by neighborhood; cluster; multistage; convenience), name the method and discuss pros\/cons.     Flawed reasoning   Identify flaws and improvements in three scenarios: parent questionnaires on work schedule; follow-up survey with attrition; doctor surveying runners about joint problems.     Income and education in US counties   Scatterplot of per capita income vs. percent with bachelor’s degree for US counties.   Income vs. education   Scatterplot of income vs percent with bachelor’s degree for US counties.     Identify explanatory and response variables.  Describe the relationship and any unusual observations.  Can we conclude having a bachelor’s degree increases income?      Eat better, feel better   Randomized study of three interventions to increase fruit\/vegetable intake among university students; only the group given servings showed improved psychological well-being.   Study type?  Explanatory and response variables?  Can results be generalized?  Can results establish causality?  Revise a headline claiming “proof” accordingly.      Screens, teens, and psychological well-being   Large observational diary study of screen time and well-being for teens (n=17,247) with covariates. Concluded little clear evidence of harm.   Study type?  Explanatory variables?  Response variable?  Can results be generalized? Why?  Can results establish causation?      Stanford Open Policing   Summary table shows stops per year, search and arrest rates by county, state, and driver race.   List variables collected per traffic stop.  Classify each variable (numerical\/categorical; continuous\/discrete; ordinal).  For analyzing search rates by race, identify response and explanatory variables.      Space launches   Table shows launch outcomes by agency type (Private, State, Startup) and era (1957-1999, 2000-2018).   Variables collected per launch?  Classify each variable.  For studying success rates across agencies and time, identify response and explanatory variables.      "
},
{
  "id": "ex-pet-names",
  "level": "2",
  "url": "sec-review-exercises.html#ex-pet-names",
  "type": "Exercise",
  "number": "1.5.1",
  "title": "Pet names.",
  "body": " Pet names   Seattle pet registry data show proportions of cats and dogs with each name. A scatterplot compares name popularity.   Cat vs. dog name popularity   Scatterplot of name proportions for cats and dogs; includes diagonal x=y line.     Experiment or observational study?  Most common dog and cat names?  Which names are more common for cats than dogs?  Is the relationship positive or negative? Interpret.    "
},
{
  "id": "ex-stressed-out-part2",
  "level": "2",
  "url": "sec-review-exercises.html#ex-stressed-out-part2",
  "type": "Exercise",
  "number": "1.5.2",
  "title": "Stressed out, Part II.",
  "body": " Stressed out, Part II   Half of subjects are randomly assigned to a stressful falling-elevator experience; half to no stress. Determine study type and whether causation can be concluded.   "
},
{
  "id": "ex-chia-weight-loss",
  "level": "2",
  "url": "sec-review-exercises.html#ex-chia-weight-loss",
  "type": "Exercise",
  "number": "1.5.3",
  "title": "Chia seeds and weight loss.",
  "body": " Chia seeds and weight loss   38 men and 38 women randomly assigned to chia seeds or placebo for 12 weeks; volunteers. No significant differences found.   Study type?  Experimental and control treatments?  Was blocking used? If so, what variable?  Was blinding used?  Can we make causal statements? Can we generalize?    "
},
{
  "id": "ex-city-council-survey",
  "level": "2",
  "url": "sec-review-exercises.html#ex-city-council-survey",
  "type": "Exercise",
  "number": "1.5.4",
  "title": "City council survey.",
  "body": " City council survey   Household survey across diverse neighborhoods. For each sampling plan (simple random; stratified by neighborhood; cluster; multistage; convenience), name the method and discuss pros\/cons.   "
},
{
  "id": "ex-flawed-reasoning",
  "level": "2",
  "url": "sec-review-exercises.html#ex-flawed-reasoning",
  "type": "Exercise",
  "number": "1.5.5",
  "title": "Flawed reasoning.",
  "body": " Flawed reasoning   Identify flaws and improvements in three scenarios: parent questionnaires on work schedule; follow-up survey with attrition; doctor surveying runners about joint problems.   "
},
{
  "id": "ex-income-education-county",
  "level": "2",
  "url": "sec-review-exercises.html#ex-income-education-county",
  "type": "Exercise",
  "number": "1.5.6",
  "title": "Income and education in US counties.",
  "body": " Income and education in US counties   Scatterplot of per capita income vs. percent with bachelor’s degree for US counties.   Income vs. education   Scatterplot of income vs percent with bachelor’s degree for US counties.     Identify explanatory and response variables.  Describe the relationship and any unusual observations.  Can we conclude having a bachelor’s degree increases income?    "
},
{
  "id": "ex-eat-better-feel-better",
  "level": "2",
  "url": "sec-review-exercises.html#ex-eat-better-feel-better",
  "type": "Exercise",
  "number": "1.5.7",
  "title": "Eat better, feel better.",
  "body": " Eat better, feel better   Randomized study of three interventions to increase fruit\/vegetable intake among university students; only the group given servings showed improved psychological well-being.   Study type?  Explanatory and response variables?  Can results be generalized?  Can results establish causality?  Revise a headline claiming “proof” accordingly.    "
},
{
  "id": "ex-screen-time-well-being",
  "level": "2",
  "url": "sec-review-exercises.html#ex-screen-time-well-being",
  "type": "Exercise",
  "number": "1.5.8",
  "title": "Screens, teens, and psychological well-being.",
  "body": " Screens, teens, and psychological well-being   Large observational diary study of screen time and well-being for teens (n=17,247) with covariates. Concluded little clear evidence of harm.   Study type?  Explanatory variables?  Response variable?  Can results be generalized? Why?  Can results establish causation?    "
},
{
  "id": "ex-stanford-open-policing",
  "level": "2",
  "url": "sec-review-exercises.html#ex-stanford-open-policing",
  "type": "Exercise",
  "number": "1.5.9",
  "title": "Stanford Open Policing.",
  "body": " Stanford Open Policing   Summary table shows stops per year, search and arrest rates by county, state, and driver race.   List variables collected per traffic stop.  Classify each variable (numerical\/categorical; continuous\/discrete; ordinal).  For analyzing search rates by race, identify response and explanatory variables.    "
},
{
  "id": "ex-space-launches",
  "level": "2",
  "url": "sec-review-exercises.html#ex-space-launches",
  "type": "Exercise",
  "number": "1.5.10",
  "title": "Space launches.",
  "body": " Space launches   Table shows launch outcomes by agency type (Private, State, Startup) and era (1957-1999, 2000-2018).   Variables collected per launch?  Classify each variable.  For studying success rates across agencies and time, identify response and explanatory variables.    "
},
{
  "id": "sec-numerical-data",
  "level": "1",
  "url": "sec-numerical-data.html",
  "type": "Section",
  "number": "2.1",
  "title": "Examining numerical data",
  "body": " Examining numerical data   In this section we will explore techniques for summarizing numerical variables. For example, consider the loan_amount variable from the loan50 data set, which represents the loan size for all 50 loans in the data set. This variable is numerical since we can sensibly discuss the numerical difference of the size of two loans. On the other hand, area codes and zip codes are not numerical, but rather they are categorical variables.  Throughout this section and the next, we will apply these methods using the loan50 and county data sets, which were introduced in . If you'd like to review the variables from either data set, see the relevant data description figures.     Scatterplots for paired data  A scatterplot provides a case-by-case view of data for two numerical variables. In a previous figure, a scatterplot was used to examine the homeownership rate against the fraction of housing units that were part of multi-unit properties (e.g. apartments) in the county data set. Another scatterplot is shown in , comparing the total income of a borrower ( total_income ) and the amount they borrowed ( loan_amount ) for the loan50 data set. In any scatterplot, each point represents a single case. Since there are 50 cases in loan50 , there are 50 points in .   A scatterplot of total_income versus loan_amount for the loan50 data set   A scatterplot is shown with \"Total Income\" along the horizontal axis (range from $0 to $325,000) and \"Loan Amount\" along the vertical axis (range from $0 to $40,000). The points lie in a range from $2,000 to $33,000 in loan amount when total income is smaller than $150,000 (representing most of the points). The range of loan amounts is higher when total income is greater than $175,000, with the range of observations being about $15,000 to $40,000.    Looking at , we see that there are many borrowers with an income below $100,000 on the left side of the graph, while there are a handful of borrowers with income above $250,000.   Nonlinear relationships in scatterplots    shows a plot of median household income against the poverty rate for 3,142 counties. What can be said about the relationship between these variables?    The relationship is evidently nonlinear , as highlighted by the dashed line. This is different from previous scatterplots we've seen, which show relationships that do not show much, if any, curvature in the trend.     A scatterplot of the median household income against the poverty rate for the county data set   A scatterplot of a few thousand points is shown with \"Poverty Rate\" along the horizontal axis (range from 0% to 55%) and \"Median Household Income\" along the vertical axis (range from $0 to $130,000). A curved trend line is overlaid on the points starting higher on the left and decreasing as it moves right, but it starts flattening the further right it goes. Below 10% poverty rate, points range from about $40,000 to $130,000. Between 10% to 20%, the range is lower at about $25,000 to close to $100,000. For 20% to 30%, the points range from about $22,000 to just over $60,000. For 30% to 50%, the trend is mostly flat with values ranging from about $20,000 to $50,000.     Value of scatterplots   What do scatterplots reveal about the data, and how are they useful?    Answers may vary. Scatterplots are helpful in quickly spotting associations relating variables, whether those associations come in the form of simple trends or whether those relationships are more complex.     Horseshoe-shaped associations   Describe two variables that would have a horseshoe-shaped association in a scatterplot ( or ).    Consider the case where your vertical axis represents something \"good\" and your horizontal axis represents something that is only good in moderation. Health and water consumption fit this description: we require some water to survive, but consume too much and it becomes toxic and can kill a person.       Dot plots and the mean  Sometimes two variables are one too many: only one variable may be of interest. In these cases, a dot plot provides the most basic of displays. A dot plot is a one-variable scatterplot; an example using the interest rate of 50 loans is shown in . A stacked version of this dot plot is shown in .   A dot plot of interest_rate for the loan50 data set   A dot plot is shown for the variable \"Interest Rate\". There is a horizontal axis ranging from about 5% to a bit over 25%, and then several points are shown horizontally above the axis, scattered over the range. There is a higher density of points between 5% to 11%, with a moderate density of points from 12% to about 20%, and then a few more observations at about 22%, 25%, and 26%. A red triangle is also shown at approximately 12%.     A stacked dot plot of interest_rate for the loan50 data set   A stacked dot plot is shown for the variable \"Interest Rate\". There is a horizontal axis ranging from about 5% to a bit over 25%, and then several stacks of points are shown at values 5%, 6%, 7%, and so on. There are 3 points stacked at 5%, 3 points stacked at 6%, 5 at 7%, 4 at 8%, 5 at 9%, 8 at 10%, 5 at 11%, 1 at 11%, 3 at 12%, then 1 each at 14%, 15%, and 16%, 3 at 17%, 2 at 18%, and then 1 each at 19%, 20%, 21%, 25%, and 26%. A red triangle is also shown at approximately 12%. The rates have been rounded to the nearest percent in this plot.    The mean , often called the average , is a common way to measure the center of a distribution of data. To compute the mean interest rate, we add up all the interest rates and divide by the number of observations: The sample mean is often labeled . The letter is being used as a generic placeholder for the variable of interest, interest_rate , and the bar over the communicates we're looking at the average interest rate, which for these 50 loans was 11.57%. It is useful to think of the mean as the balancing point of the distribution, and it's shown as a triangle in and .   Mean  The sample mean can be computed as the sum of the observed values divided by the number of observations: where , , , represent the observed values.    Understanding mean notation   Examine the equation for the mean. What does correspond to? And ? Can you infer a general meaning to what might represent?     corresponds to the interest rate for the first loan in the sample (10.90%), to the second loan's interest rate (9.92%), and corresponds to the interest rate for the loan in the data set. For example, if , then we're examining , which refers to the fourth observation in the data set.     Sample size   What was in this sample of loans?    The sample size was .    The loan50 data set represents a sample from a larger population of loans made through Lending Club. We could compute a mean for this population in the same way as the sample mean. However, the population mean has a special label: . The symbol is the Greek letter mu and represents the average of all observations in the population. Sometimes a subscript, such as , is used to represent which variable the population mean refers to, e.g. . Often times it is too expensive to measure the population mean precisely, so we often estimate using the sample mean, .   Estimating a population mean   The average interest rate across all loans in the population can be estimated using the sample data. Based on the sample of 50 loans, what would be a reasonable estimate of , the mean interest rate for all loans in the full data set?    The sample mean, 11.57%, provides a rough estimate of . While it's not perfect, this is our single best guess of the average interest rate of all the loans in the population under study. In later chapters, we will develop tools to characterize the accuracy of point estimates like the sample mean. As you might have guessed, point estimates based on larger samples tend to be more accurate than those based on smaller samples.     Using the mean for comparisons   The mean is useful because it allows us to rescale or standardize a metric into something more easily interpretable and comparable. Provide 2 examples where the mean is useful for making comparisons.       We would like to understand if a new drug is more effective at treating asthma attacks than the standard drug. A trial of 1500 adults is set up, where 500 receive the new drug, and 1000 receive a standard drug in the control group. The results show 200 asthma attacks in the new drug group and 300 in the standard drug group. Comparing the raw counts of 200 to 300 asthma attacks would make it appear that the new drug is better, but this is an artifact of the imbalanced group sizes. Instead, we should look at the average number of asthma attacks per patient in each group: New drug: , Standard drug: . The standard drug has a lower average number of asthma attacks per patient than the average in the treatment group.    Emilio opened a food truck last year where he sells burritos, and his business has stabilized over the last 3 months. Over that 3 month period, he has made $11,000 while working 625 hours. Emilio's average hourly earnings provides a useful statistic for evaluating whether his venture is, at least from a financial perspective, worth it: . By knowing his average hourly wage, Emilio now has put his earnings into a standard unit that is easier to compare with many other jobs that he might consider.        Weighted means   Suppose we want to compute the average income per person in the US. To do so, we might first think to take the mean of the per capita incomes across the 3,142 counties in the county data set. What would be a better approach?    The county data set is special in that each county actually represents many individual people. If we were to simply average across the income variable, we would be treating counties with 5,000 and 5,000,000 residents equally in the calculations. Instead, we should compute the total income for each county, add up all the counties' totals, and then divide by the number of people in all the counties. If we completed these steps with the county data, we would find that the per capita income for the US is $30,861. Had we computed the simple mean of per capita income across counties, the result would have been just $26,093! This example used what is called a weighted mean . For more information on this topic, check out online supplements regarding weighted means.       Histograms and shape  Dot plots show the exact value for each observation. This is useful for small data sets, but they can become hard to read with larger samples. Rather than showing the value of each observation, we prefer to think of the value as belonging to a bin . For example, in the loan50 data set, we created a table of counts for the number of loans with interest rates between 5.0% and 7.5%, then the number of loans with rates between 7.5% and 10.0%, and so on. Observations that fall on the boundary of a bin (e.g. 10.00%) are allocated to the lower bin. This tabulation is shown in . These binned counts are plotted as bars in into what is called a histogram , which resembles a more heavily binned version of the stacked dot plot.   Counts for the binned interest_rate data    Interest Rate  5.0%-7.5%  7.5%-10.0%  10.0%-12.5%  12.5%-15.0%   25.0%-27.5%    Count  11  15  8  4   1      A histogram of interest_rate . This distribution is strongly skewed to the right.   A histogram with a horizontal axis of \"Interest Rate\" and a vertical axis showing the frequency of occurrence of different bins of interest rate. The first bin is from 5%-7.5% with a frequency (count) of 11 observations, 7.5%-10% has a frequency of 15, 10%-12.5% has 8, 12.5%-15% has 4, 15%-17.5% has 5, 17.5%-20% has 4, and then the 20%-22.5%, 22.5%-25%, and 25%-27.5% bins each have a frequency of 1.    Histograms provide a view of the data density . Higher bars represent where the data are relatively more common. For instance, there are many more loans with rates between 5% and 10% than loans with rates between 20% and 25% in the data set. The bars make it easy to see how the density of the data changes relative to the interest rate.  Histograms are especially convenient for understanding the shape of the data distribution. suggests that most loans have rates under 15%, while only a handful of loans have rates above 20%. When data trail off to the right in this way and has a longer right tail, the shape is said to be right skewed . Other ways to describe data that are right skewed: skewed to the right, skewed to the high end, or skewed to the positive end.   Data sets with the reverse characteristic a long, thinner tail to the left are said to be left skewed . We also say that such a distribution has a long left tail. Data sets that show roughly equal trailing off in both directions are called symmetric .   Long tails to identify skew  When data trail off in one direction, the distribution has a long tail . If a distribution has a long left tail, it is left skewed. If a distribution has a long right tail, it is right skewed.    Identifying skew   Take a look at the dot plots in earlier figures. Can you see the skew in the data? Is it easier to see the skew in this histogram or the dot plots?    The skew is visible in all three plots, though the flat dot plot is the least useful. The stacked dot plot and histogram are helpful visualizations for identifying skew.     Histogram limitations   Besides the mean (since it was labeled), what can you see in the dot plots that you cannot see in the histogram?    The interest rates for individual loans.    In addition to looking at whether a distribution is skewed or symmetric, histograms can be used to identify modes. A mode is represented by a prominent peak in the distribution. There is only one prominent peak in the histogram of loan_amount .  A definition of mode sometimes taught in math classes is the value with the most occurrences in the data set. However, for many real-world data sets, it is common to have no observations with the same value in a data set, making this definition impractical in data analysis.   shows histograms that have one, two, or three prominent peaks. Such distributions are called unimodal , bimodal , and multimodal , respectively. Any distribution with more than 2 prominent peaks is called multimodal. Notice that there was one prominent peak in the unimodal distribution with a second less prominent peak that was not counted since it only differs from its neighboring bins by a few observations.   Distributions showing different numbers of modes   Three histograms are shown. The first histogram shows bins of width 2 between 0 to 18 (this is along the horizontal axis), and the frequencies are 3, 16, 16, 7, 11, 6, 4, 1, and 1. The second histogram, representing a different data set, shows bins of width 2 with values ranging from 0 to 20, where the bin counts in order are 2, 9, 5, 2, 2, 2, 2, 10, 19, and 9. The third histogram, representing yet another data set, shows bins of width 2 with values ranging from 0 to 22, where the bin counts in order are 10, 8, 4, 3, 1, 20, 15, 3, 15, 18, and 5.     Identifying modality    reveals only one prominent mode in the interest rate. Is the distribution unimodal, bimodal, or multimodal?    Unimodal. Remember that uni stands for 1 (think uni cycles). Similarly, bi stands for 2 (think bi cycles). We're hoping a multicycle will be invented to complete this analogy.     Expected modes in height data   Height measurements of young students and adult teachers at a K-3 elementary school were taken. How many modes would you expect in this height data set?    There might be two height groups visible in the data set: one of the students and one of the adults. That is, the data are probably bimodal.    Looking for modes isn't about finding a clear and correct answer about the number of modes in a distribution, which is why prominent is not rigorously defined in this book. The most important part of this examination is to better understand your data.     Variance and standard deviation  The mean was introduced as a method to describe the center of a data set, and variability in the data is also important. Here, we introduce two measures of variability: the variance and the standard deviation. Both of these are very useful in data analysis, even though their formulas are a bit tedious to calculate by hand. The standard deviation is the easier of the two to comprehend, and it roughly describes how far away the typical observation is from the mean.  We call the distance of an observation from its mean its deviation . Below are the deviations for the 1 , 2 , 3 , and 50 observations in the interest_rate variable: If we square these deviations and then take an average, the result is equal to the sample variance , denoted by : We divide by , rather than dividing by , when computing a sample's variance; there's some mathematical nuance here, but the end result is that doing this makes this statistic slightly more reliable and useful.  Notice that squaring the deviations does two things. First, it makes large values relatively much larger, seen by comparing , , , and . Second, it gets rid of any negative signs.  The standard deviation is defined as the square root of the variance: While often omitted, a subscript of may be added to the variance and standard deviation, i.e. and , if it is useful as a reminder that these are the variance and standard deviation of the observations represented by , , ..., .   Variance and standard deviation  The variance is the average squared distance from the mean. The standard deviation is the square root of the variance. The standard deviation is useful when considering how far the data are distributed from the mean.  The standard deviation represents the typical deviation of observations from the mean. Usually about 70% of the data will be within one standard deviation of the mean and about 95% will be within two standard deviations. However, these percentages are not strict rules.   Like the mean, the population values for variance and standard deviation have special symbols: for the variance and for the standard deviation. The symbol is the Greek letter sigma .   Standard deviations in the interest rate distribution   A dot plot of 50 observations is shown with values ranging from about 5% to 26%. The data set is the same as that shown in earlier dot plots, where the data is more dense from 5% to about 11%, has medium density from about 12% to 20%, and then there are a few more values scattered in the 20% to 27% range. Shading is shown to represent the regions within 1, 2, and 3 standard deviations. The region within 1 standard deviation is from 6.5% to 16.7%, representing 34 of the 50 data points. The region within 2 standard deviations runs left off of the chart (but would be from about 1.4%) to 21.8% and contains 48 of the 50 data points. The third standard deviation is shown to extend out to 26.9%, and all 50 observations are contained within the 3 standard deviations.    For the interest_rate variable, 34 of the 50 loans (68%) had interest rates within 1 standard deviation of the mean, and 48 of the 50 loans (96%) had rates within 2 standard deviations. Usually about 70% of the data are within 1 standard deviation of the mean and 95% within 2 standard deviations, though this is far from a hard rule.   Three very different population distributions with the same mean and standard deviation   Three histograms are shown (upper, middle, lower). Each distribution also shows shading -- dark gray between -1 to 1, lighter gray between -2 and 2, and light gray between -3 and 3, and then very light gray further out. The upper plot shows only two bins with non-zero values and of equal height at -1 and 1. The middle plot shows a bell-shaped curve, where most of the higher bin values are between -1 and 1, middling heights are between -2 to -1 and 1 to 2, and the data trails off in each direction with ever-smaller values further out. The lower histogram shows no data below about -1.6, a quick increase to a peak at about -0.7 and then a slow decline of values to about half the max height at 1 and further trails off to ever smaller values to a horizontal location of 3 and beyond.     Importance of shape description   The concept of shape of a distribution was introduced earlier. A good description of the shape of a distribution should include modality and whether the distribution is symmetric or skewed to one side. Using as an example, explain why such a description is important.     shows three distributions that look quite different, but all have the same mean, variance, and standard deviation. Using modality, we can distinguish between the first plot (bimodal) and the last two (unimodal). Using skewness, we can distinguish between the last plot (right skewed) and the first two. While a picture, like a histogram, tells a more complete story, we can use modality and shape (symmetry\/skew) to characterize basic information about a distribution.     Describing a distribution   Describe the distribution of the interest_rate variable using the histogram in . The description should incorporate the center, variability, and shape of the distribution, and it should also be placed in context. Also note any especially unusual cases.    The distribution of interest rates is unimodal and skewed to the high end. Many of the rates fall near the mean at 11.57%, and most fall within one standard deviation (5.05%) of the mean. There are a few exceptionally large interest rates in the sample that are above 20%.    In practice, the variance and standard deviation are sometimes used as a means to an end, where the \"end\" is being able to accurately estimate the uncertainty associated with a sample statistic. For example, in later chapters the standard deviation is used in calculations that help us understand how much a sample mean varies from one sample to the next.     Box plots, quartiles, and the median  A box plot summarizes a data set using five statistics while also plotting unusual observations. provides a vertical dot plot alongside a box plot of the interest_rate variable from the loan50 data set.   A vertical dot plot next to a labeled box plot for the interest rates of the 50 loans   What is shown is a dot plot adjacent to what is called a \"box plot\". The data values are the same ones used in past dot plots, where the data shows greatest density from 5% to 11%, moderate density from 12% to 20%, and then a few more values at about 22%, 25%, and 26%. The box plot adjacent to the data shows a box that would encapsulate the middle 50% of the data, from about 8% to 13%. The median is also annotated with a line through the center of the box. From here, the data extend out with \"whiskers\" up to a distance up to 1.5 times IQR below and above the box to capture as much data as possible. There are two observations that extend beyond this range at 25% and 26%.    The first step in building a box plot is drawing a dark line denoting the median , which splits the data in half. shows 50% of the data falling below the median and other 50% falling above the median. There are 50 loans in the data set (an even number) so the data are perfectly split into two groups of 25. We take the median in this case to be the average of the two observations closest to the 50 percentile, which happen to be the same value in this data set: . When there are an odd number of observations, there will be exactly one observation that splits the data into two halves, and in such a case that observation is the median (no average needed).   Median: the number in the middle  If the data are ordered from smallest to largest, the median is the observation right in the middle. If there are an even number of observations, there will be two values in the middle, and the median is taken as their average.   The second step in building a box plot is drawing a rectangle to represent the middle 50% of the data. The total length of the box, shown vertically in , is called the interquartile range ( IQR , for short). It, like the standard deviation, is a measure of variability in data. The more variable the data, the larger the standard deviation and IQR tend to be. The two boundaries of the box are called the first quartile (the 25 percentile, i.e. 25% of the data fall below this value) and the third quartile (the 75 percentile), and these are often labeled and , respectively.   Interquartile range (IQR)  The IQR is the length of the box in a box plot. It is computed as where and are the 25 and 75 percentiles.    Data between quartiles   What percent of the data fall between and the median? What percent is between the median and ?    Since and capture the middle 50% of the data and the median splits the data in the middle, 25% of the data fall between and the median, and another 25% falls between the median and .    Extending out from the box, the whiskers attempt to capture the data outside of the box. However, their reach is never allowed to be more than . They capture everything within this reach. In , the upper whisker does not extend to the last two points, which is beyond , and so it extends only to the last point below this limit. The lower whisker stops at the lowest value, 5.31%, since there is no additional data to reach; the lower whisker's limit is not shown in the figure because the plot does not extend down to . In a sense, the box is like the body of the box plot and the whiskers are like its arms trying to reach the rest of the data.  Any observation lying beyond the whiskers is labeled with a dot. The purpose of labeling these points instead of extending the whiskers to the minimum and maximum observed values is to help identify any observations that appear to be unusually distant from the rest of the data. Unusually distant observations are called outliers . In this case, it would be reasonable to classify the interest rates of 24.85% and 26.30% as outliers since they are numerically distant from most of the data.   Outliers are extreme  An outlier is an observation that appears extreme relative to the rest of the data.  Examining data for outliers serves many useful purposes, including:  Identifying strong skew in the distribution.  Identifying possible data collection or data entry errors.  Providing insight into interesting properties of the data.      Estimating quartiles from a box plot   Using , estimate the following values for interest_rate in the loan50 data set: (a) , (b) , and (c) IQR.    These visual estimates will vary a little from one person to the next: 8%, 14%, 6%. (The true values: , , .)       Robust statistics  How are the sample statistics of the interest_rate data set affected by the observation, 26.3%? What would have happened if this loan had instead been only 15%? What would happen to these summary statistics if the observation at 26.3% had been even larger, say 35%? These scenarios are plotted alongside the original data in , and sample statistics are computed under each scenario in .   Dot plots of the original interest rate data and two modified data sets   Three dot plots are shown in the same plot. The largest observation from the original data set (discussed in previous dot plots) at about 26% is moved to 15% in the second dot plot and instead to 35% in the third dot plot.     Comparison of statistics under different scenarios    Scenario  Robust  Not Robust     Median  IQR      Original interest_rate data  9.93%  5.76%  11.57%  5.05%    Move 26.3% 15%  9.93%  5.76%  11.34%  4.61%    Move 26.3% 35%  9.93%  5.76%  11.74%  5.68%      Comparing robustness of statistics   (a) Which is more affected by extreme observations, the mean or median? may be helpful. (b) Is the standard deviation or IQR more affected by extreme observations?    (a) Mean is affected more. (b) Standard deviation is affected more. Complete explanations are provided below.    The median and IQR are called robust statistics because extreme observations have little effect on their values: moving the most extreme value generally has little influence on these statistics. On the other hand, the mean and standard deviation are more heavily influenced by changes in extreme observations, which can be important in some situations.   Stability of robust statistics   The median and IQR did not change under the three scenarios in . Why might this be the case?    The median and IQR are only sensitive to numbers near , the median, and . Since values in these regions are stable in the three data sets, the median and IQR estimates are also stable.     Choosing between mean and median   The distribution of loan amounts in the loan50 data set is right skewed, with a few large loans lingering out into the right tail. If you were wanting to understand the typical loan size, should you be more interested in the mean or median?    Answers will vary! If we're looking to simply understand what a typical individual loan looks like, the median is probably more useful. However, if the goal is to understand something that scales well, such as the total amount of money we might need to have on hand if we were to offer 1,000 loans, then the mean would be more useful.       Transforming data (special topic)  When data are very strongly skewed, we sometimes transform them so they are easier to model.   County population distributions: (a) original data showing extreme skew, (b) log-transformed data   Two histograms are shown side by side. The first histogram has a horizontal axis of Population with possible data ranging from 0 to about 10 million. The first bar representing 0 to 400,000 shows a frequency (bar height) of about 3000, the second bar for 400,000 to 800,000 shows about frequency of about 100. All other bars are sufficiently small that they are virtually indistinguishable from 0. The second histogram shows the horizontal axis represents log-base-10 of the population. The horizontal axis runs from about 2 to 7, and frequency (bin\/box height) peaks at a little over 1000. The data show an approximate bell shape, peaking in the middle between 4 to 4.5, then showing lower frequencies the further out from 4-4.5 with frequencies being close to zero outside of 2.5 to 6.5.     Issues with extreme skew   Consider the histogram of county populations shown in (left panel), which shows extreme skew. What isn't useful about this plot?    Nearly all of the data fall into the left-most bin, and the extreme skew obscures many of the potentially interesting details in the data.    There are some standard transformations that may be useful for strongly right skewed data where much of the data is positive but clustered near zero. A transformation is a rescaling of the data using a function. For instance, a plot of the logarithm (base 10) of county populations results in the new histogram in (right panel). This data is symmetric, and any potential outliers appear much less extreme than in the original data set. By reigning in the outliers and extreme skew, transformations like this often make it easier to build statistical models against the data.  Transformations can also be applied to one or both variables in a scatterplot. A scatterplot of the population change from 2010 to 2017 against the population in 2010 is shown in . In the first scatterplot, it's hard to decipher any interesting patterns because the population variable is so strongly skewed. However, if we apply a log transformation to the population variable, as shown in the second panel, a positive association between the variables is revealed.   Scatterplots of population change vs. population: (a) original data, (b) log-transformed population   Two scatterplots are shown side by side. The first scatterplot has population on the horizontal axis (ranging from 0 to 10 million) and population change as a percent on the vertical axis (ranging from -35% to positive 40%). The data is particularly concentrated on the left of the graph below 1 million. There is no discernible trend in the data. The second scatterplot has log-base-10 of the population on the horizontal axis (ranging from 2 to 7) and population change as a percent on the vertical axis. The data is well distributed and shows a cloud of points with a slight upward trend.    Transformations other than the logarithm can be useful, too. For instance, the square root and inverse are commonly used by data scientists. Common goals in transforming data are to see the data structure differently, reduce skew, assist in modeling, or straighten a nonlinear relationship in a scatterplot.     Mapping data (special topic)  The county data set offers many numerical variables that we could plot using dot plots, scatterplots, or box plots, but these miss the true nature of the data. Rather, when we encounter geographic data, we should create an intensity map , where colors are used to show higher and lower values of a variable. Figures throughout this book demonstrate a variety of intensity maps for county-level data including poverty rate ( poverty ), unemployment rate ( unemployment_rate ), homeownership rate ( homeownership ), and median household income ( median_hh_income ). The color key indicates which colors correspond to which values. The intensity maps are not generally very helpful for getting precise values in any given county, but they are very helpful for seeing geographic trends and generating interesting research questions or hypotheses.   Features in poverty and unemployment intensity maps   What interesting features are evident in the poverty and unemployment_rate intensity maps?    Poverty rates are evidently higher in a few locations. Notably, the deep south shows higher poverty rates, as does much of Arizona and New Mexico. High poverty rates are evident in the Mississippi flood plains a little north of New Orleans and also in a large section of Kentucky.  The unemployment rate follows similar trends, and we can see correspondence between the two variables. In fact, it makes sense for higher rates of unemployment to be closely related to poverty rates. One observation that stands out when comparing the two maps: the poverty rate is much higher than the unemployment rate, meaning while many people may be working, they are not making enough to break out of poverty.     Features in median household income map   What interesting features are evident in the median_hh_income intensity map?    Note: answers will vary. There is some correspondence between high earning and metropolitan areas, where we can see darker spots (higher median household income), though there are several exceptions. You might look for large cities you are familiar with and try to spot them on the map as dark spots.      "
},
{
  "id": "subsec-scatterplots-2",
  "level": "2",
  "url": "sec-numerical-data.html#subsec-scatterplots-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scatterplot "
},
{
  "id": "fig-loan50-amt-vs-income",
  "level": "2",
  "url": "sec-numerical-data.html#fig-loan50-amt-vs-income",
  "type": "Figure",
  "number": "2.1.1",
  "title": "",
  "body": " A scatterplot of total_income versus loan_amount for the loan50 data set   A scatterplot is shown with \"Total Income\" along the horizontal axis (range from $0 to $325,000) and \"Loan Amount\" along the vertical axis (range from $0 to $40,000). The points lie in a range from $2,000 to $33,000 in loan amount when total income is smaller than $150,000 (representing most of the points). The range of loan amounts is higher when total income is greater than $175,000, with the range of observations being about $15,000 to $40,000.   "
},
{
  "id": "ex-nonlinear-relationship",
  "level": "2",
  "url": "sec-numerical-data.html#ex-nonlinear-relationship",
  "type": "Example",
  "number": "2.1.2",
  "title": "Nonlinear relationships in scatterplots.",
  "body": " Nonlinear relationships in scatterplots    shows a plot of median household income against the poverty rate for 3,142 counties. What can be said about the relationship between these variables?    The relationship is evidently nonlinear , as highlighted by the dashed line. This is different from previous scatterplots we've seen, which show relationships that do not show much, if any, curvature in the trend.   "
},
{
  "id": "fig-median-income-poverty",
  "level": "2",
  "url": "sec-numerical-data.html#fig-median-income-poverty",
  "type": "Figure",
  "number": "2.1.3",
  "title": "",
  "body": " A scatterplot of the median household income against the poverty rate for the county data set   A scatterplot of a few thousand points is shown with \"Poverty Rate\" along the horizontal axis (range from 0% to 55%) and \"Median Household Income\" along the vertical axis (range from $0 to $130,000). A curved trend line is overlaid on the points starting higher on the left and decreasing as it moves right, but it starts flattening the further right it goes. Below 10% poverty rate, points range from about $40,000 to $130,000. Between 10% to 20%, the range is lower at about $25,000 to close to $100,000. For 20% to 30%, the points range from about $22,000 to just over $60,000. For 30% to 50%, the trend is mostly flat with values ranging from about $20,000 to $50,000.   "
},
{
  "id": "ex-scatterplot-usefulness",
  "level": "2",
  "url": "sec-numerical-data.html#ex-scatterplot-usefulness",
  "type": "Checkpoint",
  "number": "2.1.4",
  "title": "Value of scatterplots.",
  "body": " Value of scatterplots   What do scatterplots reveal about the data, and how are they useful?    Answers may vary. Scatterplots are helpful in quickly spotting associations relating variables, whether those associations come in the form of simple trends or whether those relationships are more complex.   "
},
{
  "id": "ex-horseshoe-association",
  "level": "2",
  "url": "sec-numerical-data.html#ex-horseshoe-association",
  "type": "Checkpoint",
  "number": "2.1.5",
  "title": "Horseshoe-shaped associations.",
  "body": " Horseshoe-shaped associations   Describe two variables that would have a horseshoe-shaped association in a scatterplot ( or ).    Consider the case where your vertical axis represents something \"good\" and your horizontal axis represents something that is only good in moderation. Health and water consumption fit this description: we require some water to survive, but consume too much and it becomes toxic and can kill a person.   "
},
{
  "id": "subsec-dot-plots-mean-2",
  "level": "2",
  "url": "sec-numerical-data.html#subsec-dot-plots-mean-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dot plot "
},
{
  "id": "fig-loan-int-rate-dot-plot",
  "level": "2",
  "url": "sec-numerical-data.html#fig-loan-int-rate-dot-plot",
  "type": "Figure",
  "number": "2.1.6",
  "title": "",
  "body": " A dot plot of interest_rate for the loan50 data set   A dot plot is shown for the variable \"Interest Rate\". There is a horizontal axis ranging from about 5% to a bit over 25%, and then several points are shown horizontally above the axis, scattered over the range. There is a higher density of points between 5% to 11%, with a moderate density of points from 12% to about 20%, and then a few more observations at about 22%, 25%, and 26%. A red triangle is also shown at approximately 12%.   "
},
{
  "id": "fig-loan-int-rate-dot-plot-stacked",
  "level": "2",
  "url": "sec-numerical-data.html#fig-loan-int-rate-dot-plot-stacked",
  "type": "Figure",
  "number": "2.1.7",
  "title": "",
  "body": " A stacked dot plot of interest_rate for the loan50 data set   A stacked dot plot is shown for the variable \"Interest Rate\". There is a horizontal axis ranging from about 5% to a bit over 25%, and then several stacks of points are shown at values 5%, 6%, 7%, and so on. There are 3 points stacked at 5%, 3 points stacked at 6%, 5 at 7%, 4 at 8%, 5 at 9%, 8 at 10%, 5 at 11%, 1 at 11%, 3 at 12%, then 1 each at 14%, 15%, and 16%, 3 at 17%, 2 at 18%, and then 1 each at 19%, 20%, 21%, 25%, and 26%. A red triangle is also shown at approximately 12%. The rates have been rounded to the nearest percent in this plot.   "
},
{
  "id": "subsec-dot-plots-mean-5",
  "level": "2",
  "url": "sec-numerical-data.html#subsec-dot-plots-mean-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mean average distribution "
},
{
  "id": "ex-mean-notation",
  "level": "2",
  "url": "sec-numerical-data.html#ex-mean-notation",
  "type": "Checkpoint",
  "number": "2.1.8",
  "title": "Understanding mean notation.",
  "body": " Understanding mean notation   Examine the equation for the mean. What does correspond to? And ? Can you infer a general meaning to what might represent?     corresponds to the interest rate for the first loan in the sample (10.90%), to the second loan's interest rate (9.92%), and corresponds to the interest rate for the loan in the data set. For example, if , then we're examining , which refers to the fourth observation in the data set.   "
},
{
  "id": "ex-sample-size-n",
  "level": "2",
  "url": "sec-numerical-data.html#ex-sample-size-n",
  "type": "Checkpoint",
  "number": "2.1.9",
  "title": "Sample size.",
  "body": " Sample size   What was in this sample of loans?    The sample size was .   "
},
{
  "id": "ex-estimating-population-mean",
  "level": "2",
  "url": "sec-numerical-data.html#ex-estimating-population-mean",
  "type": "Example",
  "number": "2.1.10",
  "title": "Estimating a population mean.",
  "body": " Estimating a population mean   The average interest rate across all loans in the population can be estimated using the sample data. Based on the sample of 50 loans, what would be a reasonable estimate of , the mean interest rate for all loans in the full data set?    The sample mean, 11.57%, provides a rough estimate of . While it's not perfect, this is our single best guess of the average interest rate of all the loans in the population under study. In later chapters, we will develop tools to characterize the accuracy of point estimates like the sample mean. As you might have guessed, point estimates based on larger samples tend to be more accurate than those based on smaller samples.   "
},
{
  "id": "ex-mean-for-comparison",
  "level": "2",
  "url": "sec-numerical-data.html#ex-mean-for-comparison",
  "type": "Example",
  "number": "2.1.11",
  "title": "Using the mean for comparisons.",
  "body": " Using the mean for comparisons   The mean is useful because it allows us to rescale or standardize a metric into something more easily interpretable and comparable. Provide 2 examples where the mean is useful for making comparisons.       We would like to understand if a new drug is more effective at treating asthma attacks than the standard drug. A trial of 1500 adults is set up, where 500 receive the new drug, and 1000 receive a standard drug in the control group. The results show 200 asthma attacks in the new drug group and 300 in the standard drug group. Comparing the raw counts of 200 to 300 asthma attacks would make it appear that the new drug is better, but this is an artifact of the imbalanced group sizes. Instead, we should look at the average number of asthma attacks per patient in each group: New drug: , Standard drug: . The standard drug has a lower average number of asthma attacks per patient than the average in the treatment group.    Emilio opened a food truck last year where he sells burritos, and his business has stabilized over the last 3 months. Over that 3 month period, he has made $11,000 while working 625 hours. Emilio's average hourly earnings provides a useful statistic for evaluating whether his venture is, at least from a financial perspective, worth it: . By knowing his average hourly wage, Emilio now has put his earnings into a standard unit that is easier to compare with many other jobs that he might consider.      "
},
{
  "id": "ex-weighted-mean",
  "level": "2",
  "url": "sec-numerical-data.html#ex-weighted-mean",
  "type": "Example",
  "number": "2.1.12",
  "title": "Weighted means.",
  "body": " Weighted means   Suppose we want to compute the average income per person in the US. To do so, we might first think to take the mean of the per capita incomes across the 3,142 counties in the county data set. What would be a better approach?    The county data set is special in that each county actually represents many individual people. If we were to simply average across the income variable, we would be treating counties with 5,000 and 5,000,000 residents equally in the calculations. Instead, we should compute the total income for each county, add up all the counties' totals, and then divide by the number of people in all the counties. If we completed these steps with the county data, we would find that the per capita income for the US is $30,861. Had we computed the simple mean of per capita income across counties, the result would have been just $26,093! This example used what is called a weighted mean . For more information on this topic, check out online supplements regarding weighted means.   "
},
{
  "id": "subsec-histograms-shape-2",
  "level": "2",
  "url": "sec-numerical-data.html#subsec-histograms-shape-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "histogram "
},
{
  "id": "table-binned-int-rate",
  "level": "2",
  "url": "sec-numerical-data.html#table-binned-int-rate",
  "type": "Table",
  "number": "2.1.13",
  "title": "Counts for the binned <code class=\"code-inline tex2jax_ignore\">interest_rate<\/code> data",
  "body": " Counts for the binned interest_rate data    Interest Rate  5.0%-7.5%  7.5%-10.0%  10.0%-12.5%  12.5%-15.0%   25.0%-27.5%    Count  11  15  8  4   1    "
},
{
  "id": "fig-loan50-int-rate-hist",
  "level": "2",
  "url": "sec-numerical-data.html#fig-loan50-int-rate-hist",
  "type": "Figure",
  "number": "2.1.14",
  "title": "",
  "body": " A histogram of interest_rate . This distribution is strongly skewed to the right.   A histogram with a horizontal axis of \"Interest Rate\" and a vertical axis showing the frequency of occurrence of different bins of interest rate. The first bin is from 5%-7.5% with a frequency (count) of 11 observations, 7.5%-10% has a frequency of 15, 10%-12.5% has 8, 12.5%-15% has 4, 15%-17.5% has 5, 17.5%-20% has 4, and then the 20%-22.5%, 22.5%-25%, and 25%-27.5% bins each have a frequency of 1.   "
},
{
  "id": "subsec-histograms-shape-5",
  "level": "2",
  "url": "sec-numerical-data.html#subsec-histograms-shape-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "data density "
},
{
  "id": "subsec-histograms-shape-6",
  "level": "2",
  "url": "sec-numerical-data.html#subsec-histograms-shape-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "right skewed "
},
{
  "id": "subsec-histograms-shape-7",
  "level": "2",
  "url": "sec-numerical-data.html#subsec-histograms-shape-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "left skewed symmetric "
},
{
  "id": "assemblage-long-tails-2",
  "level": "2",
  "url": "sec-numerical-data.html#assemblage-long-tails-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "long tail "
},
{
  "id": "ex-skew-in-plots",
  "level": "2",
  "url": "sec-numerical-data.html#ex-skew-in-plots",
  "type": "Checkpoint",
  "number": "2.1.15",
  "title": "Identifying skew.",
  "body": " Identifying skew   Take a look at the dot plots in earlier figures. Can you see the skew in the data? Is it easier to see the skew in this histogram or the dot plots?    The skew is visible in all three plots, though the flat dot plot is the least useful. The stacked dot plot and histogram are helpful visualizations for identifying skew.   "
},
{
  "id": "ex-histogram-vs-dotplot",
  "level": "2",
  "url": "sec-numerical-data.html#ex-histogram-vs-dotplot",
  "type": "Checkpoint",
  "number": "2.1.16",
  "title": "Histogram limitations.",
  "body": " Histogram limitations   Besides the mean (since it was labeled), what can you see in the dot plots that you cannot see in the histogram?    The interest rates for individual loans.   "
},
{
  "id": "subsec-histograms-shape-11",
  "level": "2",
  "url": "sec-numerical-data.html#subsec-histograms-shape-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mode "
},
{
  "id": "subsec-histograms-shape-13",
  "level": "2",
  "url": "sec-numerical-data.html#subsec-histograms-shape-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unimodal bimodal multimodal "
},
{
  "id": "fig-modal-plots",
  "level": "2",
  "url": "sec-numerical-data.html#fig-modal-plots",
  "type": "Figure",
  "number": "2.1.17",
  "title": "",
  "body": " Distributions showing different numbers of modes   Three histograms are shown. The first histogram shows bins of width 2 between 0 to 18 (this is along the horizontal axis), and the frequencies are 3, 16, 16, 7, 11, 6, 4, 1, and 1. The second histogram, representing a different data set, shows bins of width 2 with values ranging from 0 to 20, where the bin counts in order are 2, 9, 5, 2, 2, 2, 2, 10, 19, and 9. The third histogram, representing yet another data set, shows bins of width 2 with values ranging from 0 to 22, where the bin counts in order are 10, 8, 4, 3, 1, 20, 15, 3, 15, 18, and 5.   "
},
{
  "id": "ex-unimodal-classification",
  "level": "2",
  "url": "sec-numerical-data.html#ex-unimodal-classification",
  "type": "Example",
  "number": "2.1.18",
  "title": "Identifying modality.",
  "body": " Identifying modality    reveals only one prominent mode in the interest rate. Is the distribution unimodal, bimodal, or multimodal?    Unimodal. Remember that uni stands for 1 (think uni cycles). Similarly, bi stands for 2 (think bi cycles). We're hoping a multicycle will be invented to complete this analogy.   "
},
{
  "id": "ex-height-modes",
  "level": "2",
  "url": "sec-numerical-data.html#ex-height-modes",
  "type": "Checkpoint",
  "number": "2.1.19",
  "title": "Expected modes in height data.",
  "body": " Expected modes in height data   Height measurements of young students and adult teachers at a K-3 elementary school were taken. How many modes would you expect in this height data set?    There might be two height groups visible in the data set: one of the students and one of the adults. That is, the data are probably bimodal.   "
},
{
  "id": "subsec-variance-sd-3",
  "level": "2",
  "url": "sec-numerical-data.html#subsec-variance-sd-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "deviation variance "
},
{
  "id": "subsec-variance-sd-5",
  "level": "2",
  "url": "sec-numerical-data.html#subsec-variance-sd-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard deviation "
},
{
  "id": "fig-sd-rule-int-rate",
  "level": "2",
  "url": "sec-numerical-data.html#fig-sd-rule-int-rate",
  "type": "Figure",
  "number": "2.1.20",
  "title": "",
  "body": " Standard deviations in the interest rate distribution   A dot plot of 50 observations is shown with values ranging from about 5% to 26%. The data set is the same as that shown in earlier dot plots, where the data is more dense from 5% to about 11%, has medium density from about 12% to 20%, and then there are a few more values scattered in the 20% to 27% range. Shading is shown to represent the regions within 1, 2, and 3 standard deviations. The region within 1 standard deviation is from 6.5% to 16.7%, representing 34 of the 50 data points. The region within 2 standard deviations runs left off of the chart (but would be from about 1.4%) to 21.8% and contains 48 of the 50 data points. The third standard deviation is shown to extend out to 26.9%, and all 50 observations are contained within the 3 standard deviations.   "
},
{
  "id": "fig-different-dists-same-sd",
  "level": "2",
  "url": "sec-numerical-data.html#fig-different-dists-same-sd",
  "type": "Figure",
  "number": "2.1.21",
  "title": "",
  "body": " Three very different population distributions with the same mean and standard deviation   Three histograms are shown (upper, middle, lower). Each distribution also shows shading -- dark gray between -1 to 1, lighter gray between -2 and 2, and light gray between -3 and 3, and then very light gray further out. The upper plot shows only two bins with non-zero values and of equal height at -1 and 1. The middle plot shows a bell-shaped curve, where most of the higher bin values are between -1 and 1, middling heights are between -2 to -1 and 1 to 2, and the data trails off in each direction with ever-smaller values further out. The lower histogram shows no data below about -1.6, a quick increase to a peak at about -0.7 and then a slow decline of values to about half the max height at 1 and further trails off to ever smaller values to a horizontal location of 3 and beyond.   "
},
{
  "id": "ex-shape-importance",
  "level": "2",
  "url": "sec-numerical-data.html#ex-shape-importance",
  "type": "Checkpoint",
  "number": "2.1.22",
  "title": "Importance of shape description.",
  "body": " Importance of shape description   The concept of shape of a distribution was introduced earlier. A good description of the shape of a distribution should include modality and whether the distribution is symmetric or skewed to one side. Using as an example, explain why such a description is important.     shows three distributions that look quite different, but all have the same mean, variance, and standard deviation. Using modality, we can distinguish between the first plot (bimodal) and the last two (unimodal). Using skewness, we can distinguish between the last plot (right skewed) and the first two. While a picture, like a histogram, tells a more complete story, we can use modality and shape (symmetry\/skew) to characterize basic information about a distribution.   "
},
{
  "id": "ex-describe-interest-distribution",
  "level": "2",
  "url": "sec-numerical-data.html#ex-describe-interest-distribution",
  "type": "Example",
  "number": "2.1.23",
  "title": "Describing a distribution.",
  "body": " Describing a distribution   Describe the distribution of the interest_rate variable using the histogram in . The description should incorporate the center, variability, and shape of the distribution, and it should also be placed in context. Also note any especially unusual cases.    The distribution of interest rates is unimodal and skewed to the high end. Many of the rates fall near the mean at 11.57%, and most fall within one standard deviation (5.05%) of the mean. There are a few exceptionally large interest rates in the sample that are above 20%.   "
},
{
  "id": "subsec-boxplots-quartiles-2",
  "level": "2",
  "url": "sec-numerical-data.html#subsec-boxplots-quartiles-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "box plot "
},
{
  "id": "fig-loan-int-rate-boxplot",
  "level": "2",
  "url": "sec-numerical-data.html#fig-loan-int-rate-boxplot",
  "type": "Figure",
  "number": "2.1.24",
  "title": "",
  "body": " A vertical dot plot next to a labeled box plot for the interest rates of the 50 loans   What is shown is a dot plot adjacent to what is called a \"box plot\". The data values are the same ones used in past dot plots, where the data shows greatest density from 5% to 11%, moderate density from 12% to 20%, and then a few more values at about 22%, 25%, and 26%. The box plot adjacent to the data shows a box that would encapsulate the middle 50% of the data, from about 8% to 13%. The median is also annotated with a line through the center of the box. From here, the data extend out with \"whiskers\" up to a distance up to 1.5 times IQR below and above the box to capture as much data as possible. There are two observations that extend beyond this range at 25% and 26%.   "
},
{
  "id": "subsec-boxplots-quartiles-4",
  "level": "2",
  "url": "sec-numerical-data.html#subsec-boxplots-quartiles-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "median "
},
{
  "id": "def-median-2",
  "level": "2",
  "url": "sec-numerical-data.html#def-median-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "median "
},
{
  "id": "subsec-boxplots-quartiles-6",
  "level": "2",
  "url": "sec-numerical-data.html#subsec-boxplots-quartiles-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "interquartile range IQR first quartile third quartile "
},
{
  "id": "ex-quartile-percentages",
  "level": "2",
  "url": "sec-numerical-data.html#ex-quartile-percentages",
  "type": "Checkpoint",
  "number": "2.1.25",
  "title": "Data between quartiles.",
  "body": " Data between quartiles   What percent of the data fall between and the median? What percent is between the median and ?    Since and capture the middle 50% of the data and the median splits the data in the middle, 25% of the data fall between and the median, and another 25% falls between the median and .   "
},
{
  "id": "subsec-boxplots-quartiles-9",
  "level": "2",
  "url": "sec-numerical-data.html#subsec-boxplots-quartiles-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "whiskers "
},
{
  "id": "subsec-boxplots-quartiles-10",
  "level": "2",
  "url": "sec-numerical-data.html#subsec-boxplots-quartiles-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "outliers "
},
{
  "id": "def-outliers-2",
  "level": "2",
  "url": "sec-numerical-data.html#def-outliers-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "outlier "
},
{
  "id": "ex-estimate-quartiles",
  "level": "2",
  "url": "sec-numerical-data.html#ex-estimate-quartiles",
  "type": "Checkpoint",
  "number": "2.1.26",
  "title": "Estimating quartiles from a box plot.",
  "body": " Estimating quartiles from a box plot   Using , estimate the following values for interest_rate in the loan50 data set: (a) , (b) , and (c) IQR.    These visual estimates will vary a little from one person to the next: 8%, 14%, 6%. (The true values: , , .)   "
},
{
  "id": "fig-loan-int-rate-robust",
  "level": "2",
  "url": "sec-numerical-data.html#fig-loan-int-rate-robust",
  "type": "Figure",
  "number": "2.1.27",
  "title": "",
  "body": " Dot plots of the original interest rate data and two modified data sets   Three dot plots are shown in the same plot. The largest observation from the original data set (discussed in previous dot plots) at about 26% is moved to 15% in the second dot plot and instead to 35% in the third dot plot.   "
},
{
  "id": "table-robust-comparison",
  "level": "2",
  "url": "sec-numerical-data.html#table-robust-comparison",
  "type": "Table",
  "number": "2.1.28",
  "title": "Comparison of statistics under different scenarios",
  "body": " Comparison of statistics under different scenarios    Scenario  Robust  Not Robust     Median  IQR      Original interest_rate data  9.93%  5.76%  11.57%  5.05%    Move 26.3% 15%  9.93%  5.76%  11.34%  4.61%    Move 26.3% 35%  9.93%  5.76%  11.74%  5.68%    "
},
{
  "id": "ex-robustness-comparison",
  "level": "2",
  "url": "sec-numerical-data.html#ex-robustness-comparison",
  "type": "Checkpoint",
  "number": "2.1.29",
  "title": "Comparing robustness of statistics.",
  "body": " Comparing robustness of statistics   (a) Which is more affected by extreme observations, the mean or median? may be helpful. (b) Is the standard deviation or IQR more affected by extreme observations?    (a) Mean is affected more. (b) Standard deviation is affected more. Complete explanations are provided below.   "
},
{
  "id": "subsec-robust-stats-6",
  "level": "2",
  "url": "sec-numerical-data.html#subsec-robust-stats-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "robust statistics "
},
{
  "id": "ex-why-robust-stable",
  "level": "2",
  "url": "sec-numerical-data.html#ex-why-robust-stable",
  "type": "Example",
  "number": "2.1.30",
  "title": "Stability of robust statistics.",
  "body": " Stability of robust statistics   The median and IQR did not change under the three scenarios in . Why might this be the case?    The median and IQR are only sensitive to numbers near , the median, and . Since values in these regions are stable in the three data sets, the median and IQR estimates are also stable.   "
},
{
  "id": "ex-mean-vs-median-choice",
  "level": "2",
  "url": "sec-numerical-data.html#ex-mean-vs-median-choice",
  "type": "Checkpoint",
  "number": "2.1.31",
  "title": "Choosing between mean and median.",
  "body": " Choosing between mean and median   The distribution of loan amounts in the loan50 data set is right skewed, with a few large loans lingering out into the right tail. If you were wanting to understand the typical loan size, should you be more interested in the mean or median?    Answers will vary! If we're looking to simply understand what a typical individual loan looks like, the median is probably more useful. However, if the goal is to understand something that scales well, such as the total amount of money we might need to have on hand if we were to offer 1,000 loans, then the mean would be more useful.   "
},
{
  "id": "fig-county-pop-transformed",
  "level": "2",
  "url": "sec-numerical-data.html#fig-county-pop-transformed",
  "type": "Figure",
  "number": "2.1.32",
  "title": "",
  "body": " County population distributions: (a) original data showing extreme skew, (b) log-transformed data   Two histograms are shown side by side. The first histogram has a horizontal axis of Population with possible data ranging from 0 to about 10 million. The first bar representing 0 to 400,000 shows a frequency (bar height) of about 3000, the second bar for 400,000 to 800,000 shows about frequency of about 100. All other bars are sufficiently small that they are virtually indistinguishable from 0. The second histogram shows the horizontal axis represents log-base-10 of the population. The horizontal axis runs from about 2 to 7, and frequency (bin\/box height) peaks at a little over 1000. The data show an approximate bell shape, peaking in the middle between 4 to 4.5, then showing lower frequencies the further out from 4-4.5 with frequencies being close to zero outside of 2.5 to 6.5.   "
},
{
  "id": "ex-extreme-skew-problem",
  "level": "2",
  "url": "sec-numerical-data.html#ex-extreme-skew-problem",
  "type": "Example",
  "number": "2.1.33",
  "title": "Issues with extreme skew.",
  "body": " Issues with extreme skew   Consider the histogram of county populations shown in (left panel), which shows extreme skew. What isn't useful about this plot?    Nearly all of the data fall into the left-most bin, and the extreme skew obscures many of the potentially interesting details in the data.   "
},
{
  "id": "subsec-transforming-data-5",
  "level": "2",
  "url": "sec-numerical-data.html#subsec-transforming-data-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "transformation "
},
{
  "id": "fig-pop-change-transform",
  "level": "2",
  "url": "sec-numerical-data.html#fig-pop-change-transform",
  "type": "Figure",
  "number": "2.1.34",
  "title": "",
  "body": " Scatterplots of population change vs. population: (a) original data, (b) log-transformed population   Two scatterplots are shown side by side. The first scatterplot has population on the horizontal axis (ranging from 0 to 10 million) and population change as a percent on the vertical axis (ranging from -35% to positive 40%). The data is particularly concentrated on the left of the graph below 1 million. There is no discernible trend in the data. The second scatterplot has log-base-10 of the population on the horizontal axis (ranging from 2 to 7) and population change as a percent on the vertical axis. The data is well distributed and shows a cloud of points with a slight upward trend.   "
},
{
  "id": "subsec-mapping-data-2",
  "level": "2",
  "url": "sec-numerical-data.html#subsec-mapping-data-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "intensity map "
},
{
  "id": "ex-poverty-unemployment-maps",
  "level": "2",
  "url": "sec-numerical-data.html#ex-poverty-unemployment-maps",
  "type": "Example",
  "number": "2.1.35",
  "title": "Features in poverty and unemployment intensity maps.",
  "body": " Features in poverty and unemployment intensity maps   What interesting features are evident in the poverty and unemployment_rate intensity maps?    Poverty rates are evidently higher in a few locations. Notably, the deep south shows higher poverty rates, as does much of Arizona and New Mexico. High poverty rates are evident in the Mississippi flood plains a little north of New Orleans and also in a large section of Kentucky.  The unemployment rate follows similar trends, and we can see correspondence between the two variables. In fact, it makes sense for higher rates of unemployment to be closely related to poverty rates. One observation that stands out when comparing the two maps: the poverty rate is much higher than the unemployment rate, meaning while many people may be working, they are not making enough to break out of poverty.   "
},
{
  "id": "guided-practice-median-income-map",
  "level": "2",
  "url": "sec-numerical-data.html#guided-practice-median-income-map",
  "type": "Checkpoint",
  "number": "2.1.36",
  "title": "Features in median household income map.",
  "body": " Features in median household income map   What interesting features are evident in the median_hh_income intensity map?    Note: answers will vary. There is some correspondence between high earning and metropolitan areas, where we can see darker spots (higher median household income), though there are several exceptions. You might look for large cities you are familiar with and try to spot them on the map as dark spots.   "
},
{
  "id": "sec-categorical-data",
  "level": "1",
  "url": "sec-categorical-data.html",
  "type": "Section",
  "number": "2.2",
  "title": "Considering categorical data",
  "body": " Considering categorical data   In this section, we will introduce tables and other basic tools for categorical data that are used throughout this book. The loan50 data set represents a sample from a larger loan data set called loans . This larger data set contains information on 10,000 loans made through Lending Club. We will examine the relationship between homeownership , which for the loans data can take a value of rent , mortgage (owns but has a mortgage), or own , and app_type , which indicates whether the loan application was made with a partner or whether it was an individual application.     Contingency tables and bar plots   summarizes two variables: app_type and homeownership . A table that summarizes data for two categorical variables in this way is called a contingency table . Each value in the table represents the number of times a particular combination of variable outcomes occurred. For example, the value 3,496 corresponds to the number of loans in the data set where the borrower rents their home and the application type was by an individual. Row and column totals are also included. The row totals provide the total counts across each row (e.g. ), and column totals are total counts down each column. We can also create a table that shows only the overall percentages or proportions for each combination of categories, or we can create a table for a single variable, such as the one shown in for the homeownership variable.   A contingency table for app_type and homeownership      homeownership       rent  mortgage  own  Total    app_type  individual  3,496  3,839  1,170  8,505     joint  362  950  183  1,495     Total  3,858  4,789  1,353  10,000      A table summarizing the frequencies of each value for the homeownership variable    homeownership  Count    rent  3,858    mortgage  4,789    own  1,353    Total  10,000     A bar plot is a common way to display a single categorical variable. shows a bar plot for the homeownership variable. In the left panel, the bar plot shows counts. In the right panel, the counts are converted into proportions, showing the proportion of observations that are in each level (e.g. for rent ).   Two bar plots of homeownership: (left) counts, (right) proportions   Two bar plots are shown side by side. The left bar plot has Homeownership on the horizontal axis and Frequency (count) on the vertical axis. Each level of homeownership has its own \"bar\" (which looks like a tall rectangle resting on the horizontal axis) with a height corresponding to the frequency of that bar in the data set. For example, the \"Rent\" bar extends from the horizontal axis up to a frequency of about 3900. The \"Mortgage\" bar extends from the horizontal axis up to about 4700, and the bar for \"Own\" extends up to about 1300. Moving to the next plot, the right bar plot, it looks very similar to the left bar plot except that it reports the proportion of cases on the vertical axis instead of the frequency (count). The values in this bar plot are: about 0.39 for Rent, about 0.47 for Mortgage, and about 0.13 for Own.       Row and column proportions  Sometimes it is useful to understand the fractional breakdown of one variable in another, and we can modify our contingency table to provide such a view. shows the row proportions for , which are computed as the counts divided by their row totals. The value 3,496 at the intersection of individual and rent is replaced by , i.e. 3,496 divided by its row total, 8,505. So what does 0.411 represent? It corresponds to the proportion of individual applicants who rent.   A contingency table with row proportions for app_type and homeownership     rent  mortgage  own  Total    individual  0.411  0.451  0.138  1.000    joint  0.242  0.635  0.122  1.000    Total  0.386  0.479  0.135  1.000     A contingency table of the column proportions is computed in a similar way, where each column proportion is computed as the count divided by the corresponding column total. shows such a table, and here the value 0.906 indicates that 90.6% of renters applied as individuals for the loan. This rate is higher compared to loans from people with mortgages (80.2%) or who own their home (86.5%). Because these rates vary between the three levels of homeownership , this provides evidence that the app_type and homeownership variables are associated.   A contingency table with column proportions for app_type and homeownership     rent  mortgage  own  Total    individual  0.906  0.802  0.865  0.851    joint  0.094  0.198  0.135  0.150    Total  1.000  1.000  1.000  1.000     We could also have checked for an association between app_type and homeownership using row proportions. When comparing these row proportions, we would look down columns to see if the fraction of loans where the borrower rents, has a mortgage, or owns varied across the individual to joint application types.   Interpreting proportions   (a) What does 0.451 represent in ? (b) What does 0.802 represent in ?    (a) 0.451 represents the proportion of individual applicants who have a mortgage. (b) 0.802 represents the fraction of applicants with mortgages who applied as individuals.     Email spam classification   Data scientists use statistics to filter spam from incoming email messages. By noting specific characteristics of an email, a data scientist may be able to classify some emails as spam or not spam with high accuracy. One such characteristic is the email format, which indicates whether or not an email has any HTML content. We'll focus on email format and spam status using the email data set, and these variables are summarized in a contingency table. Which would be more helpful to someone hoping to classify email as spam or regular email: row or column proportions?    A data scientist would be interested in how the proportion of spam changes within each email format. This corresponds to column proportions: the proportion of spam in plain text emails and the proportion of spam in HTML emails. If we generate the column proportions, we can see that a higher fraction of plain text emails are spam (17.5%) than compared to HTML emails (5.8%). This information on its own is insufficient to classify an email as spam or not spam, as over 80% of plain text emails are not spam. Yet, when we carefully combine this information with many other characteristics, we stand a reasonable chance of being able to classify some emails as spam or not spam with confidence.    Example points out that row and column proportions are not equivalent. Before settling on one form for a table, it is important to consider each to ensure that the most useful table is constructed. However, sometimes it simply isn't clear which, if either, is more useful.   Determining table usefulness   Look back to the row and column proportion tables for app_type and homeownership . Are there any obvious scenarios where one might be more useful than the other?    None that we thought were obvious! What is distinct about app_type and homeownership versus the email example is that these two variables don't have a clear explanatory-response variable relationship that we might hypothesize. Usually it is most useful to \"condition\" on the explanatory variable. For instance, in the email example, the email format was seen as a possible explanatory variable of whether the message was spam, so we would find it more interesting to compute the relative frequencies (proportions) for each email format.       Using a bar plot with two variables  Contingency tables using row or column proportions are especially useful for examining how two categorical variables are related. Stacked bar plots provide a way to visualize the information in these tables.  A stacked bar plot is a graphical display of contingency table information. For example, a stacked bar plot is shown in (left panel), where we have first created a bar plot using the homeownership variable and then divided each group by the levels of app_type . One related visualization is the side-by-side bar plot , shown in (middle panel). For the last type, the column proportions have been translated into a standardized stacked bar plot in (right panel). This type of visualization is helpful in understanding the fraction of individual or joint loan applications for borrowers in each level of homeownership . Since the proportions vary across the groups, we can conclude that the two variables are associated.   Bar plot variants: (left) stacked, (middle) side-by-side, (right) standardized stacked   Three bar plots are shown side by side showing different representations of the same data. All plots show homeownership on the horizontal axis with levels rent, mortgage, and own. The first plot shows a stacked bar plot with frequency counts, the second shows bars side-by-side for each homeownership level, and the third shows standardized bars all reaching to 1.0 on the vertical axis.     Choosing bar plot variants   Examine the three bar plots in . When is the stacked, side-by-side, or standardized stacked bar plot the most useful?    The stacked bar plot is most useful when it's reasonable to assign one variable as the explanatory variable and the other as the response. Side-by-side bar plots are more agnostic about which variable represents the explanatory and which the response variable. The standardized stacked bar plot is helpful if the primary variable is relatively imbalanced, making the simple stacked bar plot less useful for checking for an association. The major downside is that we lose all sense of how many cases each bar represents.       Mosaic plots  A mosaic plot is a visualization technique suitable for contingency tables that resembles a standardized stacked bar plot with the benefit that we still see the relative group sizes of the primary variable as well.  To get started in creating our first mosaic plot, we'll break a square into columns for each category of the homeownership variable. Each column represents a level of homeownership , and the column widths correspond to the proportion of loans in each of those categories. In general, mosaic plots use box areas to represent the number of cases in each category.   Mosaic plots: (left) one-variable for homeownership, (right) two-variable with app_type   Two mosaic plots are shown. The left plot shows a square divided vertically into three sections for rent (about 40%), mortgage (about 48%), and own (about 12%). The right plot further subdivides each vertical section horizontally to show the breakdown by application type (individual and joint).    To create a completed mosaic plot, the single-variable mosaic plot is further divided using the app_type variable. Each column is split proportional to the number of loans from individual and joint borrowers. For example, the second column represents loans where the borrower has a mortgage, and it was divided into individual loans (upper) and joint loans (lower). As another example, the bottom segment of the third column represents loans where the borrower owns their home and applied jointly, while the upper segment of this column represents borrowers who are homeowners and filed individually. We can again use this plot to see that the homeownership and app_type variables are associated, since some columns are divided in different vertical locations than others, which was the same technique used for checking an association in the standardized stacked bar plot.  In the mosaic plots shown, we chose to first split by the homeowner status of the borrower. However, we could have instead first split by the application type. Like with the bar plots, it's common to use the explanatory variable to represent the first split in a mosaic plot, and then for the response to break up each level of the explanatory variable, if these labels are reasonable to attach to the variables under consideration.     The only pie chart you will see in this book  A pie chart is shown alongside a bar plot representing the same information. Pie charts can be useful for giving a high-level overview to show how a set of cases break down. However, it is also difficult to decipher details in a pie chart. For example, it takes a couple seconds longer to recognize that there are more loans where the borrower has a mortgage than rent when looking at the pie chart, while this detail is very obvious in the bar plot. While pie charts can be useful, we prefer bar plots for their ease in comparing groups.   A pie chart and bar plot of homeownership   Two plots are shown side by side. The left is a pie chart divided into three slices: mortgage (blue, about 48%), rent (green, about 39%), and own (red, about 13%). The right is a bar plot with the same information showing three bars with frequencies around 3900, 4700, and 1300 respectively.       Comparing numerical data across groups  Some of the more interesting investigations can be considered by examining numerical data across groups. The methods required here aren't really new: all that's required is to make a numerical plot for each group in the same graph. Here two convenient methods are introduced: side-by-side box plots and hollow histograms.  We will take a look again at the county data set and compare the median household income for counties that gained population from 2010 to 2017 versus counties that had no gain. While we might like to make a causal connection here, remember that these are observational data and so such an interpretation would be, at best, half-baked.  There were 1,454 counties where the population increased from 2010 to 2017, and there were 1,672 counties with no gain (all but one were a loss). A random sample of 100 counties from the first group and 50 from the second group are shown in to give a better sense of some of the raw median income data.   Median Income for 150 Counties, in $1000s    Population Gain   No Population Gain    38.2 43.6 42.2 61.5 51.1 45.7   48.3 60.3 50.7    44.6 51.8 40.7 48.1 56.4 41.9   39.3 40.4 40.3    40.6 63.3 52.1 60.3 49.8 51.7   57.0 47.2 45.9    51.1 34.1 45.5 52.8 49.1 51.0   42.3 41.5 46.1    80.8 46.3 82.2 43.6 39.7 49.4   44.9 51.7 46.4    75.2 40.6 46.3 62.4 44.1 51.3   29.1 51.8 50.5    51.9 34.7 54.0 42.9 52.2 45.1   27.0 30.9 34.9    61.0 51.4 56.5 62.0 46.0 46.4   40.7 51.8 61.1    53.8 57.6 69.2 48.4 40.5 48.6   43.4 34.7 45.7    53.1 54.6 55.0 46.4 39.9 56.7   33.1 21.0 37.0    63.0 49.1 57.2 44.1 50.0 38.9   52.0 31.9 45.7    46.6 46.5 38.9 50.9 56.0 34.6   56.3 38.7 45.7    74.2 63.0 49.6 53.7 77.5 60.0   56.2 43.0 21.7    63.2 47.6 55.9 39.1 57.8 42.6   44.5 34.5 48.9    50.4 49.0 45.6 39.0 38.8 37.1   50.9 42.1 43.2    57.2 44.7 71.7 35.3 100.2   35.4 41.3 33.6    42.6 55.5 38.6 52.7 63.0   43.4 56.5     The side-by-side box plot is a traditional tool for comparing across groups. An example is shown in a figure, where there are two box plots, one for each group, placed into one plotting window and drawn on the same scale.  Another useful plotting method uses hollow histograms to compare numerical data across groups. These are just the outlines of histograms of each group put on the same plot.   Comparing income by population change   Use the plots to compare the incomes for counties across the two groups. What do you notice about the approximate center of each group? What do you notice about the variability between groups? Is the shape relatively consistent between groups? How many prominent modes are there for each group?    Answers may vary a little. The counties with population gains tend to have higher income (median of about $45,000) versus counties without a gain (median of about $40,000). The variability is also slightly larger for the population gain group. This is evident in the IQR, which is about 50% bigger in the gain group. Both distributions show slight to moderate right skew and are unimodal. There is a secondary small bump visible in the hollow histograms, though this is an artifact of the small sample sizes chosen for these examples.     Useful plot components   What components of each plot do you find most useful?    Answers will vary. The side-by-side box plots are especially useful for comparing centers and spreads, while the hollow histograms are more useful for seeing distribution shape, skew, and potential anomalies.     "
},
{
  "id": "subsec-contingency-tables-2",
  "level": "2",
  "url": "sec-categorical-data.html#subsec-contingency-tables-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "contingency table row totals column totals "
},
{
  "id": "table-loan-app-homeownership",
  "level": "2",
  "url": "sec-categorical-data.html#table-loan-app-homeownership",
  "type": "Table",
  "number": "2.2.1",
  "title": "A contingency table for <code class=\"code-inline tex2jax_ignore\">app_type<\/code> and <code class=\"code-inline tex2jax_ignore\">homeownership<\/code>",
  "body": " A contingency table for app_type and homeownership      homeownership       rent  mortgage  own  Total    app_type  individual  3,496  3,839  1,170  8,505     joint  362  950  183  1,495     Total  3,858  4,789  1,353  10,000    "
},
{
  "id": "table-homeownership-freq",
  "level": "2",
  "url": "sec-categorical-data.html#table-homeownership-freq",
  "type": "Table",
  "number": "2.2.2",
  "title": "A table summarizing the frequencies of each value for the <code class=\"code-inline tex2jax_ignore\">homeownership<\/code> variable",
  "body": " A table summarizing the frequencies of each value for the homeownership variable    homeownership  Count    rent  3,858    mortgage  4,789    own  1,353    Total  10,000    "
},
{
  "id": "subsec-contingency-tables-5",
  "level": "2",
  "url": "sec-categorical-data.html#subsec-contingency-tables-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bar plot "
},
{
  "id": "fig-homeownership-barplot",
  "level": "2",
  "url": "sec-categorical-data.html#fig-homeownership-barplot",
  "type": "Figure",
  "number": "2.2.3",
  "title": "",
  "body": " Two bar plots of homeownership: (left) counts, (right) proportions   Two bar plots are shown side by side. The left bar plot has Homeownership on the horizontal axis and Frequency (count) on the vertical axis. Each level of homeownership has its own \"bar\" (which looks like a tall rectangle resting on the horizontal axis) with a height corresponding to the frequency of that bar in the data set. For example, the \"Rent\" bar extends from the horizontal axis up to a frequency of about 3900. The \"Mortgage\" bar extends from the horizontal axis up to about 4700, and the bar for \"Own\" extends up to about 1300. Moving to the next plot, the right bar plot, it looks very similar to the left bar plot except that it reports the proportion of cases on the vertical axis instead of the frequency (count). The values in this bar plot are: about 0.39 for Rent, about 0.47 for Mortgage, and about 0.13 for Own.   "
},
{
  "id": "subsec-row-column-proportions-2",
  "level": "2",
  "url": "sec-categorical-data.html#subsec-row-column-proportions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "row proportions "
},
{
  "id": "table-row-props-app-homeownership",
  "level": "2",
  "url": "sec-categorical-data.html#table-row-props-app-homeownership",
  "type": "Table",
  "number": "2.2.4",
  "title": "A contingency table with row proportions for <code class=\"code-inline tex2jax_ignore\">app_type<\/code> and <code class=\"code-inline tex2jax_ignore\">homeownership<\/code>",
  "body": " A contingency table with row proportions for app_type and homeownership     rent  mortgage  own  Total    individual  0.411  0.451  0.138  1.000    joint  0.242  0.635  0.122  1.000    Total  0.386  0.479  0.135  1.000    "
},
{
  "id": "subsec-row-column-proportions-4",
  "level": "2",
  "url": "sec-categorical-data.html#subsec-row-column-proportions-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "column proportion "
},
{
  "id": "table-col-props-app-homeownership",
  "level": "2",
  "url": "sec-categorical-data.html#table-col-props-app-homeownership",
  "type": "Table",
  "number": "2.2.5",
  "title": "A contingency table with column proportions for <code class=\"code-inline tex2jax_ignore\">app_type<\/code> and <code class=\"code-inline tex2jax_ignore\">homeownership<\/code>",
  "body": " A contingency table with column proportions for app_type and homeownership     rent  mortgage  own  Total    individual  0.906  0.802  0.865  0.851    joint  0.094  0.198  0.135  0.150    Total  1.000  1.000  1.000  1.000    "
},
{
  "id": "ex-interpret-row-col-props",
  "level": "2",
  "url": "sec-categorical-data.html#ex-interpret-row-col-props",
  "type": "Checkpoint",
  "number": "2.2.6",
  "title": "Interpreting proportions.",
  "body": " Interpreting proportions   (a) What does 0.451 represent in ? (b) What does 0.802 represent in ?    (a) 0.451 represents the proportion of individual applicants who have a mortgage. (b) 0.802 represents the fraction of applicants with mortgages who applied as individuals.   "
},
{
  "id": "ex-spam-email-classification",
  "level": "2",
  "url": "sec-categorical-data.html#ex-spam-email-classification",
  "type": "Example",
  "number": "2.2.7",
  "title": "Email spam classification.",
  "body": " Email spam classification   Data scientists use statistics to filter spam from incoming email messages. By noting specific characteristics of an email, a data scientist may be able to classify some emails as spam or not spam with high accuracy. One such characteristic is the email format, which indicates whether or not an email has any HTML content. We'll focus on email format and spam status using the email data set, and these variables are summarized in a contingency table. Which would be more helpful to someone hoping to classify email as spam or regular email: row or column proportions?    A data scientist would be interested in how the proportion of spam changes within each email format. This corresponds to column proportions: the proportion of spam in plain text emails and the proportion of spam in HTML emails. If we generate the column proportions, we can see that a higher fraction of plain text emails are spam (17.5%) than compared to HTML emails (5.8%). This information on its own is insufficient to classify an email as spam or not spam, as over 80% of plain text emails are not spam. Yet, when we carefully combine this information with many other characteristics, we stand a reasonable chance of being able to classify some emails as spam or not spam with confidence.   "
},
{
  "id": "ex-app-type-homeownership-usefulness",
  "level": "2",
  "url": "sec-categorical-data.html#ex-app-type-homeownership-usefulness",
  "type": "Example",
  "number": "2.2.8",
  "title": "Determining table usefulness.",
  "body": " Determining table usefulness   Look back to the row and column proportion tables for app_type and homeownership . Are there any obvious scenarios where one might be more useful than the other?    None that we thought were obvious! What is distinct about app_type and homeownership versus the email example is that these two variables don't have a clear explanatory-response variable relationship that we might hypothesize. Usually it is most useful to \"condition\" on the explanatory variable. For instance, in the email example, the email format was seen as a possible explanatory variable of whether the message was spam, so we would find it more interesting to compute the relative frequencies (proportions) for each email format.   "
},
{
  "id": "subsec-bar-plot-two-vars-3",
  "level": "2",
  "url": "sec-categorical-data.html#subsec-bar-plot-two-vars-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "stacked bar plot side-by-side bar plot "
},
{
  "id": "fig-bar-plot-variants",
  "level": "2",
  "url": "sec-categorical-data.html#fig-bar-plot-variants",
  "type": "Figure",
  "number": "2.2.9",
  "title": "",
  "body": " Bar plot variants: (left) stacked, (middle) side-by-side, (right) standardized stacked   Three bar plots are shown side by side showing different representations of the same data. All plots show homeownership on the horizontal axis with levels rent, mortgage, and own. The first plot shows a stacked bar plot with frequency counts, the second shows bars side-by-side for each homeownership level, and the third shows standardized bars all reaching to 1.0 on the vertical axis.   "
},
{
  "id": "ex-when-use-bar-variants",
  "level": "2",
  "url": "sec-categorical-data.html#ex-when-use-bar-variants",
  "type": "Example",
  "number": "2.2.10",
  "title": "Choosing bar plot variants.",
  "body": " Choosing bar plot variants   Examine the three bar plots in . When is the stacked, side-by-side, or standardized stacked bar plot the most useful?    The stacked bar plot is most useful when it's reasonable to assign one variable as the explanatory variable and the other as the response. Side-by-side bar plots are more agnostic about which variable represents the explanatory and which the response variable. The standardized stacked bar plot is helpful if the primary variable is relatively imbalanced, making the simple stacked bar plot less useful for checking for an association. The major downside is that we lose all sense of how many cases each bar represents.   "
},
{
  "id": "subsec-mosaic-plots-2",
  "level": "2",
  "url": "sec-categorical-data.html#subsec-mosaic-plots-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mosaic plot "
},
{
  "id": "fig-mosaic-plots",
  "level": "2",
  "url": "sec-categorical-data.html#fig-mosaic-plots",
  "type": "Figure",
  "number": "2.2.11",
  "title": "",
  "body": " Mosaic plots: (left) one-variable for homeownership, (right) two-variable with app_type   Two mosaic plots are shown. The left plot shows a square divided vertically into three sections for rent (about 40%), mortgage (about 48%), and own (about 12%). The right plot further subdivides each vertical section horizontally to show the breakdown by application type (individual and joint).   "
},
{
  "id": "subsec-pie-charts-2",
  "level": "2",
  "url": "sec-categorical-data.html#subsec-pie-charts-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pie chart "
},
{
  "id": "fig-pie-vs-bar",
  "level": "2",
  "url": "sec-categorical-data.html#fig-pie-vs-bar",
  "type": "Figure",
  "number": "2.2.12",
  "title": "",
  "body": " A pie chart and bar plot of homeownership   Two plots are shown side by side. The left is a pie chart divided into three slices: mortgage (blue, about 48%), rent (green, about 39%), and own (red, about 13%). The right is a bar plot with the same information showing three bars with frequencies around 3900, 4700, and 1300 respectively.   "
},
{
  "id": "table-county-income-by-pop-gain",
  "level": "2",
  "url": "sec-categorical-data.html#table-county-income-by-pop-gain",
  "type": "Table",
  "number": "2.2.13",
  "title": "Median Income for 150 Counties, in $1000s",
  "body": " Median Income for 150 Counties, in $1000s    Population Gain   No Population Gain    38.2 43.6 42.2 61.5 51.1 45.7   48.3 60.3 50.7    44.6 51.8 40.7 48.1 56.4 41.9   39.3 40.4 40.3    40.6 63.3 52.1 60.3 49.8 51.7   57.0 47.2 45.9    51.1 34.1 45.5 52.8 49.1 51.0   42.3 41.5 46.1    80.8 46.3 82.2 43.6 39.7 49.4   44.9 51.7 46.4    75.2 40.6 46.3 62.4 44.1 51.3   29.1 51.8 50.5    51.9 34.7 54.0 42.9 52.2 45.1   27.0 30.9 34.9    61.0 51.4 56.5 62.0 46.0 46.4   40.7 51.8 61.1    53.8 57.6 69.2 48.4 40.5 48.6   43.4 34.7 45.7    53.1 54.6 55.0 46.4 39.9 56.7   33.1 21.0 37.0    63.0 49.1 57.2 44.1 50.0 38.9   52.0 31.9 45.7    46.6 46.5 38.9 50.9 56.0 34.6   56.3 38.7 45.7    74.2 63.0 49.6 53.7 77.5 60.0   56.2 43.0 21.7    63.2 47.6 55.9 39.1 57.8 42.6   44.5 34.5 48.9    50.4 49.0 45.6 39.0 38.8 37.1   50.9 42.1 43.2    57.2 44.7 71.7 35.3 100.2   35.4 41.3 33.6    42.6 55.5 38.6 52.7 63.0   43.4 56.5    "
},
{
  "id": "subsec-comparing-across-groups-6",
  "level": "2",
  "url": "sec-categorical-data.html#subsec-comparing-across-groups-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "side-by-side box plot "
},
{
  "id": "subsec-comparing-across-groups-7",
  "level": "2",
  "url": "sec-categorical-data.html#subsec-comparing-across-groups-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hollow histograms "
},
{
  "id": "guided-practice-compare-income-by-pop",
  "level": "2",
  "url": "sec-categorical-data.html#guided-practice-compare-income-by-pop",
  "type": "Checkpoint",
  "number": "2.2.14",
  "title": "Comparing income by population change.",
  "body": " Comparing income by population change   Use the plots to compare the incomes for counties across the two groups. What do you notice about the approximate center of each group? What do you notice about the variability between groups? Is the shape relatively consistent between groups? How many prominent modes are there for each group?    Answers may vary a little. The counties with population gains tend to have higher income (median of about $45,000) versus counties without a gain (median of about $40,000). The variability is also slightly larger for the population gain group. This is evident in the IQR, which is about 50% bigger in the gain group. Both distributions show slight to moderate right skew and are unimodal. There is a secondary small bump visible in the hollow histograms, though this is an artifact of the small sample sizes chosen for these examples.   "
},
{
  "id": "guided-practice-plot-components",
  "level": "2",
  "url": "sec-categorical-data.html#guided-practice-plot-components",
  "type": "Checkpoint",
  "number": "2.2.15",
  "title": "Useful plot components.",
  "body": " Useful plot components   What components of each plot do you find most useful?    Answers will vary. The side-by-side box plots are especially useful for comparing centers and spreads, while the hollow histograms are more useful for seeing distribution shape, skew, and potential anomalies.   "
},
{
  "id": "sec-malaria-vaccine",
  "level": "1",
  "url": "sec-malaria-vaccine.html",
  "type": "Section",
  "number": "2.3",
  "title": "Case study: malaria vaccine",
  "body": " Case study: malaria vaccine   Class seating and Apple ownership   Suppose your professor splits the students in class into two groups: students on the left and students on the right. If and represent the proportion of students who own an Apple product on the left and right, respectively, would you be surprised if did not exactly equal ?    While the proportions would probably be close to each other, it would be unusual for them to be exactly the same. We would probably observe a small difference due to chance.     Independence between seating and ownership   If we don't think the side of the room a person sits on in class is related to whether the person owns an Apple product, what assumption are we making about the relationship between these two variables?    We would be assuming that these two variables are independent.     Variability within data  We consider a study on a new malaria vaccine called PfSPZ. In this study, volunteer patients were randomized into one of two experiment groups: 14 patients received an experimental vaccine and 6 patients received a placebo vaccine. Nineteen weeks later, all 20 patients were exposed to a drug-sensitive malaria parasite strain; the motivation of using a drug-sensitive strain of parasite here is for ethical considerations, allowing any infections to be treated effectively. The results are summarized in , where 9 of the 14 treatment patients remained free of signs of infection while all of the 6 patients in the control group patients showed some baseline signs of infection.   Summary results for the malaria vaccine experiment      outcome  Total      infection  no infection     treatment  vaccine  5  9  14    placebo  6  0  6     Total  11  9  20      Study design and implications   Is this an observational study or an experiment? What implications does the study type have on what can be inferred from the results?    The study is an experiment, as patients were randomly assigned an experiment group. Since this is an experiment, the results can be used to evaluate a causal relationship between the malaria vaccine and whether patients showed signs of an infection.    In this study, a smaller proportion of patients who received the vaccine showed signs of an infection (35.7% versus 100%). However, the sample is very small, and it is unclear whether the difference provides convincing evidence that the vaccine is effective.   Assessing the evidence   Data scientists are sometimes called upon to evaluate the strength of evidence. When looking at the rates of infection for patients in the two groups in this study, what comes to mind as we try to determine whether the data show convincing evidence of a real difference?    The observed infection rates (35.7% for the treatment group versus 100% for the control group) suggest the vaccine may be effective. However, we cannot be sure if the observed difference represents the vaccine's efficacy or is just from random chance. Generally there is a little bit of fluctuation in sample data, and we wouldn't expect the sample proportions to be exactly equal, even if the truth was that the infection rates were independent of getting the vaccine. Additionally, with such small samples, perhaps it's common to observe such large differences when we randomly split a group due to chance alone!    Example is a reminder that the observed outcomes in the data sample may not perfectly reflect the true relationships between variables since there is random noise . While the observed difference in rates of infection is large, the sample size for the study is small, making it unclear if this observed difference represents efficacy of the vaccine or whether it is simply due to chance. We label these two competing claims, and , which are spoken as \"H-nought\" and \"H-A\":      : Independence model. The variables treatment and outcome are independent. They have no relationship, and the observed difference between the proportion of patients who developed an infection in the two groups, 64.3%, was due to chance.     : Alternative model. The variables are not independent. The difference in infection rates of 64.3% was not due to chance, and vaccine affected the rate of infection.     What would it mean if the independence model, which says the vaccine had no influence on the rate of infection, is true? It would mean 11 patients were going to develop an infection no matter which group they were randomized into , and 9 patients would not develop an infection no matter which group they were randomized into . That is, if the vaccine did not affect the rate of infection, the difference in the infection rates was due to chance alone in how the patients were randomized.  Now consider the alternative model: infection rates were influenced by whether a patient received the vaccine or not. If this was true, and especially if this influence was substantial, we would expect to see some difference in the infection rates of patients in the groups.  We choose between these two competing claims by assessing if the data conflict so much with that the independence model cannot be deemed reasonable. If this is the case, and the data support , then we will reject the notion of independence and conclude the vaccine was effective.    Simulating the study  We're going to implement simulations , where we will pretend we know that the malaria vaccine being tested does not work. Ultimately, we want to understand if the large difference we observed is common in these simulations. If it is common, then maybe the difference we observed was purely due to chance. If it is very uncommon, then the possibility that the vaccine was helpful seems more plausible.   shows that 11 patients developed infections and 9 did not. For our simulation, we will suppose the infections were independent of the vaccine and we were able to rewind back to when the researchers randomized the patients in the study. If we happened to randomize the patients differently, we may get a different result in this hypothetical world where the vaccine doesn't influence the infection. Let's complete another randomization using a simulation.  In this simulation , we take 20 notecards to represent the 20 patients, where we write down \"infection\" on 11 cards and \"no infection\" on 9 cards. In this hypothetical world, we believe each patient that got an infection was going to get it regardless of which group they were in, so let's see what happens if we randomly assign the patients to the treatment and control groups again. We thoroughly shuffle the notecards and deal 14 into a vaccine pile and 6 into a placebo pile. Finally, we tabulate the results, which are shown in .   Simulation results, where any difference in infection rates is purely due to chance      outcome  Total      infection  no infection     treatment (simulated)  vaccine  7  7  14    placebo  4  2  6     Total  11  9  20      Simulated difference   What is the difference in infection rates between the two simulated groups in ? How does this compare to the observed 64.3% difference in the actual data?     or about 16.7% in favor of the vaccine. This difference due to chance is much smaller than the difference observed in the actual groups.      Checking for independence  We computed one possible difference under the independence model in Guided Practice , which represents one difference due to chance. While in this first simulation, we physically dealt out notecards to represent the patients, it is more efficient to perform this simulation using a computer. Repeating the simulation on a computer, we get another difference due to chance: And another: And so on until we repeat the simulation enough times that we have a good idea of what represents the distribution of differences from chance alone . shows a stacked plot of the differences found from 100 simulations, where each dot represents a simulated difference between the infection rates (control rate minus treatment rate).   Differences from 100 simulations under the independence model   A stacked dot plot is shown. The horizontal axis represents \"difference in infection rates\" and has a range of -0.6 to 0.8. There are six stacks of dots shown in the plot, with 3 points shown at -0.55, 20-25 points shown at -0.32, 30-35 points shown at -0.08, 25-30 points shown at 0.18, 10-12 points shown at 0.41, and 2 points shown at 0.64.    Note that the distribution of these simulated differences is centered around 0. We simulated these differences assuming that the independence model was true, and under this condition, we expect the difference to be near zero with some random fluctuation, where near is pretty generous in this case since the sample sizes are so small in this study.   Rarity of the observed difference   How often would you observe a difference of at least 64.3% (0.643) according to ? Often, sometimes, rarely, or never?    It appears that a difference of at least 64.3% due to chance alone would only happen about 2% of the time according to . Such a low probability indicates a rare event.    The difference of 64.3% being a rare event suggests two possible interpretations of the results of the study:      : Independence model. The vaccine has no effect on infection rate, and we just happened to observe a difference that would only occur on a rare occasion.     : Alternative model. The vaccine has an effect on infection rate, and the difference we observed was actually due to the vaccine being effective at combatting malaria, which explains the large difference of 64.3%.     Based on the simulations, we have two options. (1) We conclude that the study results do not provide strong evidence against the independence model. That is, we do not have sufficiently strong evidence to conclude the vaccine had an effect in this clinical setting. (2) We conclude the evidence is sufficiently strong to reject and assert that the vaccine was useful. When we conduct formal studies, usually we reject the notion that we just happened to observe a rare event. So in this case, we reject the independence model in favor of the alternative. That is, we are concluding the data provide strong evidence that the vaccine provides some protection against malaria in this clinical setting.  One field of statistics, statistical inference, is built on evaluating whether such differences are due to chance. In statistical inference, data scientists evaluate which model is most reasonable given the data. Errors do occur, just like rare events, and we might choose the wrong model. While we do not always choose correctly, statistical inference gives us tools to control and evaluate how often these errors occur. In Chapter 3, we give a formal introduction to the problem of model selection. We spend the next two chapters building a foundation of probability and theory necessary to make that discussion rigorous.    Exercises   Side effects of Avandia   A retrospective study compared cardiovascular problems between rosiglitazone (Avandia) and pioglitazone (Actos) users (counts below).        Yes  No      Treatment  Rosiglitazone  2,593  65,000    Pioglitazone  5,386  154,592     Total  7,979  219,592       Assess true\/false for four claims (rate comparisons, causation, chance).  What proportion of all patients had cardiovascular problems?  If treatment and outcome were independent, expected rosiglitazone problems?  A randomization simulation produced a histogram of rosiglitazone problem counts. Use it to identify claims, direction supporting , and what the simulation suggests.      Heart transplants   Stanford heart-transplant program: control 34 patients (30 died), treatment 69 (45 died). Plots show survival mosaic and survival-time box plots; a randomization dotplot compares differences.   From the mosaic, is survival independent of transplant? Explain.  What do the box plots suggest about efficacy?  Compute death proportions in treatment vs. control.  Fill blanks for a card-shuffle randomization description; what do simulation results indicate about effectiveness?      "
},
{
  "id": "ex-class-right-left-side-apple",
  "level": "2",
  "url": "sec-malaria-vaccine.html#ex-class-right-left-side-apple",
  "type": "Example",
  "number": "2.3.1",
  "title": "Class seating and Apple ownership.",
  "body": " Class seating and Apple ownership   Suppose your professor splits the students in class into two groups: students on the left and students on the right. If and represent the proportion of students who own an Apple product on the left and right, respectively, would you be surprised if did not exactly equal ?    While the proportions would probably be close to each other, it would be unusual for them to be exactly the same. We would probably observe a small difference due to chance.   "
},
{
  "id": "guided-practice-apple-independence",
  "level": "2",
  "url": "sec-malaria-vaccine.html#guided-practice-apple-independence",
  "type": "Checkpoint",
  "number": "2.3.2",
  "title": "Independence between seating and ownership.",
  "body": " Independence between seating and ownership   If we don't think the side of the room a person sits on in class is related to whether the person owns an Apple product, what assumption are we making about the relationship between these two variables?    We would be assuming that these two variables are independent.   "
},
{
  "id": "table-malaria-vaccine-summary",
  "level": "2",
  "url": "sec-malaria-vaccine.html#table-malaria-vaccine-summary",
  "type": "Table",
  "number": "2.3.3",
  "title": "Summary results for the malaria vaccine experiment",
  "body": " Summary results for the malaria vaccine experiment      outcome  Total      infection  no infection     treatment  vaccine  5  9  14    placebo  6  0  6     Total  11  9  20    "
},
{
  "id": "guided-practice-malaria-study-type",
  "level": "2",
  "url": "sec-malaria-vaccine.html#guided-practice-malaria-study-type",
  "type": "Checkpoint",
  "number": "2.3.4",
  "title": "Study design and implications.",
  "body": " Study design and implications   Is this an observational study or an experiment? What implications does the study type have on what can be inferred from the results?    The study is an experiment, as patients were randomly assigned an experiment group. Since this is an experiment, the results can be used to evaluate a causal relationship between the malaria vaccine and whether patients showed signs of an infection.   "
},
{
  "id": "ex-malaria-vaccine-convincing",
  "level": "2",
  "url": "sec-malaria-vaccine.html#ex-malaria-vaccine-convincing",
  "type": "Example",
  "number": "2.3.5",
  "title": "Assessing the evidence.",
  "body": " Assessing the evidence   Data scientists are sometimes called upon to evaluate the strength of evidence. When looking at the rates of infection for patients in the two groups in this study, what comes to mind as we try to determine whether the data show convincing evidence of a real difference?    The observed infection rates (35.7% for the treatment group versus 100% for the control group) suggest the vaccine may be effective. However, we cannot be sure if the observed difference represents the vaccine's efficacy or is just from random chance. Generally there is a little bit of fluctuation in sample data, and we wouldn't expect the sample proportions to be exactly equal, even if the truth was that the infection rates were independent of getting the vaccine. Additionally, with such small samples, perhaps it's common to observe such large differences when we randomly split a group due to chance alone!   "
},
{
  "id": "subsec-variability-within-data-7",
  "level": "2",
  "url": "sec-malaria-vaccine.html#subsec-variability-within-data-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "random noise "
},
{
  "id": "subsec-variability-within-data-8",
  "level": "2",
  "url": "sec-malaria-vaccine.html#subsec-variability-within-data-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Independence model. Alternative model. "
},
{
  "id": "subsec-simulating-the-study-2",
  "level": "2",
  "url": "sec-malaria-vaccine.html#subsec-simulating-the-study-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "simulations "
},
{
  "id": "subsec-simulating-the-study-3",
  "level": "2",
  "url": "sec-malaria-vaccine.html#subsec-simulating-the-study-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "randomization "
},
{
  "id": "subsec-simulating-the-study-4",
  "level": "2",
  "url": "sec-malaria-vaccine.html#subsec-simulating-the-study-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "simulation "
},
{
  "id": "table-malaria-vaccine-sim-1",
  "level": "2",
  "url": "sec-malaria-vaccine.html#table-malaria-vaccine-sim-1",
  "type": "Table",
  "number": "2.3.6",
  "title": "Simulation results, where any difference in infection rates is purely due to chance",
  "body": " Simulation results, where any difference in infection rates is purely due to chance      outcome  Total      infection  no infection     treatment (simulated)  vaccine  7  7  14    placebo  4  2  6     Total  11  9  20    "
},
{
  "id": "guided-practice-malaria-sim-diff",
  "level": "2",
  "url": "sec-malaria-vaccine.html#guided-practice-malaria-sim-diff",
  "type": "Checkpoint",
  "number": "2.3.7",
  "title": "Simulated difference.",
  "body": " Simulated difference   What is the difference in infection rates between the two simulated groups in ? How does this compare to the observed 64.3% difference in the actual data?     or about 16.7% in favor of the vaccine. This difference due to chance is much smaller than the difference observed in the actual groups.   "
},
{
  "id": "fig-malaria-rand-dot-plot",
  "level": "2",
  "url": "sec-malaria-vaccine.html#fig-malaria-rand-dot-plot",
  "type": "Figure",
  "number": "2.3.8",
  "title": "",
  "body": " Differences from 100 simulations under the independence model   A stacked dot plot is shown. The horizontal axis represents \"difference in infection rates\" and has a range of -0.6 to 0.8. There are six stacks of dots shown in the plot, with 3 points shown at -0.55, 20-25 points shown at -0.32, 30-35 points shown at -0.08, 25-30 points shown at 0.18, 10-12 points shown at 0.41, and 2 points shown at 0.64.   "
},
{
  "id": "ex-malaria-rare-event",
  "level": "2",
  "url": "sec-malaria-vaccine.html#ex-malaria-rare-event",
  "type": "Example",
  "number": "2.3.9",
  "title": "Rarity of the observed difference.",
  "body": " Rarity of the observed difference   How often would you observe a difference of at least 64.3% (0.643) according to ? Often, sometimes, rarely, or never?    It appears that a difference of at least 64.3% due to chance alone would only happen about 2% of the time according to . Such a low probability indicates a rare event.   "
},
{
  "id": "subsec-checking-independence-7",
  "level": "2",
  "url": "sec-malaria-vaccine.html#subsec-checking-independence-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Independence model. Alternative model. "
},
{
  "id": "ex-randomization-avandia",
  "level": "2",
  "url": "sec-malaria-vaccine.html#ex-randomization-avandia",
  "type": "Exercise",
  "number": "2.3.4.1",
  "title": "Side effects of Avandia.",
  "body": " Side effects of Avandia   A retrospective study compared cardiovascular problems between rosiglitazone (Avandia) and pioglitazone (Actos) users (counts below).        Yes  No      Treatment  Rosiglitazone  2,593  65,000    Pioglitazone  5,386  154,592     Total  7,979  219,592       Assess true\/false for four claims (rate comparisons, causation, chance).  What proportion of all patients had cardiovascular problems?  If treatment and outcome were independent, expected rosiglitazone problems?  A randomization simulation produced a histogram of rosiglitazone problem counts. Use it to identify claims, direction supporting , and what the simulation suggests.    "
},
{
  "id": "ex-randomization-heart-transplant",
  "level": "2",
  "url": "sec-malaria-vaccine.html#ex-randomization-heart-transplant",
  "type": "Exercise",
  "number": "2.3.4.2",
  "title": "Heart transplants.",
  "body": " Heart transplants   Stanford heart-transplant program: control 34 patients (30 died), treatment 69 (45 died). Plots show survival mosaic and survival-time box plots; a randomization dotplot compares differences.   From the mosaic, is survival independent of transplant? Explain.  What do the box plots suggest about efficacy?  Compute death proportions in treatment vs. control.  Fill blanks for a card-shuffle randomization description; what do simulation results indicate about effectiveness?    "
},
{
  "id": "sec-defining-probability",
  "level": "1",
  "url": "sec-defining-probability.html",
  "type": "Section",
  "number": "3.1",
  "title": "Defining probability",
  "body": " Defining probability   Statistics is based on probability, and while probability is not required for the applied techniques in this book, it may help you gain a deeper understanding of the methods and set a better foundation for future courses.    Introductory examples  Before we get into technical ideas, let's walk through some basic examples that may feel more familiar.    A die , the singular of dice, is a cube with six faces numbered 1, 2, 3, 4, 5, and 6. What is the chance of getting 1 when rolling a die?    If the die is fair, then the chance of a 1 is as good as the chance of any other number. Since there are six outcomes, the chance must be 1-in-6 or, equivalently, .      What is the chance of getting a 1 or 2 in the next roll?    1 and 2 constitute two of the six equally likely possible outcomes, so the chance of getting one of these two outcomes must be .      What is the chance of getting either 1, 2, 3, 4, 5, or 6 on the next roll?    100%. The outcome must be one of these numbers.      What is the chance of not rolling a 2?    Since the chance of rolling a 2 is or , the chance of not rolling a 2 must be or .  Alternatively, we could have noticed that not rolling a 2 is the same as getting a 1, 3, 4, 5, or 6, which makes up five of the six equally likely outcomes and has probability .      Consider rolling two dice. If of the time the first die is a 1 and of those times the second die is a 1, what is the chance of getting two 1s?    If of the time the first die is a 1 and of those times the second die is also a 1, then the chance that both dice are 1 is or .      Probability  We use probability to build tools to describe and understand apparent randomness. We often frame probability in terms of a random process giving rise to an outcome .  Rolling a die or flipping a coin is a seemingly random process and each gives rise to an outcome: Roll a die 1, 2, 3, 4, 5, or 6; Flip a coin H or T.   Probability  The probability of an outcome is the proportion of times the outcome would occur if we observed the random process an infinite number of times.   Probability is defined as a proportion, and it always takes values between 0 and 1 (inclusively). It may also be displayed as a percentage between 0% and 100%.  Probability can be illustrated by rolling a die many times. Let be the proportion of outcomes that are 1 after the first rolls. As the number of rolls increases, will converge to the probability of rolling a 1, . shows this convergence for 100,000 die rolls. The tendency of to stabilize around is described by the Law of Large Numbers .   The fraction of die rolls that are 1 at each stage in a simulation. The proportion tends to get closer to the probability as the number of rolls increases.     Law of Large Numbers  As more observations are collected, the proportion of occurrences with a particular outcome converges to the probability of that outcome.   Occasionally the proportion will veer off from the probability and appear to defy the Law of Large Numbers, as does many times in . However, these deviations become smaller as the number of rolls increases.  Above we write as the probability of rolling a 1. We can also write this probability as As we become more comfortable with this notation, we will abbreviate it further. For instance, if it is clear that the process is rolling a die , we could abbreviate rolling a 1 as .   Random processes   Random processes include rolling a die and flipping a coin. (a) Think of another random process. (b) Describe all the possible outcomes of that process. For instance, rolling a die is a random process with possible outcomes 1, 2, , 6.    Here are four examples. (i) Whether someone gets sick in the next month or not is an apparently random process with outcomes sick and not . (ii) We can generate a random process by randomly picking a person and measuring that person's height. The outcome of this process will be a positive number. (iii) Whether the stock market goes up or down next week is a seemingly random process with possible outcomes up , down , and no_change . Alternatively, we could have used the percent change in the stock market as a numerical outcome. (iv) Whether your roommate cleans her dishes tonight probably seems like a random process with possible outcomes cleans_dishes and leaves_dishes .    What we think of as random processes are not necessarily random, but they may just be too difficult to understand exactly. The fourth example in the solution to suggests a roommate's behavior is a random process. However, even if a roommate's behavior is not truly random, modeling her behavior as a random process can still be useful.    Disjoint or mutually exclusive outcomes  Two outcomes are called disjoint or mutually exclusive if they cannot both happen. For instance, if we roll a die, the outcomes 1 and 2 are disjoint since they cannot both occur. On the other hand, the outcomes 1 and rolling an odd number are not disjoint since both occur if the outcome of the roll is a 1. The terms disjoint and mutually exclusive are equivalent and interchangeable.  Calculating the probability of disjoint outcomes is easy. When rolling a die, the outcomes 1 and 2 are disjoint, and we compute the probability that one of these outcomes will occur by adding their separate probabilities: What about the probability of rolling a 1, 2, 3, 4, 5, or 6? Here again, all of the outcomes are disjoint so we add the probabilities: The Addition Rule guarantees the accuracy of this approach when the outcomes are disjoint.   Addition Rule of disjoint outcomes  If and represent two disjoint outcomes, then the probability that one of them occurs is given by If there are many disjoint outcomes , , , then the probability that one of these outcomes will occur is      We are interested in the probability of rolling a 1, 4, or 5. (a) Explain why the outcomes 1, 4, and 5 are disjoint. (b) Apply the Addition Rule for disjoint outcomes to determine 1 or 4 or 5 .    (a) The random process is a die roll, and at most one of these outcomes can come up. This means they are disjoint outcomes. (b) 1 or 4 or 5       In the loans data set in Chapter 1, the homeownership variable described whether the borrower rents, has a mortgage, or owns her property. Of the 10,000 borrowers, 3858 rented, 4789 had a mortgage, and 1353 owned their home.    Are the outcomes rent , mortgage , and own disjoint?  Determine the proportion of loans with value mortgage and own separately.  Use the Addition Rule for disjoint outcomes to compute the probability a randomly selected loan from the data set is for someone who has a mortgage or owns her home.      (a) Yes. Each loan is categorized in only one level of homeownership. (b) Mortgage: . Own: . (c) mortgage or own mortgage own .    Data scientists rarely work with individual outcomes and instead consider sets or collections of outcomes. Let represent the event where a die roll results in 1 or 2 and represent the event that the die roll is a 4 or a 6. We write as the set of outcomes and . These sets are commonly called events . Because and have no elements in common, they are disjoint events. and are represented in .   Three events, , , and , consist of outcomes from rolling a die. and are disjoint since they do not have any outcomes in common.    The Addition Rule applies to both disjoint outcomes and disjoint events. The probability that one of the disjoint events or occurs is the sum of the separate probabilities:     (a) Verify the probability of event , , is using the Addition Rule. (b) Do the same for event .    (a) 1 or 2 . (b) Similarly, .      (a) Using as a reference, what outcomes are represented by event ? (b) Are events and disjoint? (c) Are events and disjoint?    (a) Outcomes 2 and 3. (b) Yes, events and are disjoint because they share no outcomes. (c) The events and share an outcome in common, 2, and so are not disjoint.      In , you confirmed and from are disjoint. Compute the probability that event or event occurs.    Since and are disjoint events, use the Addition Rule: or .      Probabilities when events are not disjoint  Let's consider calculations for two events that are not disjoint in the context of a regular deck of 52 cards, represented in . If you are unfamiliar with the cards in a regular deck, please see the footnote. The 52 cards are split into four suits : (club), (diamond), (heart), (spade). Each suit has its 13 cards labeled: 2, 3, , 10, J (jack), Q (queen), K (king), and A (ace). Thus, each card is a unique combination of a suit and a label, e.g. and . The 12 cards represented by the jacks, queens, and kings are called face cards . The cards that are or are typically colored red while the other two suits are typically colored black.    Representations of the 52 unique cards in a deck.      (a) What is the probability that a randomly selected card is a diamond? (b) What is the probability that a randomly selected card is a face card?    (a) There are 52 cards and 13 diamonds. If the cards are thoroughly shuffled, each card has an equal chance of being drawn, so the probability that a randomly selected card is a diamond is . (b) Likewise, there are 12 face cards, so .     Venn diagrams are useful when outcomes can be categorized as in or out for two or three variables, attributes, or random processes. The Venn diagram in uses a circle to represent diamonds and another to represent face cards. If a card is both a diamond and a face card, it falls into the intersection of the circles. If it is a diamond but not a face card, it will be in part of the left circle that is not in the right circle (and so on). The total number of cards that are diamonds is given by the total number of cards in the diamonds circle: . The probabilities are also shown (e.g. ).   A Venn diagram for diamonds and face cards.    Let represent the event that a randomly selected card is a diamond and represent the event that it is a face card. How do we compute ? Events and are not disjoint the cards , , and fall into both categories so we cannot use the Addition Rule for disjoint events. Instead we use the Venn diagram. We start by adding the probabilities of the two events: However, the three cards that are in both events were counted twice, once in each probability. We must correct this double counting: This equation is an example of the General Addition Rule .   General Addition Rule  If and are any two events, disjoint or not, then the probability that at least one of them will occur is where is the probability that both events occur.    or is inclusive  When we write or in statistics, we mean and\/or unless we explicitly state otherwise. Thus, or occurs means , , or both and occur.     (a) If and are disjoint, describe why this implies . (b) Using part (a), verify that the General Addition Rule simplifies to the simpler Addition Rule for disjoint events if and are disjoint.    (a) If and are disjoint, and can never occur simultaneously. (b) If and are disjoint, then the last term in the General Addition Rule formula is 0 (see part (a)) and we are left with the Addition Rule for disjoint events.      In the loans data set describing 10,000 loans, 1495 loans were from joint applications (e.g. a couple applied together), 4789 applicants had a mortgage, and 950 had both of these characteristics. Create a Venn diagram for this setup.    Both the counts and corresponding probabilities (e.g. ) are shown. Notice that the number of loans represented in the left circle corresponds to , and the number represented in the right circle is .         (a) Use your Venn diagram from the previous exercise to determine the probability a randomly drawn loan from the loans data set is from a joint application where the couple had a mortgage. (b) What is the probability that the loan had either of these attributes?    (a) The solution is represented by the intersection of the two circles: 0.095. (b) This is the sum of the three disjoint probabilities shown in the circles: (off by 0.001 due to a rounding error).      Probability distributions  A probability distribution is a table of all disjoint outcomes and their associated probabilities. shows the probability distribution for the sum of two dice.   Probability distribution for the sum of two dice.    Dice sum  2 3 4 5 6 7  8 9 10 11 12    Probability          Rules for probability distributions  A probability distribution is a list of the possible outcomes with corresponding probabilities that satisfies three rules:    The outcomes listed must be disjoint.  Each probability must be between 0 and 1.  The probabilities must total 1.        suggests three distributions for household income in the United States. Only one is correct. Which one must it be? What is wrong with the other two?    The probabilities of (a) do not sum to 1. The second probability in (b) is negative. This leaves (c), which sure enough satisfies the requirements of a distribution. One of the three was said to be the actual distribution of US household incomes, so it must be (c).     Proposed distributions of US household incomes.    Income Range  $0-25k $25k-50k $50k-100k $100k+    (a)  0.18 0.39 0.33 0.16    (b)  0.38 -0.27 0.52 0.37    (c)  0.28 0.27 0.29 0.16     Chapter 1 emphasized the importance of plotting data to provide quick summaries. Probability distributions can also be summarized in a bar plot. For instance, the distribution of US household incomes is shown in as a bar plot. The probability distribution for the sum of two dice is shown in and plotted in .   The probability distribution of US household income.     The probability distribution of the sum of two dice.    In these bar plots, the bar heights represent the probabilities of outcomes. If the outcomes are numerical and discrete, it is usually (visually) convenient to make a bar plot that resembles a histogram, as in the case of the sum of two dice. Another example of plotting the bars at their respective locations is shown in in .    Complement of an event  Rolling a die produces a value in the set . This set of all possible outcomes is called the sample space ( ) for rolling a die. We often use the sample space to examine the scenario where an event does not occur.  Let represent the event that the outcome of a die roll is 2 or 3. Then the complement of represents all outcomes in our sample space that are not in , which is denoted by . That is, is the set of all possible outcomes not already included in . shows the relationship between , , and the sample space .   Event and its complement, . represents the sample space, which is the set of all possible outcomes.      (a) Compute . (b) What is ?    (a) The outcomes are disjoint and each has probability , so the total probability is . (b) We can also see that . Since and are disjoint, .      Events and are shown in . (a) Write out what and represent. (b) Compute and . (c) Compute and .    Brief solutions: (a) and . (b) Noting that each outcome is disjoint, add the individual outcome probabilities to get and . (c) and are disjoint, and the same is true of and . Therefore, and .    A complement of an event is constructed to have two very important properties: (i) every possible outcome not in is in , and (ii) and are disjoint. Property (i) implies That is, if the outcome is not in , it must be represented in . We use the Addition Rule for disjoint events to apply Property (ii): Combining the last two equations yields a very useful relationship between the probability of an event and its complement.   Complement  The complement of event is denoted , and represents all outcomes not in . and are mathematically related:    In simple examples, computing or is feasible in a few steps. However, using the complement can save a lot of time as problems grow in complexity.    Let represent the event where we roll two dice and their total is less than 12. (a) What does the event represent? (b) Determine from . (c) Determine .    (a) The complement of : when the total is equal to 12. (b) . (c) Use the probability of the complement from part (b), , and the equation for the complement: .      Find the following probabilities for rolling two dice:    The sum of the dice is not 6.  The sum is at least 4. That is, determine the probability of the event .  The sum is no more than 10. That is, determine the probability of the event .      (a) First find , then use the complement: . (b) First find the complement, which requires much less effort: . Then calculate . (c) As before, finding the complement is the clever way to determine . First find . Then calculate .      Independence  Just as variables and observations can be independent, random processes can be independent, too. Two processes are independent if knowing the outcome of one provides no useful information about the outcome of the other. For instance, flipping a coin and rolling a die are two independent processes knowing the coin was heads does not help determine the outcome of a die roll. On the other hand, stock prices usually move up or down together, so they are not independent.   provides a basic example of two independent processes: rolling two dice. We want to determine the probability that both will be 1. Suppose one of the dice is red and the other white. If the outcome of the red die is a 1, it provides no information about the outcome of the white die. We first encountered this same question in , where we calculated the probability using the following reasoning: of the time the red die is a 1, and of those times the white die will also be a 1. This is illustrated in . Because the rolls are independent, the probabilities of the corresponding outcomes can be multiplied to get the final answer: . This can be generalized to many independent processes.   of the time, the first roll is a 1. Then of those times, the second roll will also be a 1.      What if there was also a blue die independent of the other two? What is the probability of rolling the three dice and getting all 1s?    The same logic applies from . If of the time the white and red dice are both 1, then of those times the blue die will also be 1, so multiply:      illustrates what is called the Multiplication Rule for independent processes.   Multiplication Rule for independent processes  If and represent events from two different and independent processes, then the probability that both and occur can be calculated as the product of their separate probabilities: Similarly, if there are events from independent processes, then the probability they all occur is      About 9% of people are left-handed. Suppose 2 people are selected at random from the U.S. population. Because the sample size of 2 is very small relative to the population, it is reasonable to assume these two people are independent. (a) What is the probability that both are left-handed? (b) What is the probability that both are right-handed?    (a) The probability the first person is left-handed is 0.09, which is the same for the second person. We apply the Multiplication Rule for independent processes to determine the probability that both will be left-handed: . (b) It is reasonable to assume the proportion of people who are ambidextrous (both right- and left-handed) is nearly 0, which results in . Using the same reasoning as in part (a), the probability that both will be right-handed is .      Suppose 5 people are selected at random.    What is the probability that all are right-handed?  What is the probability that all are left-handed?  What is the probability that not all of the people are right-handed?      (a) The abbreviations RH and LH are used for right-handed and left-handed, respectively. Since each are independent, we apply the Multiplication Rule for independent processes: (b) Using the same reasoning as in (a), . (c) Use the complement, , to answer this question:     Suppose the variables handedness and sex are independent, i.e. knowing someone's sex provides no useful information about their handedness and vice-versa. Then we can compute whether a randomly selected person is right-handed and female The actual proportion of the U.S. population that is female is about 50%, and so we use 0.5 for the probability of sampling a woman. However, this probability does differ in other countries. using the Multiplication Rule:     Three people are selected at random.    What is the probability that the first person is male and right-handed?  What is the probability that the first two people are male and right-handed?  What is the probability that the third person is female and left-handed?  What is the probability that the first two people are male and right-handed and the third person is female and left-handed?      Brief answers are provided. (a) This can be written in probability notation as . (b) 0.207. (c) 0.045. (d) 0.0093.    Sometimes we wonder if one outcome provides useful information about another outcome. The question we are asking is, are the occurrences of the two events independent? We say that two events and are independent if they satisfy .    If we shuffle up a deck of cards and draw one, is the event that the card is a heart independent of the event that the card is an ace?    The probability the card is a heart is and the probability that it is an ace is . The probability the card is the ace of hearts is . We check whether is satisfied: Because the equation holds, the event that the card is a heart and the event that the card is an ace are independent events.     "
},
{
  "id": "ex-prob-of-1",
  "level": "2",
  "url": "sec-defining-probability.html#ex-prob-of-1",
  "type": "Example",
  "number": "3.1.1",
  "title": "",
  "body": "  A die , the singular of dice, is a cube with six faces numbered 1, 2, 3, 4, 5, and 6. What is the chance of getting 1 when rolling a die?    If the die is fair, then the chance of a 1 is as good as the chance of any other number. Since there are six outcomes, the chance must be 1-in-6 or, equivalently, .   "
},
{
  "id": "ex-prob-of-1-or-2",
  "level": "2",
  "url": "sec-defining-probability.html#ex-prob-of-1-or-2",
  "type": "Example",
  "number": "3.1.2",
  "title": "",
  "body": "  What is the chance of getting a 1 or 2 in the next roll?    1 and 2 constitute two of the six equally likely possible outcomes, so the chance of getting one of these two outcomes must be .   "
},
{
  "id": "ex-prob-of-123456",
  "level": "2",
  "url": "sec-defining-probability.html#ex-prob-of-123456",
  "type": "Example",
  "number": "3.1.3",
  "title": "",
  "body": "  What is the chance of getting either 1, 2, 3, 4, 5, or 6 on the next roll?    100%. The outcome must be one of these numbers.   "
},
{
  "id": "ex-prob-not-2",
  "level": "2",
  "url": "sec-defining-probability.html#ex-prob-not-2",
  "type": "Example",
  "number": "3.1.4",
  "title": "",
  "body": "  What is the chance of not rolling a 2?    Since the chance of rolling a 2 is or , the chance of not rolling a 2 must be or .  Alternatively, we could have noticed that not rolling a 2 is the same as getting a 1, 3, 4, 5, or 6, which makes up five of the six equally likely outcomes and has probability .   "
},
{
  "id": "ex-prob-of-2-ones",
  "level": "2",
  "url": "sec-defining-probability.html#ex-prob-of-2-ones",
  "type": "Example",
  "number": "3.1.5",
  "title": "",
  "body": "  Consider rolling two dice. If of the time the first die is a 1 and of those times the second die is a 1, what is the chance of getting two 1s?    If of the time the first die is a 1 and of those times the second die is also a 1, then the chance that both dice are 1 is or .   "
},
{
  "id": "subsec-probability-definition-2",
  "level": "2",
  "url": "sec-defining-probability.html#subsec-probability-definition-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "random process outcome "
},
{
  "id": "def-probability-2",
  "level": "2",
  "url": "sec-defining-probability.html#def-probability-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "probability "
},
{
  "id": "subsec-probability-definition-6",
  "level": "2",
  "url": "sec-defining-probability.html#subsec-probability-definition-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Law of Large Numbers "
},
{
  "id": "fig-die-prop",
  "level": "2",
  "url": "sec-defining-probability.html#fig-die-prop",
  "type": "Figure",
  "number": "3.1.6",
  "title": "",
  "body": " The fraction of die rolls that are 1 at each stage in a simulation. The proportion tends to get closer to the probability as the number of rolls increases.   "
},
{
  "id": "ex-random-process",
  "level": "2",
  "url": "sec-defining-probability.html#ex-random-process",
  "type": "Checkpoint",
  "number": "3.1.7",
  "title": "Random processes.",
  "body": " Random processes   Random processes include rolling a die and flipping a coin. (a) Think of another random process. (b) Describe all the possible outcomes of that process. For instance, rolling a die is a random process with possible outcomes 1, 2, , 6.    Here are four examples. (i) Whether someone gets sick in the next month or not is an apparently random process with outcomes sick and not . (ii) We can generate a random process by randomly picking a person and measuring that person's height. The outcome of this process will be a positive number. (iii) Whether the stock market goes up or down next week is a seemingly random process with possible outcomes up , down , and no_change . Alternatively, we could have used the percent change in the stock market as a numerical outcome. (iv) Whether your roommate cleans her dishes tonight probably seems like a random process with possible outcomes cleans_dishes and leaves_dishes .   "
},
{
  "id": "subsec-disjoint-outcomes-2",
  "level": "2",
  "url": "sec-defining-probability.html#subsec-disjoint-outcomes-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "disjoint mutually exclusive "
},
{
  "id": "subsec-disjoint-outcomes-3",
  "level": "2",
  "url": "sec-defining-probability.html#subsec-disjoint-outcomes-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Addition Rule "
},
{
  "id": "ex-disjoint-145",
  "level": "2",
  "url": "sec-defining-probability.html#ex-disjoint-145",
  "type": "Checkpoint",
  "number": "3.1.8",
  "title": "",
  "body": "  We are interested in the probability of rolling a 1, 4, or 5. (a) Explain why the outcomes 1, 4, and 5 are disjoint. (b) Apply the Addition Rule for disjoint outcomes to determine 1 or 4 or 5 .    (a) The random process is a die roll, and at most one of these outcomes can come up. This means they are disjoint outcomes. (b) 1 or 4 or 5    "
},
{
  "id": "ex-loans-homeownership",
  "level": "2",
  "url": "sec-defining-probability.html#ex-loans-homeownership",
  "type": "Checkpoint",
  "number": "3.1.9",
  "title": "",
  "body": "  In the loans data set in Chapter 1, the homeownership variable described whether the borrower rents, has a mortgage, or owns her property. Of the 10,000 borrowers, 3858 rented, 4789 had a mortgage, and 1353 owned their home.    Are the outcomes rent , mortgage , and own disjoint?  Determine the proportion of loans with value mortgage and own separately.  Use the Addition Rule for disjoint outcomes to compute the probability a randomly selected loan from the data set is for someone who has a mortgage or owns her home.      (a) Yes. Each loan is categorized in only one level of homeownership. (b) Mortgage: . Own: . (c) mortgage or own mortgage own .   "
},
{
  "id": "subsec-disjoint-outcomes-7",
  "level": "2",
  "url": "sec-defining-probability.html#subsec-disjoint-outcomes-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "events "
},
{
  "id": "fig-disjoint-sets",
  "level": "2",
  "url": "sec-defining-probability.html#fig-disjoint-sets",
  "type": "Figure",
  "number": "3.1.10",
  "title": "",
  "body": " Three events, , , and , consist of outcomes from rolling a die. and are disjoint since they do not have any outcomes in common.   "
},
{
  "id": "ex-verify-prob-a-b",
  "level": "2",
  "url": "sec-defining-probability.html#ex-verify-prob-a-b",
  "type": "Checkpoint",
  "number": "3.1.11",
  "title": "",
  "body": "  (a) Verify the probability of event , , is using the Addition Rule. (b) Do the same for event .    (a) 1 or 2 . (b) Similarly, .   "
},
{
  "id": "ex-examining-disjoint-sets-abd",
  "level": "2",
  "url": "sec-defining-probability.html#ex-examining-disjoint-sets-abd",
  "type": "Checkpoint",
  "number": "3.1.12",
  "title": "",
  "body": "  (a) Using as a reference, what outcomes are represented by event ? (b) Are events and disjoint? (c) Are events and disjoint?    (a) Outcomes 2 and 3. (b) Yes, events and are disjoint because they share no outcomes. (c) The events and share an outcome in common, 2, and so are not disjoint.   "
},
{
  "id": "ex-prob-b-or-d",
  "level": "2",
  "url": "sec-defining-probability.html#ex-prob-b-or-d",
  "type": "Checkpoint",
  "number": "3.1.13",
  "title": "",
  "body": "  In , you confirmed and from are disjoint. Compute the probability that event or event occurs.    Since and are disjoint events, use the Addition Rule: or .   "
},
{
  "id": "subsec-probabilities-not-disjoint-2",
  "level": "2",
  "url": "sec-defining-probability.html#subsec-probabilities-not-disjoint-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "suits face cards "
},
{
  "id": "fig-deck-of-cards",
  "level": "2",
  "url": "sec-defining-probability.html#fig-deck-of-cards",
  "type": "Figure",
  "number": "3.1.14",
  "title": "",
  "body": " Representations of the 52 unique cards in a deck.   "
},
{
  "id": "ex-diamond-face-card-prob",
  "level": "2",
  "url": "sec-defining-probability.html#ex-diamond-face-card-prob",
  "type": "Checkpoint",
  "number": "3.1.15",
  "title": "",
  "body": "  (a) What is the probability that a randomly selected card is a diamond? (b) What is the probability that a randomly selected card is a face card?    (a) There are 52 cards and 13 diamonds. If the cards are thoroughly shuffled, each card has an equal chance of being drawn, so the probability that a randomly selected card is a diamond is . (b) Likewise, there are 12 face cards, so .   "
},
{
  "id": "subsec-probabilities-not-disjoint-5",
  "level": "2",
  "url": "sec-defining-probability.html#subsec-probabilities-not-disjoint-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Venn diagrams "
},
{
  "id": "fig-cards-diamond-face-venn",
  "level": "2",
  "url": "sec-defining-probability.html#fig-cards-diamond-face-venn",
  "type": "Figure",
  "number": "3.1.16",
  "title": "",
  "body": " A Venn diagram for diamonds and face cards.   "
},
{
  "id": "subsec-probabilities-not-disjoint-7",
  "level": "2",
  "url": "sec-defining-probability.html#subsec-probabilities-not-disjoint-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "General Addition Rule "
},
{
  "id": "subsec-probabilities-not-disjoint-9",
  "level": "2",
  "url": "sec-defining-probability.html#subsec-probabilities-not-disjoint-9",
  "type": "Note",
  "number": "3.1.17",
  "title": "“or” is inclusive.",
  "body": " or is inclusive  When we write or in statistics, we mean and\/or unless we explicitly state otherwise. Thus, or occurs means , , or both and occur.  "
},
{
  "id": "ex-disjoint-implies-empty-intersection",
  "level": "2",
  "url": "sec-defining-probability.html#ex-disjoint-implies-empty-intersection",
  "type": "Checkpoint",
  "number": "3.1.18",
  "title": "",
  "body": "  (a) If and are disjoint, describe why this implies . (b) Using part (a), verify that the General Addition Rule simplifies to the simpler Addition Rule for disjoint events if and are disjoint.    (a) If and are disjoint, and can never occur simultaneously. (b) If and are disjoint, then the last term in the General Addition Rule formula is 0 (see part (a)) and we are left with the Addition Rule for disjoint events.   "
},
{
  "id": "ex-loans-venn",
  "level": "2",
  "url": "sec-defining-probability.html#ex-loans-venn",
  "type": "Checkpoint",
  "number": "3.1.19",
  "title": "",
  "body": "  In the loans data set describing 10,000 loans, 1495 loans were from joint applications (e.g. a couple applied together), 4789 applicants had a mortgage, and 950 had both of these characteristics. Create a Venn diagram for this setup.    Both the counts and corresponding probabilities (e.g. ) are shown. Notice that the number of loans represented in the left circle corresponds to , and the number represented in the right circle is .      "
},
{
  "id": "ex-loans-venn-prob",
  "level": "2",
  "url": "sec-defining-probability.html#ex-loans-venn-prob",
  "type": "Checkpoint",
  "number": "3.1.21",
  "title": "",
  "body": "  (a) Use your Venn diagram from the previous exercise to determine the probability a randomly drawn loan from the loans data set is from a joint application where the couple had a mortgage. (b) What is the probability that the loan had either of these attributes?    (a) The solution is represented by the intersection of the two circles: 0.095. (b) This is the sum of the three disjoint probabilities shown in the circles: (off by 0.001 due to a rounding error).   "
},
{
  "id": "subsec-probability-distributions-2",
  "level": "2",
  "url": "sec-defining-probability.html#subsec-probability-distributions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "probability distribution "
},
{
  "id": "fig-dice-prob",
  "level": "2",
  "url": "sec-defining-probability.html#fig-dice-prob",
  "type": "Figure",
  "number": "3.1.22",
  "title": "",
  "body": " Probability distribution for the sum of two dice.    Dice sum  2 3 4 5 6 7  8 9 10 11 12    Probability        "
},
{
  "id": "ex-us-household-income-dists",
  "level": "2",
  "url": "sec-defining-probability.html#ex-us-household-income-dists",
  "type": "Checkpoint",
  "number": "3.1.23",
  "title": "",
  "body": "   suggests three distributions for household income in the United States. Only one is correct. Which one must it be? What is wrong with the other two?    The probabilities of (a) do not sum to 1. The second probability in (b) is negative. This leaves (c), which sure enough satisfies the requirements of a distribution. One of the three was said to be the actual distribution of US household incomes, so it must be (c).   "
},
{
  "id": "fig-us-household-income-dists",
  "level": "2",
  "url": "sec-defining-probability.html#fig-us-household-income-dists",
  "type": "Figure",
  "number": "3.1.24",
  "title": "",
  "body": " Proposed distributions of US household incomes.    Income Range  $0-25k $25k-50k $50k-100k $100k+    (a)  0.18 0.39 0.33 0.16    (b)  0.38 -0.27 0.52 0.37    (c)  0.28 0.27 0.29 0.16    "
},
{
  "id": "fig-us-household-income-dist-bar",
  "level": "2",
  "url": "sec-defining-probability.html#fig-us-household-income-dist-bar",
  "type": "Figure",
  "number": "3.1.25",
  "title": "",
  "body": " The probability distribution of US household income.   "
},
{
  "id": "fig-dice-sum-dist",
  "level": "2",
  "url": "sec-defining-probability.html#fig-dice-sum-dist",
  "type": "Figure",
  "number": "3.1.26",
  "title": "",
  "body": " The probability distribution of the sum of two dice.   "
},
{
  "id": "subsec-complement-2",
  "level": "2",
  "url": "sec-defining-probability.html#subsec-complement-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sample space "
},
{
  "id": "subsec-complement-3",
  "level": "2",
  "url": "sec-defining-probability.html#subsec-complement-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complement "
},
{
  "id": "fig-complement-of-d",
  "level": "2",
  "url": "sec-defining-probability.html#fig-complement-of-d",
  "type": "Figure",
  "number": "3.1.27",
  "title": "",
  "body": " Event and its complement, . represents the sample space, which is the set of all possible outcomes.   "
},
{
  "id": "ex-complement-dice",
  "level": "2",
  "url": "sec-defining-probability.html#ex-complement-dice",
  "type": "Checkpoint",
  "number": "3.1.28",
  "title": "",
  "body": "  (a) Compute . (b) What is ?    (a) The outcomes are disjoint and each has probability , so the total probability is . (b) We can also see that . Since and are disjoint, .   "
},
{
  "id": "ex-complement-ab",
  "level": "2",
  "url": "sec-defining-probability.html#ex-complement-ab",
  "type": "Checkpoint",
  "number": "3.1.29",
  "title": "",
  "body": "  Events and are shown in . (a) Write out what and represent. (b) Compute and . (c) Compute and .    Brief solutions: (a) and . (b) Noting that each outcome is disjoint, add the individual outcome probabilities to get and . (c) and are disjoint, and the same is true of and . Therefore, and .   "
},
{
  "id": "ex-dice-sum-less-than-12",
  "level": "2",
  "url": "sec-defining-probability.html#ex-dice-sum-less-than-12",
  "type": "Checkpoint",
  "number": "3.1.30",
  "title": "",
  "body": "  Let represent the event where we roll two dice and their total is less than 12. (a) What does the event represent? (b) Determine from . (c) Determine .    (a) The complement of : when the total is equal to 12. (b) . (c) Use the probability of the complement from part (b), , and the equation for the complement: .   "
},
{
  "id": "ex-dice-sum-complements",
  "level": "2",
  "url": "sec-defining-probability.html#ex-dice-sum-complements",
  "type": "Checkpoint",
  "number": "3.1.31",
  "title": "",
  "body": "  Find the following probabilities for rolling two dice:    The sum of the dice is not 6.  The sum is at least 4. That is, determine the probability of the event .  The sum is no more than 10. That is, determine the probability of the event .      (a) First find , then use the complement: . (b) First find the complement, which requires much less effort: . Then calculate . (c) As before, finding the complement is the clever way to determine . First find . Then calculate .   "
},
{
  "id": "subsec-independence-2",
  "level": "2",
  "url": "sec-defining-probability.html#subsec-independence-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "independent "
},
{
  "id": "fig-indep-for-rolling-two-1s",
  "level": "2",
  "url": "sec-defining-probability.html#fig-indep-for-rolling-two-1s",
  "type": "Figure",
  "number": "3.1.32",
  "title": "",
  "body": " of the time, the first roll is a 1. Then of those times, the second roll will also be a 1.   "
},
{
  "id": "ex-three-dice",
  "level": "2",
  "url": "sec-defining-probability.html#ex-three-dice",
  "type": "Example",
  "number": "3.1.33",
  "title": "",
  "body": "  What if there was also a blue die independent of the other two? What is the probability of rolling the three dice and getting all 1s?    The same logic applies from . If of the time the white and red dice are both 1, then of those times the blue die will also be 1, so multiply:    "
},
{
  "id": "ex-two-handedness",
  "level": "2",
  "url": "sec-defining-probability.html#ex-two-handedness",
  "type": "Checkpoint",
  "number": "3.1.34",
  "title": "",
  "body": "  About 9% of people are left-handed. Suppose 2 people are selected at random from the U.S. population. Because the sample size of 2 is very small relative to the population, it is reasonable to assume these two people are independent. (a) What is the probability that both are left-handed? (b) What is the probability that both are right-handed?    (a) The probability the first person is left-handed is 0.09, which is the same for the second person. We apply the Multiplication Rule for independent processes to determine the probability that both will be left-handed: . (b) It is reasonable to assume the proportion of people who are ambidextrous (both right- and left-handed) is nearly 0, which results in . Using the same reasoning as in part (a), the probability that both will be right-handed is .   "
},
{
  "id": "ex-five-handedness",
  "level": "2",
  "url": "sec-defining-probability.html#ex-five-handedness",
  "type": "Checkpoint",
  "number": "3.1.35",
  "title": "",
  "body": "  Suppose 5 people are selected at random.    What is the probability that all are right-handed?  What is the probability that all are left-handed?  What is the probability that not all of the people are right-handed?      (a) The abbreviations RH and LH are used for right-handed and left-handed, respectively. Since each are independent, we apply the Multiplication Rule for independent processes: (b) Using the same reasoning as in (a), . (c) Use the complement, , to answer this question:    "
},
{
  "id": "ex-three-people-sex-handedness",
  "level": "2",
  "url": "sec-defining-probability.html#ex-three-people-sex-handedness",
  "type": "Checkpoint",
  "number": "3.1.36",
  "title": "",
  "body": "  Three people are selected at random.    What is the probability that the first person is male and right-handed?  What is the probability that the first two people are male and right-handed?  What is the probability that the third person is female and left-handed?  What is the probability that the first two people are male and right-handed and the third person is female and left-handed?      Brief answers are provided. (a) This can be written in probability notation as . (b) 0.207. (c) 0.045. (d) 0.0093.   "
},
{
  "id": "ex-heart-ace-independent",
  "level": "2",
  "url": "sec-defining-probability.html#ex-heart-ace-independent",
  "type": "Example",
  "number": "3.1.37",
  "title": "",
  "body": "  If we shuffle up a deck of cards and draw one, is the event that the card is a heart independent of the event that the card is an ace?    The probability the card is a heart is and the probability that it is an ace is . The probability the card is the ace of hearts is . We check whether is satisfied: Because the equation holds, the event that the card is a heart and the event that the card is an ace are independent events.   "
},
{
  "id": "sec-conditional-probability",
  "level": "1",
  "url": "sec-conditional-probability.html",
  "type": "Section",
  "number": "3.2",
  "title": "Conditional probability",
  "body": " Conditional probability   There can be rich relationships between two or more variables that are useful to understand. For example a car insurance company will consider information about a person's driving history to assess the risk that they will be responsible for an accident. These types of relationships are the realm of conditional probabilities.    Exploring probabilities with a contingency table  The photo_classify data set represents a classifier for a sample of 1822 photos from a photo sharing website. Data scientists have been working to improve a classifier for whether the photo is about fashion or not, and these 1822 photos represent a test for their classifier. Each photo gets two classifications: the first is called mach_learn and gives a classification from a machine learning (ML) system of either pred_fashion or pred_not . Each of these 1822 photos have also been classified carefully by a team of people, which we take to be the source of truth; this variable is called truth and takes values fashion and not . summarizes the results.   Contingency table summarizing the photo_classify data set.     truth      fashion  not  Total    mach_learn: pred_fashion  197  22  219    mach_learn: pred_not  112  1491  1603    Total  309  1513  1822      A Venn diagram using boxes for the photo_classify data set.      If a photo is actually about fashion, what is the chance the ML classifier correctly identified the photo as being about fashion?    We can estimate this probability using the data. Of the 309 fashion photos, the ML algorithm correctly classified 197 of the photos:       We sample a photo from the data set and learn the ML algorithm predicted this photo was not about fashion. What is the probability that it was incorrect and the photo is about fashion?    If the ML classifier suggests a photo is not about fashion, then it comes from the second row in the data set. Of these 1603 photos, 112 were actually about fashion:       Marginal and joint probabilities   includes row and column totals for each variable separately in the photo_classify data set. These totals represent marginal probabilities for the sample, which are the probabilities based on a single variable without regard to any other variables. For instance, a probability based solely on the mach_learn variable is a marginal probability: A probability of outcomes for two or more variables or processes is called a joint probability : It is common to substitute a comma for and in a joint probability, although using either the word and or a comma is acceptable.   Marginal and joint probabilities  If a probability is based on a single variable, it is a marginal probability . The probability of outcomes for two or more variables or processes is called a joint probability .   We use table proportions to summarize joint probabilities for the photo_classify sample. These proportions are computed by dividing each count by the table's total, 1822, to obtain the probabilities in . The joint probability distribution of the mach_learn and truth variables is shown in .   Probability table summarizing the photo_classify data set.     truth: fashion  truth: not  Total    mach_learn: pred_fashion  0.1081  0.0121  0.1202    mach_learn: pred_not  0.0615  0.8183  0.8798    Total  0.1696  0.8304  1.00      Joint probability distribution for the photo_classify data set.    Joint outcome  Probability    mach_learn is pred_fashion and truth is fashion  0.1081    mach_learn is pred_fashion and truth is not  0.0121    mach_learn is pred_not and truth is fashion  0.0615    mach_learn is pred_not and truth is not  0.8183    Total  1.0000       Verify represents a probability distribution: events are disjoint, all probabilities are non-negative, and the probabilities sum to 1.    Each of the four outcome combinations are disjoint, all probabilities are indeed non-negative, and the sum of the probabilities is .    We can compute marginal probabilities using joint probabilities in simple cases. For example, the probability a randomly selected photo from the data set is about fashion is found by summing the outcomes where truth takes value fashion :     Defining conditional probability  The ML classifier predicts whether a photo is about fashion, even if it is not perfect. We would like to better understand how to use information from a variable like mach_learn to improve our probability estimation of a second variable, which in this example is truth .  The probability that a random photo from the data set is about fashion is about 0.17. If we knew the machine learning classifier predicted the photo was about fashion, could we get a better estimate of the probability the photo is actually about fashion? Absolutely. To do so, we limit our view to only those 219 cases where the ML classifier predicted that the photo was about fashion and look at the fraction where the photo was actually about fashion: We call this a conditional probability because we computed the probability under a condition: the ML classifier prediction said the photo was about fashion.  There are two parts to a conditional probability, the outcome of interest and the condition . It is useful to think of the condition as information we know to be true, and this information usually can be described as a known outcome or event. We generally separate the text inside our probability notation into the outcome of interest and the condition with a vertical bar: The vertical bar is read as given .  In this equation, we computed the probability a photo was about fashion based on the condition that the ML algorithm predicted it was about fashion as a fraction: We considered only those cases that met the condition ( mach_learn is pred_fashion ) and then we computed the ratio of those cases that satisfied our outcome of interest (photo was actually about fashion).  Frequently, marginal and joint probabilities are provided instead of count data. For example, disease rates are commonly listed in percentages rather than in a count format. We would like to be able to compute conditional probabilities even when no counts are available, and we use the previous equation as a template to understand this technique.  If we were provided only the information in , i.e. only probability data, then if we took a sample of 1000 photos, we would anticipate about 12.0% or would be predicted to be about fashion. Similarly, we would expect about 10.8% or to meet both the information criteria and represent our outcome of interest. Then the conditional probability can be computed as: Here we are examining exactly the fraction of two probabilities, 0.108 and 0.120, which we can write as: The fraction of these probabilities is an example of the general formula for conditional probability.   Conditional probability  The conditional probability of outcome given condition is computed as:      (a) Write out the following statement in conditional probability notation: The probability that the ML prediction was correct, if the photo was about fashion . Here the condition is now based on the photo's truth status, not the ML algorithm. (b) Determine the probability from part (a). may be helpful.    (a) (b) The equation for conditional probability indicates we should first find and . Then the ratio represents the conditional probability: .      (a) Determine the probability that the algorithm is incorrect if it is known the photo is about fashion. (b) Using part (a) and the previous exercise, compute the sum of the two conditional probabilities. (c) Provide an intuitive argument to explain why this sum is 1.    (a) (b) The total equals 1. (c) Under the condition the photo is about fashion, the ML algorithm must have either predicted it was about fashion or predicted it was not about fashion. The complement still works for conditional probabilities, provided the probabilities are conditioned on the same information.      Smallpox in Boston, 1721  The smallpox data set provides a sample of 6,224 individuals from the year 1721 who were exposed to smallpox in Boston. Doctors at the time believed that inoculation, which involves exposing a person to the disease in a controlled form, could reduce the likelihood of death.  Each case represents one person with two variables: inoculated and result . The variable inoculated takes two levels: yes or no , indicating whether the person was inoculated or not. The variable result has outcomes lived or died . These data are summarized in and .   Contingency table for the smallpox data set.     inoculated      yes  no  Total    lived  238  5136  5374    died  6  844  850    Total  244  5980  6224      Table proportions for the smallpox data, computed by dividing each count by the table total, 6224.     inoculated      yes  no  Total    lived  0.0382  0.8252  0.8634    died  0.0010  0.1356  0.1366    Total  0.0392  0.9608  1.0000       Write out, in formal notation, the probability a randomly selected person who was not inoculated died from smallpox, and find this probability.           Determine the probability that an inoculated person died from smallpox. How does this result compare with the previous exercise?     (If we avoided rounding errors, we'd get ). The death rate for individuals who were inoculated is only about 1 in 40 while the death rate is about 1 in 7 for those who were not inoculated.      The people of Boston self-selected whether or not to be inoculated. (a) Is this study observational or was this an experiment? (b) Can we infer any causal connection using these data? (c) What are some potential confounding variables that might influence whether someone lived or died and also affect whether that person was inoculated?    Brief answers: (a) Observational. (b) No, we cannot infer causation from this observational study. (c) Accessibility to the latest and best medical care. There are other valid answers for part (c).      General multiplication rule  Section 3.1 on Independence introduced the Multiplication Rule for independent processes. Here we provide the General Multiplication Rule for events that might not be independent.   General Multiplication Rule  If and represent two outcomes or events, then It is useful to think of as the outcome of interest and as the condition.   This General Multiplication Rule is simply a rearrangement of the conditional probability equation.    Consider the smallpox data set. Suppose we are given only two pieces of information: 96.08% of residents were not inoculated, and 85.88% of the residents who were not inoculated ended up surviving. How could we compute the probability that a resident was not inoculated and lived?    We will compute our answer using the General Multiplication Rule and then verify it using . We want to determine and we are given that and .  Among the 96.08% of people who were not inoculated, 85.88% survived: This is equivalent to the General Multiplication Rule. We can confirm this probability in at the intersection of no and lived (with a small rounding error).      Use and to determine the probability that a person was both inoculated and lived.    The answer is 0.0382, which can be verified using .      If 97.54% of the inoculated people lived, what proportion of inoculated people must have died?    There were only two possible outcomes: lived or died. This means that of the people who were inoculated died.     Sum of conditional probabilities  Let represent all the disjoint outcomes for a variable or process. Then if is an event, possibly for another variable or process, we have: The rule for complements also holds when an event and its complement are conditioned on the same information:      Based on the probabilities computed above, does it appear that inoculation is effective at reducing the risk of death from smallpox?    The samples are large relative to the difference in death rates for the inoculated and not inoculated groups, so it seems there is an association between inoculated and result . However, this is an observational study and we cannot be sure if there is a causal connection. (Further research has shown that inoculation is effective at reducing death rates.)      Independence considerations in conditional probability  If two events are independent, then knowing the outcome of one should provide no information about the other. We can show this is mathematically true using conditional probabilities.    Let and represent the outcomes of rolling two dice.    What is the probability that the first die, , is 1?  What is the probability that both and are 1?  Use the formula for conditional probability to compute .  What is ? Is this different from the answer from part (c)? Explain.      Brief solutions: (a) . (b) . (c) . (d) The probability is the same as in part (c): . The probability that was unchanged by knowledge about , which makes sense as and are independent.    We can show in the above exercise that the conditioning information has no influence by using the Multiplication Rule for independence processes:     Ron is watching a roulette table in a casino and notices that the last five outcomes were black. He figures that the chances of getting black six times in a row is very small (about 1\/64) and puts his paycheck on red. What is wrong with his reasoning?    He has forgotten that the next roulette spin is independent of the previous spins. This fallacy, known as the gambler's fallacy , is commonly exploited by casinos which post the last several outcomes of betting games.      Tree diagrams   Tree diagrams are a tool to organize outcomes and probabilities around the structure of the data. They are most useful when two or more processes occur in a sequence and each process is conditioned on its predecessors.  The smallpox data fit this description. We see the population as split by inoculation : yes and no. Following this split, survival rates were observed for each group. This structure is reflected in the tree diagram shown in .   A tree diagram of the smallpox data set.    Tree diagrams are annotated with marginal and conditional probabilities. This tree diagram splits the smallpox data by inoculation into the yes and no groups with respective marginal probabilities 0.0392 and 0.9608. The secondary branches are conditioned on the first, so we assign conditional probabilities to these branches. We may construct joint probabilities at the end of each branch in our tree by multiplying the numbers we come across as we move from left to right. These joint probabilities are computed using the General Multiplication Rule:     Consider the midterm and final for a statistics class. Suppose 13% of students earned an A on the midterm. Of those students who earned an A on the midterm, 47% received an A on the final, and 11% of the students who earned lower than an A on the midterm received an A on the final. You randomly pick up a final exam and notice the student received an A. What is the probability that this student earned an A on the midterm?    The end-goal is to find . To calculate this conditional probability, we need and . Since we aren't sure how to proceed, it is useful to organize the information into a tree diagram (shown below).     Variables provided with marginal probabilities are often used to create the tree's primary branches; in this case, the marginal probabilities are provided for midterm grades. The final grades, which correspond to the conditional probabilities provided, will be shown on the secondary branches.  With the tree diagram constructed, we may compute the required probabilities: The marginal probability was calculated by adding up all the joint probabilities corresponding to final = A. We may now take the ratio of the two probabilities: The probability the student also earned an A on the midterm is about 0.39.      After an introductory statistics course, 78% of students can successfully construct tree diagrams. Of those who can construct tree diagrams, 97% passed, while only 57% of those students who could not construct tree diagrams passed. (a) Organize this information into a tree diagram. (b) What is the probability that a randomly selected student passed? (c) Compute the probability a student is able to construct a tree diagram if it is known that she passed.    (a) The tree diagram is provided below. (b) Identify which two joint probabilities represent students who passed, and add them: . (c) .         Bayes' Theorem  In many instances, we are given a conditional probability of the form but we would really like to know the inverted conditional probability: . Tree diagrams can be used to find the second conditional probability when given the first. However, sometimes it is not possible to draw the scenario in a tree diagram. In these cases, we can apply a very useful and general formula: Bayes' Theorem.    In Canada, about 0.35% of women over 40 will develop breast cancer in any given year. A common screening test for cancer is the mammogram, but this test is not perfect. In about 11% of patients with breast cancer, the test gives a false negative : it indicates a woman does not have breast cancer when she does have breast cancer. Similarly, the test gives a false positive in 7% of patients who do not have breast cancer: it indicates these patients have breast cancer when they actually do not. If we tested a random woman over 40 for breast cancer using a mammogram and the test came back positive — that is, the test suggested the patient has cancer — what is the probability that the patient actually has breast cancer?    Notice that we are given sufficient information to quickly compute the probability of testing positive if a woman has breast cancer ( ). However, we seek the inverted probability of cancer given a positive test result.  This inverted probability can be broken into two pieces:   We can construct a tree diagram to organize these probabilities:     The probability the patient has breast cancer and the mammogram is positive is:   The probability of a positive test result is the sum of the two corresponding scenarios:   Then if the mammogram screening is positive for a patient, the probability the patient has breast cancer is: That is, even if a patient has a positive mammogram screening, there is still only about a 4% chance that she has breast cancer.     highlights why doctors often run more tests regardless of a first positive test result. When a medical condition is rare, a single positive test isn't generally definitive.  Consider again the last equation of . Using the tree diagram, we can see that the numerator is: The denominator—the probability the screening was positive—is the sum of probabilities for each positive screening scenario:    Bayes' Theorem: inverting probabilities  Consider the following conditional probability for variable 1 and variable 2: Bayes' Theorem states that this conditional probability can be identified as: where represent all other possible outcomes of the first variable.   Bayes' Theorem is a generalization of what we have done using tree diagrams. The numerator identifies the probability of getting both and . The denominator is the marginal probability of getting . This bottom component of the fraction appears long and complicated since we have to add up probabilities from all of the different ways to get . We always completed this step when using tree diagrams. However, we usually did it in a separate step so it didn't seem as complex.  To apply Bayes' Theorem correctly, there are two preparatory steps:    First identify the marginal probabilities of each possible outcome of the first variable: .  Then identify the probability of the outcome , conditioned on each possible scenario for the first variable: .    Once each of these probabilities are identified, they can be applied directly within the formula. Bayes' Theorem tends to be a good option when there are so many scenarios that drawing a tree diagram would be complex.    Jose visits campus every Thursday evening. However, some days the parking garage is full, often due to college events. There are academic events on 35% of evenings, sporting events on 20% of evenings, and no events on 45% of evenings. When there is an academic event, the garage fills up about 25% of the time, and it fills up 70% of evenings with sporting events. On evenings when there are no events, it only fills up about 5% of the time. If Jose comes to campus and finds the garage full, what is the probability that there is a sporting event? Use a tree diagram to solve this problem.    The tree diagram with three primary branches is shown below. Next, we identify two probabilities from the tree diagram: (1) The probability that there is a sporting event and the garage is full: 0.14. (2) The probability the garage is full: . Then the solution is the ratio of these probabilities: . If the garage is full, there is a 56% probability that there is a sporting event.         Here we solve the same problem presented in the previous exercise, except this time we use Bayes' Theorem.    The outcome of interest is whether there is a sporting event (call this ), and the condition is that the lot is full ( ). Let represent an academic event and represent there being no event on campus. Then the given probabilities can be written as:   Bayes' Theorem can be used to compute the probability of a sporting event ( ) under the condition that the parking lot is full ( ): Based on the information that the garage is full, there is a 56% probability that a sporting event is being held on campus that evening.      Use the information in and to verify the probability that there is an academic event conditioned on the parking lot being full is 0.35.    Short answer:       In and , you found that if the parking lot is full, the probability there is a sporting event is 0.56 and the probability there is an academic event is 0.35. Using this information, compute .    Each probability is conditioned on the same information that the garage is full, so the complement may be used: .    The last several exercises offered a way to update our belief about whether there is a sporting event, academic event, or no event going on at the school based on the information that the parking lot was full. This strategy of updating beliefs using Bayes' Theorem is actually the foundation of an entire section of statistics called Bayesian statistics . While Bayesian statistics is very important and useful, we will not have time to cover much more of it in this book.   "
},
{
  "id": "fig-contingency-fashion",
  "level": "2",
  "url": "sec-conditional-probability.html#fig-contingency-fashion",
  "type": "Figure",
  "number": "3.2.1",
  "title": "",
  "body": " Contingency table summarizing the photo_classify data set.     truth      fashion  not  Total    mach_learn: pred_fashion  197  22  219    mach_learn: pred_not  112  1491  1603    Total  309  1513  1822    "
},
{
  "id": "fig-photo-classify-venn",
  "level": "2",
  "url": "sec-conditional-probability.html#fig-photo-classify-venn",
  "type": "Figure",
  "number": "3.2.2",
  "title": "",
  "body": " A Venn diagram using boxes for the photo_classify data set.   "
},
{
  "id": "ex-ml-classifier-accuracy",
  "level": "2",
  "url": "sec-conditional-probability.html#ex-ml-classifier-accuracy",
  "type": "Example",
  "number": "3.2.3",
  "title": "",
  "body": "  If a photo is actually about fashion, what is the chance the ML classifier correctly identified the photo as being about fashion?    We can estimate this probability using the data. Of the 309 fashion photos, the ML algorithm correctly classified 197 of the photos:    "
},
{
  "id": "ex-ml-false-negative",
  "level": "2",
  "url": "sec-conditional-probability.html#ex-ml-false-negative",
  "type": "Example",
  "number": "3.2.4",
  "title": "",
  "body": "  We sample a photo from the data set and learn the ML algorithm predicted this photo was not about fashion. What is the probability that it was incorrect and the photo is about fashion?    If the ML classifier suggests a photo is not about fashion, then it comes from the second row in the data set. Of these 1603 photos, 112 were actually about fashion:    "
},
{
  "id": "subsec-marginal-joint-probabilities-2",
  "level": "2",
  "url": "sec-conditional-probability.html#subsec-marginal-joint-probabilities-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "marginal probabilities joint probability "
},
{
  "id": "marginal-joint-def-2",
  "level": "2",
  "url": "sec-conditional-probability.html#marginal-joint-def-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "marginal probability joint probability "
},
{
  "id": "subsec-marginal-joint-probabilities-4",
  "level": "2",
  "url": "sec-conditional-probability.html#subsec-marginal-joint-probabilities-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "table proportions "
},
{
  "id": "fig-photo-classify-prob-table",
  "level": "2",
  "url": "sec-conditional-probability.html#fig-photo-classify-prob-table",
  "type": "Figure",
  "number": "3.2.5",
  "title": "",
  "body": " Probability table summarizing the photo_classify data set.     truth: fashion  truth: not  Total    mach_learn: pred_fashion  0.1081  0.0121  0.1202    mach_learn: pred_not  0.0615  0.8183  0.8798    Total  0.1696  0.8304  1.00    "
},
{
  "id": "fig-photo-classify-dist",
  "level": "2",
  "url": "sec-conditional-probability.html#fig-photo-classify-dist",
  "type": "Figure",
  "number": "3.2.6",
  "title": "",
  "body": " Joint probability distribution for the photo_classify data set.    Joint outcome  Probability    mach_learn is pred_fashion and truth is fashion  0.1081    mach_learn is pred_fashion and truth is not  0.0121    mach_learn is pred_not and truth is fashion  0.0615    mach_learn is pred_not and truth is not  0.8183    Total  1.0000    "
},
{
  "id": "ex-verify-photo-dist",
  "level": "2",
  "url": "sec-conditional-probability.html#ex-verify-photo-dist",
  "type": "Checkpoint",
  "number": "3.2.7",
  "title": "",
  "body": "  Verify represents a probability distribution: events are disjoint, all probabilities are non-negative, and the probabilities sum to 1.    Each of the four outcome combinations are disjoint, all probabilities are indeed non-negative, and the sum of the probabilities is .   "
},
{
  "id": "subsec-defining-conditional-probability-3",
  "level": "2",
  "url": "sec-conditional-probability.html#subsec-defining-conditional-probability-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "conditional probability "
},
{
  "id": "subsec-defining-conditional-probability-4",
  "level": "2",
  "url": "sec-conditional-probability.html#subsec-defining-conditional-probability-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "outcome of interest condition "
},
{
  "id": "ex-conditional-ml-correct",
  "level": "2",
  "url": "sec-conditional-probability.html#ex-conditional-ml-correct",
  "type": "Checkpoint",
  "number": "3.2.8",
  "title": "",
  "body": "  (a) Write out the following statement in conditional probability notation: The probability that the ML prediction was correct, if the photo was about fashion . Here the condition is now based on the photo's truth status, not the ML algorithm. (b) Determine the probability from part (a). may be helpful.    (a) (b) The equation for conditional probability indicates we should first find and . Then the ratio represents the conditional probability: .   "
},
{
  "id": "ex-cond-prob-sum-to-1",
  "level": "2",
  "url": "sec-conditional-probability.html#ex-cond-prob-sum-to-1",
  "type": "Checkpoint",
  "number": "3.2.9",
  "title": "",
  "body": "  (a) Determine the probability that the algorithm is incorrect if it is known the photo is about fashion. (b) Using part (a) and the previous exercise, compute the sum of the two conditional probabilities. (c) Provide an intuitive argument to explain why this sum is 1.    (a) (b) The total equals 1. (c) Under the condition the photo is about fashion, the ML algorithm must have either predicted it was about fashion or predicted it was not about fashion. The complement still works for conditional probabilities, provided the probabilities are conditioned on the same information.   "
},
{
  "id": "fig-smallpox-contingency",
  "level": "2",
  "url": "sec-conditional-probability.html#fig-smallpox-contingency",
  "type": "Figure",
  "number": "3.2.10",
  "title": "",
  "body": " Contingency table for the smallpox data set.     inoculated      yes  no  Total    lived  238  5136  5374    died  6  844  850    Total  244  5980  6224    "
},
{
  "id": "fig-smallpox-prob",
  "level": "2",
  "url": "sec-conditional-probability.html#fig-smallpox-prob",
  "type": "Figure",
  "number": "3.2.11",
  "title": "",
  "body": " Table proportions for the smallpox data, computed by dividing each count by the table total, 6224.     inoculated      yes  no  Total    lived  0.0382  0.8252  0.8634    died  0.0010  0.1356  0.1366    Total  0.0392  0.9608  1.0000    "
},
{
  "id": "ex-prob-died-not-inoculated",
  "level": "2",
  "url": "sec-conditional-probability.html#ex-prob-died-not-inoculated",
  "type": "Checkpoint",
  "number": "3.2.12",
  "title": "",
  "body": "  Write out, in formal notation, the probability a randomly selected person who was not inoculated died from smallpox, and find this probability.        "
},
{
  "id": "ex-prob-died-inoculated",
  "level": "2",
  "url": "sec-conditional-probability.html#ex-prob-died-inoculated",
  "type": "Checkpoint",
  "number": "3.2.13",
  "title": "",
  "body": "  Determine the probability that an inoculated person died from smallpox. How does this result compare with the previous exercise?     (If we avoided rounding errors, we'd get ). The death rate for individuals who were inoculated is only about 1 in 40 while the death rate is about 1 in 7 for those who were not inoculated.   "
},
{
  "id": "ex-smallpox-obs-exp",
  "level": "2",
  "url": "sec-conditional-probability.html#ex-smallpox-obs-exp",
  "type": "Checkpoint",
  "number": "3.2.14",
  "title": "",
  "body": "  The people of Boston self-selected whether or not to be inoculated. (a) Is this study observational or was this an experiment? (b) Can we infer any causal connection using these data? (c) What are some potential confounding variables that might influence whether someone lived or died and also affect whether that person was inoculated?    Brief answers: (a) Observational. (b) No, we cannot infer causation from this observational study. (c) Accessibility to the latest and best medical care. There are other valid answers for part (c).   "
},
{
  "id": "subsec-general-multiplication-rule-2",
  "level": "2",
  "url": "sec-conditional-probability.html#subsec-general-multiplication-rule-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "General Multiplication Rule "
},
{
  "id": "ex-smallpox-mult-rule",
  "level": "2",
  "url": "sec-conditional-probability.html#ex-smallpox-mult-rule",
  "type": "Example",
  "number": "3.2.15",
  "title": "",
  "body": "  Consider the smallpox data set. Suppose we are given only two pieces of information: 96.08% of residents were not inoculated, and 85.88% of the residents who were not inoculated ended up surviving. How could we compute the probability that a resident was not inoculated and lived?    We will compute our answer using the General Multiplication Rule and then verify it using . We want to determine and we are given that and .  Among the 96.08% of people who were not inoculated, 85.88% survived: This is equivalent to the General Multiplication Rule. We can confirm this probability in at the intersection of no and lived (with a small rounding error).   "
},
{
  "id": "ex-inoculated-lived",
  "level": "2",
  "url": "sec-conditional-probability.html#ex-inoculated-lived",
  "type": "Checkpoint",
  "number": "3.2.16",
  "title": "",
  "body": "  Use and to determine the probability that a person was both inoculated and lived.    The answer is 0.0382, which can be verified using .   "
},
{
  "id": "ex-inoculated-died-pct",
  "level": "2",
  "url": "sec-conditional-probability.html#ex-inoculated-died-pct",
  "type": "Checkpoint",
  "number": "3.2.17",
  "title": "",
  "body": "  If 97.54% of the inoculated people lived, what proportion of inoculated people must have died?    There were only two possible outcomes: lived or died. This means that of the people who were inoculated died.   "
},
{
  "id": "ex-inoculation-effective",
  "level": "2",
  "url": "sec-conditional-probability.html#ex-inoculation-effective",
  "type": "Checkpoint",
  "number": "3.2.18",
  "title": "",
  "body": "  Based on the probabilities computed above, does it appear that inoculation is effective at reducing the risk of death from smallpox?    The samples are large relative to the difference in death rates for the inoculated and not inoculated groups, so it seems there is an association between inoculated and result . However, this is an observational study and we cannot be sure if there is a causal connection. (Further research has shown that inoculation is effective at reducing death rates.)   "
},
{
  "id": "ex-dice-independence",
  "level": "2",
  "url": "sec-conditional-probability.html#ex-dice-independence",
  "type": "Checkpoint",
  "number": "3.2.19",
  "title": "",
  "body": "  Let and represent the outcomes of rolling two dice.    What is the probability that the first die, , is 1?  What is the probability that both and are 1?  Use the formula for conditional probability to compute .  What is ? Is this different from the answer from part (c)? Explain.      Brief solutions: (a) . (b) . (c) . (d) The probability is the same as in part (c): . The probability that was unchanged by knowledge about , which makes sense as and are independent.   "
},
{
  "id": "ex-gamblers-fallacy",
  "level": "2",
  "url": "sec-conditional-probability.html#ex-gamblers-fallacy",
  "type": "Checkpoint",
  "number": "3.2.20",
  "title": "",
  "body": "  Ron is watching a roulette table in a casino and notices that the last five outcomes were black. He figures that the chances of getting black six times in a row is very small (about 1\/64) and puts his paycheck on red. What is wrong with his reasoning?    He has forgotten that the next roulette spin is independent of the previous spins. This fallacy, known as the gambler's fallacy , is commonly exploited by casinos which post the last several outcomes of betting games.   "
},
{
  "id": "subsec-tree-diagrams-2",
  "level": "2",
  "url": "sec-conditional-probability.html#subsec-tree-diagrams-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Tree diagrams "
},
{
  "id": "fig-smallpox-tree",
  "level": "2",
  "url": "sec-conditional-probability.html#fig-smallpox-tree",
  "type": "Figure",
  "number": "3.2.21",
  "title": "",
  "body": " A tree diagram of the smallpox data set.   "
},
{
  "id": "ex-test-scores-tree",
  "level": "2",
  "url": "sec-conditional-probability.html#ex-test-scores-tree",
  "type": "Example",
  "number": "3.2.22",
  "title": "",
  "body": "  Consider the midterm and final for a statistics class. Suppose 13% of students earned an A on the midterm. Of those students who earned an A on the midterm, 47% received an A on the final, and 11% of the students who earned lower than an A on the midterm received an A on the final. You randomly pick up a final exam and notice the student received an A. What is the probability that this student earned an A on the midterm?    The end-goal is to find . To calculate this conditional probability, we need and . Since we aren't sure how to proceed, it is useful to organize the information into a tree diagram (shown below).     Variables provided with marginal probabilities are often used to create the tree's primary branches; in this case, the marginal probabilities are provided for midterm grades. The final grades, which correspond to the conditional probabilities provided, will be shown on the secondary branches.  With the tree diagram constructed, we may compute the required probabilities: The marginal probability was calculated by adding up all the joint probabilities corresponding to final = A. We may now take the ratio of the two probabilities: The probability the student also earned an A on the midterm is about 0.39.   "
},
{
  "id": "ex-tree-diagram-pass",
  "level": "2",
  "url": "sec-conditional-probability.html#ex-tree-diagram-pass",
  "type": "Checkpoint",
  "number": "3.2.24",
  "title": "",
  "body": "  After an introductory statistics course, 78% of students can successfully construct tree diagrams. Of those who can construct tree diagrams, 97% passed, while only 57% of those students who could not construct tree diagrams passed. (a) Organize this information into a tree diagram. (b) What is the probability that a randomly selected student passed? (c) Compute the probability a student is able to construct a tree diagram if it is known that she passed.    (a) The tree diagram is provided below. (b) Identify which two joint probabilities represent students who passed, and add them: . (c) .      "
},
{
  "id": "ex-mammogram",
  "level": "2",
  "url": "sec-conditional-probability.html#ex-mammogram",
  "type": "Example",
  "number": "3.2.26",
  "title": "",
  "body": "  In Canada, about 0.35% of women over 40 will develop breast cancer in any given year. A common screening test for cancer is the mammogram, but this test is not perfect. In about 11% of patients with breast cancer, the test gives a false negative : it indicates a woman does not have breast cancer when she does have breast cancer. Similarly, the test gives a false positive in 7% of patients who do not have breast cancer: it indicates these patients have breast cancer when they actually do not. If we tested a random woman over 40 for breast cancer using a mammogram and the test came back positive — that is, the test suggested the patient has cancer — what is the probability that the patient actually has breast cancer?    Notice that we are given sufficient information to quickly compute the probability of testing positive if a woman has breast cancer ( ). However, we seek the inverted probability of cancer given a positive test result.  This inverted probability can be broken into two pieces:   We can construct a tree diagram to organize these probabilities:     The probability the patient has breast cancer and the mammogram is positive is:   The probability of a positive test result is the sum of the two corresponding scenarios:   Then if the mammogram screening is positive for a patient, the probability the patient has breast cancer is: That is, even if a patient has a positive mammogram screening, there is still only about a 4% chance that she has breast cancer.   "
},
{
  "id": "ex-parking-garage-tree",
  "level": "2",
  "url": "sec-conditional-probability.html#ex-parking-garage-tree",
  "type": "Checkpoint",
  "number": "3.2.28",
  "title": "",
  "body": "  Jose visits campus every Thursday evening. However, some days the parking garage is full, often due to college events. There are academic events on 35% of evenings, sporting events on 20% of evenings, and no events on 45% of evenings. When there is an academic event, the garage fills up about 25% of the time, and it fills up 70% of evenings with sporting events. On evenings when there are no events, it only fills up about 5% of the time. If Jose comes to campus and finds the garage full, what is the probability that there is a sporting event? Use a tree diagram to solve this problem.    The tree diagram with three primary branches is shown below. Next, we identify two probabilities from the tree diagram: (1) The probability that there is a sporting event and the garage is full: 0.14. (2) The probability the garage is full: . Then the solution is the ratio of these probabilities: . If the garage is full, there is a 56% probability that there is a sporting event.      "
},
{
  "id": "ex-bayes-parking",
  "level": "2",
  "url": "sec-conditional-probability.html#ex-bayes-parking",
  "type": "Example",
  "number": "3.2.30",
  "title": "",
  "body": "  Here we solve the same problem presented in the previous exercise, except this time we use Bayes' Theorem.    The outcome of interest is whether there is a sporting event (call this ), and the condition is that the lot is full ( ). Let represent an academic event and represent there being no event on campus. Then the given probabilities can be written as:   Bayes' Theorem can be used to compute the probability of a sporting event ( ) under the condition that the parking lot is full ( ): Based on the information that the garage is full, there is a 56% probability that a sporting event is being held on campus that evening.   "
},
{
  "id": "ex-parking-academic-event",
  "level": "2",
  "url": "sec-conditional-probability.html#ex-parking-academic-event",
  "type": "Checkpoint",
  "number": "3.2.31",
  "title": "",
  "body": "  Use the information in and to verify the probability that there is an academic event conditioned on the parking lot being full is 0.35.    Short answer:    "
},
{
  "id": "ex-parking-no-event",
  "level": "2",
  "url": "sec-conditional-probability.html#ex-parking-no-event",
  "type": "Checkpoint",
  "number": "3.2.32",
  "title": "",
  "body": "  In and , you found that if the parking lot is full, the probability there is a sporting event is 0.56 and the probability there is an academic event is 0.35. Using this information, compute .    Each probability is conditioned on the same information that the garage is full, so the complement may be used: .   "
},
{
  "id": "subsec-bayes-theorem-15",
  "level": "2",
  "url": "sec-conditional-probability.html#subsec-bayes-theorem-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Bayesian statistics "
},
{
  "id": "sec-sampling-small-population",
  "level": "1",
  "url": "sec-sampling-small-population.html",
  "type": "Section",
  "number": "3.3",
  "title": "Sampling from a small population",
  "body": " Sampling from a small population   When we sample observations from a population, usually we're only sampling a small fraction of the possible individuals or cases. However, sometimes our sample size is large enough or the population is small enough that we sample more than 10% of a population without replacement (meaning we do not have a chance of sampling the same cases twice). Sampling such a notable fraction of a population can be important for how we analyze the sample.    Selecting a student at random   Professors sometimes select a student at random to answer a question. If each student has an equal chance of being selected and there are 15 people in your class, what is the chance that she will pick you for the next question?    If there are 15 people to ask and none are skipping class, then the probability is , or about 0.067.     Three questions without replacement   If the professor asks 3 questions, what is the probability that you will not be selected? Assume that she will not pick the same person twice in a given lecture.    For the first question, she will pick someone else with probability . When she asks the second question, she only has 14 people who have not yet been asked. Thus, if you were not picked on the first question, the probability you are again not picked is . Similarly, the probability you are again not picked on the third question is , and the probability of not being picked for any of the three questions is       What rule permitted us to multiply the probabilities in ?    The three probabilities we computed were actually one marginal probability, , and two conditional probabilities: Using the General Multiplication Rule, the product of these three probabilities is the probability of not being picked in 3 questions.     Three questions with replacement   Suppose the professor randomly picks without regard to who she already selected, i.e. students can be picked more than once. What is the probability that you will not be picked for any of the three questions?    Each pick is independent, and the probability of not being picked for any individual question is . Thus, we can use the Multiplication Rule for independent processes. You have a slightly higher chance of not being picked compared to when she picked a new person for each question. However, you now may be picked more than once.      Under the setup of , what is the probability of being picked to answer all three questions?         If we sample from a small population without replacement, we no longer have independence between our observations. In , the probability of not being picked for the second question was conditioned on the event that you were not picked for the first question. In , the professor sampled her students with replacement: she repeatedly sampled the entire class without regard to who she already picked.    Your department is holding a raffle. They sell 30 tickets and offer seven prizes.  They place the tickets in a hat and draw one for each prize. The tickets are sampled without replacement, i.e. the selected tickets are not placed back in the hat. What is the probability of winning a prize if you buy one ticket?  What if the tickets are sampled with replacement?      (a) First determine the probability of not winning. The tickets are sampled without replacement, which means the probability you do not win on the first draw is , for the second, , and for the seventh. The probability you win no prize is the product of these separate probabilities: . That is, the probability of winning a prize is .  (b) When the tickets are sampled with replacement, there are seven independent draws. Again we first find the probability of not winning a prize: . Thus, the probability of winning (at least) one prize when drawing with replacement is 0.211.      Compare your answers in . How much influence does the sampling method have on your chances of winning a prize?    There is about a 10% larger chance of winning a prize when using sampling without replacement. However, at most one prize may be won under this sampling procedure.    Had we repeated with 300 tickets instead of 30, we would have found something interesting: the results would be nearly identical. The probability would be 0.0233 without replacement and 0.0231 with replacement. When the sample size is only a small fraction of the population (under 10%), observations are nearly independent even when sampling without replacement.  "
},
{
  "id": "ex-professor-select-student",
  "level": "2",
  "url": "sec-sampling-small-population.html#ex-professor-select-student",
  "type": "Example",
  "number": "3.3.1",
  "title": "Selecting a student at random.",
  "body": " Selecting a student at random   Professors sometimes select a student at random to answer a question. If each student has an equal chance of being selected and there are 15 people in your class, what is the chance that she will pick you for the next question?    If there are 15 people to ask and none are skipping class, then the probability is , or about 0.067.   "
},
{
  "id": "ex-3-questions-wo-replacement",
  "level": "2",
  "url": "sec-sampling-small-population.html#ex-3-questions-wo-replacement",
  "type": "Example",
  "number": "3.3.2",
  "title": "Three questions without replacement.",
  "body": " Three questions without replacement   If the professor asks 3 questions, what is the probability that you will not be selected? Assume that she will not pick the same person twice in a given lecture.    For the first question, she will pick someone else with probability . When she asks the second question, she only has 14 people who have not yet been asked. Thus, if you were not picked on the first question, the probability you are again not picked is . Similarly, the probability you are again not picked on the third question is , and the probability of not being picked for any of the three questions is    "
},
{
  "id": "ex-rule-multiply-probs",
  "level": "2",
  "url": "sec-sampling-small-population.html#ex-rule-multiply-probs",
  "type": "Checkpoint",
  "number": "3.3.3",
  "title": "",
  "body": "  What rule permitted us to multiply the probabilities in ?    The three probabilities we computed were actually one marginal probability, , and two conditional probabilities: Using the General Multiplication Rule, the product of these three probabilities is the probability of not being picked in 3 questions.   "
},
{
  "id": "ex-3-questions-w-replacement",
  "level": "2",
  "url": "sec-sampling-small-population.html#ex-3-questions-w-replacement",
  "type": "Example",
  "number": "3.3.4",
  "title": "Three questions with replacement.",
  "body": " Three questions with replacement   Suppose the professor randomly picks without regard to who she already selected, i.e. students can be picked more than once. What is the probability that you will not be picked for any of the three questions?    Each pick is independent, and the probability of not being picked for any individual question is . Thus, we can use the Multiplication Rule for independent processes. You have a slightly higher chance of not being picked compared to when she picked a new person for each question. However, you now may be picked more than once.   "
},
{
  "id": "ex-picked-all-three",
  "level": "2",
  "url": "sec-sampling-small-population.html#ex-picked-all-three",
  "type": "Checkpoint",
  "number": "3.3.5",
  "title": "",
  "body": "  Under the setup of , what is the probability of being picked to answer all three questions?        "
},
{
  "id": "ex-raffle-30-tickets",
  "level": "2",
  "url": "sec-sampling-small-population.html#ex-raffle-30-tickets",
  "type": "Checkpoint",
  "number": "3.3.6",
  "title": "",
  "body": "  Your department is holding a raffle. They sell 30 tickets and offer seven prizes.  They place the tickets in a hat and draw one for each prize. The tickets are sampled without replacement, i.e. the selected tickets are not placed back in the hat. What is the probability of winning a prize if you buy one ticket?  What if the tickets are sampled with replacement?      (a) First determine the probability of not winning. The tickets are sampled without replacement, which means the probability you do not win on the first draw is , for the second, , and for the seventh. The probability you win no prize is the product of these separate probabilities: . That is, the probability of winning a prize is .  (b) When the tickets are sampled with replacement, there are seven independent draws. Again we first find the probability of not winning a prize: . Thus, the probability of winning (at least) one prize when drawing with replacement is 0.211.   "
},
{
  "id": "ex-raffle-comparison",
  "level": "2",
  "url": "sec-sampling-small-population.html#ex-raffle-comparison",
  "type": "Checkpoint",
  "number": "3.3.7",
  "title": "",
  "body": "  Compare your answers in . How much influence does the sampling method have on your chances of winning a prize?    There is about a 10% larger chance of winning a prize when using sampling without replacement. However, at most one prize may be won under this sampling procedure.   "
},
{
  "id": "sec-random-variables",
  "level": "1",
  "url": "sec-random-variables.html",
  "type": "Section",
  "number": "3.4",
  "title": "Random variables",
  "body": " Random variables   It's often useful to model a process using what's called a random variable . Such a model allows us to apply a mathematical framework and statistical principles for better understanding and predicting outcomes in the real world.    Bookstore sales expectation   Two books are assigned for a statistics class: a textbook and its corresponding study guide. The university bookstore determined 20% of enrolled students do not buy either book, 55% buy the textbook only, and 25% buy both books. If there are 100 students enrolled, how many books should the bookstore expect to sell to this class?    Around 20 students will not buy either book (0 books total), about 55 will buy one book (55 books total), and approximately 25 will buy two books (totaling 50 books for these 25 students). The bookstore should expect to sell about 105 books for this class.      Would you be surprised if the bookstore sold slightly more or less than 105 books?    If they sell a little more or a little less, this should not be a surprise. There is natural variability in observed data. For example, if we flip a coin 100 times, it will not usually come up heads exactly half the time, but it will probably be close.     Expectation  We call a variable or process with a numerical outcome a random variable , and we usually represent this random variable with a capital letter such as , , or . The amount of money a single student will spend on her statistics books is a random variable, and we represent it by .   Random variable  A random process or variable with a numerical outcome.   The possible outcomes of are labeled with a corresponding lower case letter and subscripts. For example, we write , , and , which occur with probabilities 0.20, 0.55, and 0.25. The distribution of is summarized in the table below.   The probability distribution for the random variable , representing the bookstore's revenue from a single student.     1  2  3  Total     $0  $137  $170  --     0.20  0.55  0.25  1.00      Probability distribution for the bookstore's revenue from one student. The triangle represents the average revenue per student.      What is the average revenue per student for this course?    The expected total revenue is $11,785, and there are 100 students. Therefore the expected revenue per student is .    We computed the average outcome of as in . We call this average the expected value of , denoted by . The expected value of a random variable is computed by adding each outcome weighted by its probability:    Expected value of a discrete random variable  If takes outcomes with probabilities , the expected value of is the sum of each outcome multiplied by its corresponding probability: The Greek letter may be used in place of the notation .   The expected value for a random variable represents the average outcome. For example, represents the average amount the bookstore expects to make from a single student, which we could also write as .  It is also possible to compute the expected value of a continuous random variable (see ). However, it requires calculus and we save it for a later class.  In physics, the expectation holds the same meaning as the center of gravity. The distribution can be represented by a series of weights at each outcome, and the mean represents the balancing point.    Variability in random variables  Suppose you ran the university bookstore. Besides how much revenue you expect to generate, you might also want to know the volatility (variability) in your revenue.  The variance and standard deviation can be used to describe the variability of a random variable. We first compute deviations from the mean ( ), square those deviations, and take an average to get the variance. In the case of a random variable, we again compute squared deviations. However, we take their sum weighted by their corresponding probabilities, just like we did for the expectation. This weighted sum of squared deviations equals the variance, and we calculate the standard deviation by taking the square root of the variance.   Variance of a discrete random variable  If takes outcomes with probabilities and expected value , then the variance of , denoted by or the symbol , is The standard deviation of , labeled , is the square root of the variance.     Compute the expected value, variance, and standard deviation of , the revenue of a single statistics student for the bookstore.    It is useful to construct a table that holds computations for each outcome separately, then add up the results.      1  2  3  Total     $0  $137  $170      0.20  0.55  0.25      0  75.35  42.50  117.85     Thus, the expected value is , which we computed earlier. The variance can be constructed by extending this table:      1  2  3  Total     $0  $137  $170      0.20  0.55  0.25      0  75.35  42.50  117.85     -117.85  19.15  52.15      13888.62  366.72  2719.62      2777.7  201.7  679.9  3659.3     The variance of is , which means the standard deviation is .      The bookstore also offers a chemistry textbook for $159 and a book supplement for $41. From past experience, they know about 25% of chemistry students just buy the textbook while 60% buy both the textbook and supplement.    What proportion of students don't buy either book? Assume no students buy the supplement without the textbook.  Let represent the revenue from a single student. Write out the probability distribution of , i.e. a table for each outcome and its associated probability.  Compute the expected revenue from a single chemistry student.  Find the standard deviation to describe the variability associated with the revenue from a single student.      (a) of students do not buy any books for the class.  (b) The probability distribution is represented in the table below.  (c) The expectation is given as the total on the line : .  (d) The result is the square root of the variance listed in the total on the last line: .      1  2  3  Total    Scenario  no book  textbook  both      0.00  159.00  200.00      0.15  0.25  0.60      0.00  39.75  120.00  159.75     -159.75  -0.75  40.25      25520.06  0.56  1620.06      3828.0  0.1  972.0          Linear combinations of random variables  So far, we have thought of each variable as being a complete story in and of itself. Sometimes it is more appropriate to use a combination of variables. For instance, the amount of time a person spends commuting to work each week can be broken down into several daily commutes. Similarly, the total gain or loss in a stock portfolio is the sum of the gains and losses in its components.    John travels to work five days a week. We will use to represent his travel time on Monday, to represent his travel time on Tuesday, and so on. Write an equation using that represents his travel time for the week, denoted by .    His total weekly travel time is the sum of the five daily values: Breaking the weekly travel time into pieces provides a framework for understanding each source of randomness and is useful for modeling .      It takes John an average of 18 minutes each day to commute to work. What would you expect his average commute time to be for the week?    We were told that the average (i.e. expected value) of the commute time is 18 minutes per day: . To get the expected time for the sum of the five days, we can add up the expected time for each individual day: The expectation of the total time is equal to the sum of the expected individual times. More generally, the expectation of a sum of random variables is always the sum of the expectation for each random variable.      Elena is selling a TV at a cash auction and also intends to buy a toaster oven in the auction. If represents the profit for selling the TV and represents the cost of the toaster oven, write an equation that represents the net change in Elena's cash.    She will make dollars on the TV but spend dollars on the toaster oven: .      Based on past auctions, Elena figures she should expect to make about $175 on the TV and pay about $23 for the toaster oven. In total, how much should she expect to make or spend?     . She should expect to make about $152.      Would you be surprised if John's weekly commute wasn't exactly 90 minutes or if Elena didn't make exactly $152? Explain.    No, since there is probably some variability. For example, the traffic will vary from one day to next, and auction prices will vary depending on the quality of the merchandise and the interest of the attendees.    Two important concepts concerning combinations of random variables have so far been introduced. First, a final value can sometimes be described as the sum of its parts in an equation. Second, intuition suggests that putting the individual average values into this equation gives the average value we would expect in total. This second point needs clarification -- it is guaranteed to be true in what are called linear combinations of random variables .  A linear combination of two random variables and is a combination where and are some fixed and known numbers. For John's commute time, there were five random variables -- one for each work day -- and each random variable could be written as having a fixed coefficient of 1: For Elena's net gain or loss, the random variable had a coefficient of +1 and the random variable had a coefficient of -1.  When considering the average of a linear combination of random variables, it is safe to plug in the mean of each random variable and then compute the final result. For some examples of nonlinear combinations of random variables -- cases where we cannot simply plug in the means -- consider: , , . In such cases, plugging in the average value for each random variable and computing the result will not generally lead to an accurate average value for the end result.   Linear combinations of random variables and the average result  If and are random variables, then a linear combination of the random variables is given by where and are some fixed numbers. To compute the average value of a linear combination of random variables, plug in the average of each individual random variable and compute the result: Recall that the expected value is the same as the mean, e.g. .     Leonard has invested $6000 in Caterpillar Inc (stock ticker: CAT) and $2000 in Exxon Mobil Corp (XOM). If represents the change in Caterpillar's stock next month and represents the change in Exxon Mobil's stock next month, write an equation that describes how much money will be made or lost in Leonard's stocks for the month.    For simplicity, we will suppose and are not in percents but are in decimal form (e.g. if Caterpillar's stock increases 1%, then ; or if it loses 1%, then ). Then we can write an equation for Leonard's gain as If we plug in the change in the stock value for and , this equation gives the change in value of Leonard's stock portfolio for the month. A positive value represents a gain, and a negative value represents a loss.      Caterpillar stock has recently been rising at 2.0% and Exxon Mobil's at 0.2% per month, respectively. Compute the expected change in Leonard's stock portfolio for next month.           You should have found that Leonard expects a positive gain in . However, would you be surprised if he actually had a loss this month?    No. While stocks tend to rise over time, they are often volatile in the short term.    Quantifying the average outcome from a linear combination of random variables is helpful, but it is also important to have some sense of the uncertainty associated with the total outcome of that combination of random variables. The expected net gain or loss of Leonard's stock portfolio was considered in . However, there was no quantitative discussion of the volatility of this portfolio.   The change in a portfolio like Leonard's for 36 months, where $6000 is in Caterpillar's stock and $2000 is in Exxon Mobil's.    For instance, while the average monthly gain might be about $124 according to the data, that gain is not guaranteed. The figure shows the monthly changes in a portfolio like Leonard's during a three year period. The gains and losses vary widely, and quantifying these fluctuations is important when investing in stocks.  Just as we have done in many previous cases, we use the variance and standard deviation to describe the uncertainty associated with Leonard's monthly returns. The variance of a linear combination of random variables can be computed by plugging in the variances of the individual random variables and squaring the coefficients of the random variables. This equation is valid as long as the random variables are independent.   Variability of linear combinations of random variables  The variance of a linear combination of random variables may be computed by squaring the constants, substituting in the variances for the random variables, and computing the result: This equation is valid as long as the random variables are independent of each other. The standard deviation of the linear combination may be found by taking the square root of the variance.     Suppose John's daily commute has a standard deviation of 4 minutes. What is the uncertainty in his total commute time for the week?    The expression for John's commute time was Each coefficient is 1, and the variance of each day's time is . Thus, the variance of the total weekly commute time is The standard deviation for John's weekly work commute time is about 9 minutes.      The computation in relied on an important assumption: the commute time for each day is independent of the time on other days of that week. Do you think this is valid? Explain.    One concern is whether traffic patterns tend to have a weekly cycle (e.g. Fridays may be worse than other days). If that is the case, and John drives, then the assumption is probably not reasonable. However, if John walks to work, then his commute is probably not affected by any weekly traffic cycle.      Consider Elena's two auctions from . Suppose these auctions are approximately independent and the variability in auction prices associated with the TV and toaster oven can be described using standard deviations of $25 and $8. Compute the standard deviation of Elena's net gain.    The equation for Elena can be written as The variances of and are 625 and 64. We square the coefficients and plug in the variances: The variance of the linear combination is 689, and the standard deviation is the square root of 689: about $26.25.    Consider again . The negative coefficient for in the linear combination was eliminated when we squared the coefficients. This generally holds true: negatives in a linear combination will have no impact on the variability computed for a linear combination, but they do impact the expected value computations.   "
},
{
  "id": "sec-random-variables-2-1",
  "level": "2",
  "url": "sec-random-variables.html#sec-random-variables-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "random variable "
},
{
  "id": "ex-bookstore-sales",
  "level": "2",
  "url": "sec-random-variables.html#ex-bookstore-sales",
  "type": "Example",
  "number": "3.4.1",
  "title": "Bookstore sales expectation.",
  "body": " Bookstore sales expectation   Two books are assigned for a statistics class: a textbook and its corresponding study guide. The university bookstore determined 20% of enrolled students do not buy either book, 55% buy the textbook only, and 25% buy both books. If there are 100 students enrolled, how many books should the bookstore expect to sell to this class?    Around 20 students will not buy either book (0 books total), about 55 will buy one book (55 books total), and approximately 25 will buy two books (totaling 50 books for these 25 students). The bookstore should expect to sell about 105 books for this class.   "
},
{
  "id": "ex-bookstore-variability",
  "level": "2",
  "url": "sec-random-variables.html#ex-bookstore-variability",
  "type": "Checkpoint",
  "number": "3.4.2",
  "title": "",
  "body": "  Would you be surprised if the bookstore sold slightly more or less than 105 books?    If they sell a little more or a little less, this should not be a surprise. There is natural variability in observed data. For example, if we flip a coin 100 times, it will not usually come up heads exactly half the time, but it will probably be close.   "
},
{
  "id": "subsec-expectation-2",
  "level": "2",
  "url": "sec-random-variables.html#subsec-expectation-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "random variable "
},
{
  "id": "fig-stat-spend-dist",
  "level": "2",
  "url": "sec-random-variables.html#fig-stat-spend-dist",
  "type": "Figure",
  "number": "3.4.3",
  "title": "",
  "body": " The probability distribution for the random variable , representing the bookstore's revenue from a single student.     1  2  3  Total     $0  $137  $170  --     0.20  0.55  0.25  1.00    "
},
{
  "id": "fig-book-cost-dist",
  "level": "2",
  "url": "sec-random-variables.html#fig-book-cost-dist",
  "type": "Figure",
  "number": "3.4.4",
  "title": "",
  "body": " Probability distribution for the bookstore's revenue from one student. The triangle represents the average revenue per student.   "
},
{
  "id": "ex-rev-per-student",
  "level": "2",
  "url": "sec-random-variables.html#ex-rev-per-student",
  "type": "Example",
  "number": "3.4.5",
  "title": "",
  "body": "  What is the average revenue per student for this course?    The expected total revenue is $11,785, and there are 100 students. Therefore the expected revenue per student is .   "
},
{
  "id": "subsec-expectation-8",
  "level": "2",
  "url": "sec-random-variables.html#subsec-expectation-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "expected value "
},
{
  "id": "subsec-variability-random-variables-3",
  "level": "2",
  "url": "sec-random-variables.html#subsec-variability-random-variables-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "variance standard deviation "
},
{
  "id": "ex-revenue-variance",
  "level": "2",
  "url": "sec-random-variables.html#ex-revenue-variance",
  "type": "Example",
  "number": "3.4.6",
  "title": "",
  "body": "  Compute the expected value, variance, and standard deviation of , the revenue of a single statistics student for the bookstore.    It is useful to construct a table that holds computations for each outcome separately, then add up the results.      1  2  3  Total     $0  $137  $170      0.20  0.55  0.25      0  75.35  42.50  117.85     Thus, the expected value is , which we computed earlier. The variance can be constructed by extending this table:      1  2  3  Total     $0  $137  $170      0.20  0.55  0.25      0  75.35  42.50  117.85     -117.85  19.15  52.15      13888.62  366.72  2719.62      2777.7  201.7  679.9  3659.3     The variance of is , which means the standard deviation is .   "
},
{
  "id": "ex-chemistry-books-revenue",
  "level": "2",
  "url": "sec-random-variables.html#ex-chemistry-books-revenue",
  "type": "Checkpoint",
  "number": "3.4.9",
  "title": "",
  "body": "  The bookstore also offers a chemistry textbook for $159 and a book supplement for $41. From past experience, they know about 25% of chemistry students just buy the textbook while 60% buy both the textbook and supplement.    What proportion of students don't buy either book? Assume no students buy the supplement without the textbook.  Let represent the revenue from a single student. Write out the probability distribution of , i.e. a table for each outcome and its associated probability.  Compute the expected revenue from a single chemistry student.  Find the standard deviation to describe the variability associated with the revenue from a single student.      (a) of students do not buy any books for the class.  (b) The probability distribution is represented in the table below.  (c) The expectation is given as the total on the line : .  (d) The result is the square root of the variance listed in the total on the last line: .      1  2  3  Total    Scenario  no book  textbook  both      0.00  159.00  200.00      0.15  0.25  0.60      0.00  39.75  120.00  159.75     -159.75  -0.75  40.25      25520.06  0.56  1620.06      3828.0  0.1  972.0       "
},
{
  "id": "ex-john-weekly-commute",
  "level": "2",
  "url": "sec-random-variables.html#ex-john-weekly-commute",
  "type": "Example",
  "number": "3.4.11",
  "title": "",
  "body": "  John travels to work five days a week. We will use to represent his travel time on Monday, to represent his travel time on Tuesday, and so on. Write an equation using that represents his travel time for the week, denoted by .    His total weekly travel time is the sum of the five daily values: Breaking the weekly travel time into pieces provides a framework for understanding each source of randomness and is useful for modeling .   "
},
{
  "id": "ex-john-weekly-expectation",
  "level": "2",
  "url": "sec-random-variables.html#ex-john-weekly-expectation",
  "type": "Example",
  "number": "3.4.12",
  "title": "",
  "body": "  It takes John an average of 18 minutes each day to commute to work. What would you expect his average commute time to be for the week?    We were told that the average (i.e. expected value) of the commute time is 18 minutes per day: . To get the expected time for the sum of the five days, we can add up the expected time for each individual day: The expectation of the total time is equal to the sum of the expected individual times. More generally, the expectation of a sum of random variables is always the sum of the expectation for each random variable.   "
},
{
  "id": "ex-elena-auction",
  "level": "2",
  "url": "sec-random-variables.html#ex-elena-auction",
  "type": "Checkpoint",
  "number": "3.4.13",
  "title": "",
  "body": "  Elena is selling a TV at a cash auction and also intends to buy a toaster oven in the auction. If represents the profit for selling the TV and represents the cost of the toaster oven, write an equation that represents the net change in Elena's cash.    She will make dollars on the TV but spend dollars on the toaster oven: .   "
},
{
  "id": "ex-elena-expectation",
  "level": "2",
  "url": "sec-random-variables.html#ex-elena-expectation",
  "type": "Checkpoint",
  "number": "3.4.14",
  "title": "",
  "body": "  Based on past auctions, Elena figures she should expect to make about $175 on the TV and pay about $23 for the toaster oven. In total, how much should she expect to make or spend?     . She should expect to make about $152.   "
},
{
  "id": "ex-uncertainty-sum",
  "level": "2",
  "url": "sec-random-variables.html#ex-uncertainty-sum",
  "type": "Checkpoint",
  "number": "3.4.15",
  "title": "",
  "body": "  Would you be surprised if John's weekly commute wasn't exactly 90 minutes or if Elena didn't make exactly $152? Explain.    No, since there is probably some variability. For example, the traffic will vary from one day to next, and auction prices will vary depending on the quality of the merchandise and the interest of the attendees.   "
},
{
  "id": "subsec-linear-combinations-9",
  "level": "2",
  "url": "sec-random-variables.html#subsec-linear-combinations-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear combination "
},
{
  "id": "ex-leonard-portfolio",
  "level": "2",
  "url": "sec-random-variables.html#ex-leonard-portfolio",
  "type": "Example",
  "number": "3.4.16",
  "title": "",
  "body": "  Leonard has invested $6000 in Caterpillar Inc (stock ticker: CAT) and $2000 in Exxon Mobil Corp (XOM). If represents the change in Caterpillar's stock next month and represents the change in Exxon Mobil's stock next month, write an equation that describes how much money will be made or lost in Leonard's stocks for the month.    For simplicity, we will suppose and are not in percents but are in decimal form (e.g. if Caterpillar's stock increases 1%, then ; or if it loses 1%, then ). Then we can write an equation for Leonard's gain as If we plug in the change in the stock value for and , this equation gives the change in value of Leonard's stock portfolio for the month. A positive value represents a gain, and a negative value represents a loss.   "
},
{
  "id": "ex-leonard-expected-return",
  "level": "2",
  "url": "sec-random-variables.html#ex-leonard-expected-return",
  "type": "Checkpoint",
  "number": "3.4.17",
  "title": "",
  "body": "  Caterpillar stock has recently been rising at 2.0% and Exxon Mobil's at 0.2% per month, respectively. Compute the expected change in Leonard's stock portfolio for next month.        "
},
{
  "id": "ex-leonard-risk",
  "level": "2",
  "url": "sec-random-variables.html#ex-leonard-risk",
  "type": "Checkpoint",
  "number": "3.4.18",
  "title": "",
  "body": "  You should have found that Leonard expects a positive gain in . However, would you be surprised if he actually had a loss this month?    No. While stocks tend to rise over time, they are often volatile in the short term.   "
},
{
  "id": "fig-leonard-portfolio-monthly",
  "level": "2",
  "url": "sec-random-variables.html#fig-leonard-portfolio-monthly",
  "type": "Figure",
  "number": "3.4.19",
  "title": "",
  "body": " The change in a portfolio like Leonard's for 36 months, where $6000 is in Caterpillar's stock and $2000 is in Exxon Mobil's.   "
},
{
  "id": "ex-john-weekly-sd",
  "level": "2",
  "url": "sec-random-variables.html#ex-john-weekly-sd",
  "type": "Example",
  "number": "3.4.20",
  "title": "",
  "body": "  Suppose John's daily commute has a standard deviation of 4 minutes. What is the uncertainty in his total commute time for the week?    The expression for John's commute time was Each coefficient is 1, and the variance of each day's time is . Thus, the variance of the total weekly commute time is The standard deviation for John's weekly work commute time is about 9 minutes.   "
},
{
  "id": "ex-john-independence",
  "level": "2",
  "url": "sec-random-variables.html#ex-john-independence",
  "type": "Checkpoint",
  "number": "3.4.21",
  "title": "",
  "body": "  The computation in relied on an important assumption: the commute time for each day is independent of the time on other days of that week. Do you think this is valid? Explain.    One concern is whether traffic patterns tend to have a weekly cycle (e.g. Fridays may be worse than other days). If that is the case, and John drives, then the assumption is probably not reasonable. However, if John walks to work, then his commute is probably not affected by any weekly traffic cycle.   "
},
{
  "id": "ex-elena-variability",
  "level": "2",
  "url": "sec-random-variables.html#ex-elena-variability",
  "type": "Checkpoint",
  "number": "3.4.22",
  "title": "",
  "body": "  Consider Elena's two auctions from . Suppose these auctions are approximately independent and the variability in auction prices associated with the TV and toaster oven can be described using standard deviations of $25 and $8. Compute the standard deviation of Elena's net gain.    The equation for Elena can be written as The variances of and are 625 and 64. We square the coefficients and plug in the variances: The variance of the linear combination is 689, and the standard deviation is the square root of 689: about $26.25.   "
},
{
  "id": "sec-continuous-distributions",
  "level": "1",
  "url": "sec-continuous-distributions.html",
  "type": "Section",
  "number": "3.5",
  "title": "Continuous distributions",
  "body": " Continuous distributions   So far in this chapter we've discussed cases where the outcome of a variable is discrete. In this section, we consider a context where the outcome is a continuous numerical variable.    US adult heights histograms    shows a few different hollow histograms for the heights of US adults. How does changing the number of bins allow you to make different interpretations of the data?    Adding more bins provides greater detail. This sample is extremely large, which is why much smaller bins still work well. Usually we do not use so many bins with smaller sample sizes since small counts per bin mean the bin heights are very volatile.     Four hollow histograms of US adults heights with varying bin widths     Probability from histogram   What proportion of the sample is between 180 cm and 185 cm tall (about 5'11\" to 6'1\")?    We can add up the heights of the bins in the range 180 cm and 185 cm and divide by the sample size. For instance, this can be done with the two shaded bins shown in . The two bins in this region have counts of 195,307 and 156,239 people, resulting in the following estimate of the probability: This fraction is the same as the proportion of the histogram's area that falls in the range 180 to 185 cm.     A histogram with bin sizes of 2.5 cm. The shaded region represents individuals with heights between 180 and 185 cm.     From histograms to continuous distributions  Examine the transition from a boxy hollow histogram in the top-left of to the much smoother plot in the lower-right. In this last plot, the bins are so slim that the hollow histogram is starting to resemble a smooth curve. This suggests the population height as a continuous numerical variable might best be explained by a curve that represents the outline of extremely slim bins.  This smooth curve represents a probability density function (also called a density or distribution ), and such a curve is shown in overlaid on a histogram of the sample. A density has a special property: the total area under the density's curve is 1.   The continuous probability distribution of heights for US adults.      Probabilities from continuous distributions  We computed the proportion of individuals with heights 180 to 185 cm in as a fraction: We found the number of people with heights between 180 and 185 cm by determining the fraction of the histogram's area in this region. Similarly, we can use the area in the shaded region under the curve to find a probability (with the help of a computer): The probability that a randomly selected person is between 180 and 185 cm is 0.1157. This is very close to the estimate from : 0.1172.   Density for heights in the US adult population with the area between 180 and 185 cm shaded. Compare this plot with .      Three US adults are randomly selected. The probability a single adult is between 180 and 185 cm is 0.1157.    What is the probability that all three are between 180 and 185 cm tall?  What is the probability that none are between 180 and 185 cm?      Brief answers:          What is the probability that a randomly selected person is exactly 180 cm? Assume you can measure perfectly.    This probability is zero. A person might be close to 180 cm, but not exactly 180 cm tall. This also makes sense with the definition of probability as area; there is no area captured between 180 cm and 180 cm.      Suppose a person's height is rounded to the nearest centimeter. Is there a chance that a random person's measured height will be 180 cm?    This has positive probability. Anyone between 179.5 cm and 180.5 cm will have a measured height of 180 cm. This is probably a more realistic scenario to encounter in practice versus .     "
},
{
  "id": "ex-us-heights",
  "level": "2",
  "url": "sec-continuous-distributions.html#ex-us-heights",
  "type": "Example",
  "number": "3.5.1",
  "title": "US adult heights histograms.",
  "body": " US adult heights histograms    shows a few different hollow histograms for the heights of US adults. How does changing the number of bins allow you to make different interpretations of the data?    Adding more bins provides greater detail. This sample is extremely large, which is why much smaller bins still work well. Usually we do not use so many bins with smaller sample sizes since small counts per bin mean the bin heights are very volatile.   "
},
{
  "id": "fig-fdic-histograms",
  "level": "2",
  "url": "sec-continuous-distributions.html#fig-fdic-histograms",
  "type": "Figure",
  "number": "3.5.2",
  "title": "",
  "body": " Four hollow histograms of US adults heights with varying bin widths   "
},
{
  "id": "ex-height-180-185",
  "level": "2",
  "url": "sec-continuous-distributions.html#ex-height-180-185",
  "type": "Example",
  "number": "3.5.3",
  "title": "Probability from histogram.",
  "body": " Probability from histogram   What proportion of the sample is between 180 cm and 185 cm tall (about 5'11\" to 6'1\")?    We can add up the heights of the bins in the range 180 cm and 185 cm and divide by the sample size. For instance, this can be done with the two shaded bins shown in . The two bins in this region have counts of 195,307 and 156,239 people, resulting in the following estimate of the probability: This fraction is the same as the proportion of the histogram's area that falls in the range 180 to 185 cm.   "
},
{
  "id": "fig-us-heights-180-185",
  "level": "2",
  "url": "sec-continuous-distributions.html#fig-us-heights-180-185",
  "type": "Figure",
  "number": "3.5.4",
  "title": "",
  "body": " A histogram with bin sizes of 2.5 cm. The shaded region represents individuals with heights between 180 and 185 cm.   "
},
{
  "id": "subsec-histograms-to-continuous-3",
  "level": "2",
  "url": "sec-continuous-distributions.html#subsec-histograms-to-continuous-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "probability density function density distribution "
},
{
  "id": "fig-fdic-height-cont-dist",
  "level": "2",
  "url": "sec-continuous-distributions.html#fig-fdic-height-cont-dist",
  "type": "Figure",
  "number": "3.5.5",
  "title": "",
  "body": " The continuous probability distribution of heights for US adults.   "
},
{
  "id": "fig-fdic-height-filled",
  "level": "2",
  "url": "sec-continuous-distributions.html#fig-fdic-height-filled",
  "type": "Figure",
  "number": "3.5.6",
  "title": "",
  "body": " Density for heights in the US adult population with the area between 180 and 185 cm shaded. Compare this plot with .   "
},
{
  "id": "ex-height-three-adults",
  "level": "2",
  "url": "sec-continuous-distributions.html#ex-height-three-adults",
  "type": "Checkpoint",
  "number": "3.5.7",
  "title": "",
  "body": "  Three US adults are randomly selected. The probability a single adult is between 180 and 185 cm is 0.1157.    What is the probability that all three are between 180 and 185 cm tall?  What is the probability that none are between 180 and 185 cm?      Brief answers:       "
},
{
  "id": "ex-exactly-180-cm",
  "level": "2",
  "url": "sec-continuous-distributions.html#ex-exactly-180-cm",
  "type": "Example",
  "number": "3.5.8",
  "title": "",
  "body": "  What is the probability that a randomly selected person is exactly 180 cm? Assume you can measure perfectly.    This probability is zero. A person might be close to 180 cm, but not exactly 180 cm tall. This also makes sense with the definition of probability as area; there is no area captured between 180 cm and 180 cm.   "
},
{
  "id": "ex-rounded-height",
  "level": "2",
  "url": "sec-continuous-distributions.html#ex-rounded-height",
  "type": "Checkpoint",
  "number": "3.5.9",
  "title": "",
  "body": "  Suppose a person's height is rounded to the nearest centimeter. Is there a chance that a random person's measured height will be 180 cm?    This has positive probability. Anyone between 179.5 cm and 180.5 cm will have a measured height of 180 cm. This is probably a more realistic scenario to encounter in practice versus .   "
},
{
  "id": "sec-normal-distribution",
  "level": "1",
  "url": "sec-normal-distribution.html",
  "type": "Section",
  "number": "4.1",
  "title": "Normal distribution",
  "body": " Normal distribution   Among all the distributions we see in practice, one is overwhelmingly the most common. The symmetric, unimodal, bell curve is ubiquitous throughout statistics. Indeed it is so common, that people often know it as the normal curve or normal distribution.   A normal curve    Variables such as SAT scores and heights of US adult males closely follow the normal distribution.    Normal distribution model  The normal distribution always describes a symmetric, unimodal, bell-shaped curve. However, these curves can look different depending on the details of the model. Specifically, the normal distribution model can be adjusted using two parameters: mean and standard deviation. As you can probably guess, changing the mean shifts the bell curve to the left or right, while changing the standard deviation stretches or constricts the curve. shows the normal distribution with mean and standard deviation in the left panel and the normal distribution with mean and standard deviation in the right panel. shows these distributions on the same axis.   Both curves represent the normal distribution. However, they differ in their center and spread.     The normal distributions shown in but plotted together and on the same scale.    If a normal distribution has mean and standard deviation , we may write the distribution as . The two distributions in may be written as Because the mean and standard deviation describe a normal distribution exactly, they are called the distribution's parameters .    Normal distribution facts   Many variables are nearly normal, but none are exactly normal. Thus the normal distribution, while not perfect for any single problem, is very useful for a variety of problems. We will use it in data exploration and to solve important problems in statistics.   The normal distribution with mean and standard deviation is called the standard normal distribution .    Write down the short-hand for a normal distribution with (a) mean 5 and standard deviation 3, (b) mean -100 and standard deviation 10, and (c) mean 2 and standard deviation 9.    (a) . (b) . (c) .      Standardizing with Z-scores  We often want to put data onto a standardized scale, which can make comparisons more reasonable.   Comparing SAT and ACT scores    shows the mean and standard deviation for total scores on the SAT and ACT. The distribution of SAT and ACT scores are both nearly normal. Suppose Ann scored 1300 on her SAT and Tom scored 24 on his ACT. Who performed better?    We use the standard deviation as a guide. Ann is 1 standard deviation above average on the SAT: . Tom is 0.5 standard deviations above the mean on the ACT: . In , we can see that Ann tends to do better with respect to everyone else than Tom did, so her score was better.     Mean and standard deviation for the SAT and ACT     SAT  ACT    Mean  1100  21    SD  200  6      Ann's and Tom's scores shown against the SAT and ACT distributions.     used a standardization technique called a Z-score, a method most commonly employed for nearly normal observations but that may be used with any distribution. The Z-score of an observation is defined as the number of standard deviations it falls above or below the mean. If the observation is one standard deviation above the mean, its Z-score is 1. If it is 1.5 standard deviations below the mean, then its Z-score is -1.5. If is an observation from a distribution , we define the Z-score mathematically as Using , , and , we find Ann's Z-score:     The Z-score   The Z-score of an observation is the number of standard deviations it falls above or below the mean. We compute the Z-score for an observation that follows a distribution with mean and standard deviation using      Use Tom's ACT score, 24, along with the ACT mean and standard deviation to find his Z-score.         Observations above the mean always have positive Z-scores, while those below the mean always have negative Z-scores. If an observation is equal to the mean, such as an SAT score of 1100, then the Z-score is .    Let represent a random variable from , and suppose we observe . (a) Find the Z-score of . (b) Use the Z-score to determine how many standard deviations above or below the mean falls.    (a) Its Z-score is given by . (b) The observation is 1.095 standard deviations above the mean. We know it must be above the mean since is positive.      Head lengths of brushtail possums follow a normal distribution with mean 92.6 mm and standard deviation 3.6 mm. Compute the Z-scores for possums with head lengths of 95.4 mm and 85.8 mm.    For mm: . For mm: .    We can use Z-scores to roughly identify which observations are more unusual than others. An observation is said to be more unusual than another observation if the absolute value of its Z-score is larger than the absolute value of the other observation's Z-score: . This technique is especially insightful when a distribution is symmetric.    Which of the observations in is more unusual?    Because the absolute value of Z-score for the second observation is larger than that of the first, the second observation has a more unusual head length.      Finding tail areas  It's very useful in statistics to be able to identify tail areas of distributions. For instance, what fraction of people have an SAT score below Ann's score of 1300? This is the same as the percentile Ann is at, which is the percentage of cases that have lower scores than Ann. We can visualize such a tail area like the curve and shading shown in .   The area to the left of represents the fraction of people who scored lower than Ann.    There are many techniques for doing this, and we'll discuss three of the options.   The most common approach in practice is to use statistical software. For example, in the program R, we could find the area shown in using the following command, which takes in the Z-score and returns the lower tail area: pnorm(1) returns 0.8413447 . According to this calculation, the region shaded that is below 1300 represents the proportion 0.841 (84.1%) of SAT test takers who had Z-scores below . More generally, we can also specify the cutoff explicitly if we also note the mean and standard deviation: pnorm(1300, mean = 1100, sd = 200) returns 0.8413447 .  There are many other software options, such as Python or SAS; even spreadsheet programs such as Excel and Google Sheets support these calculations.    A common strategy in classrooms is to use a graphing calculator, such as a TI or Casio calculator. These calculators require a series of button presses that are less concisely described. You can find instructions on using these calculators for finding tail areas of a normal distribution in the OpenIntro video library: .    The last option for finding tail areas is to use what's called a probability table ; these are occasionally used in classrooms but rarely in practice. The appendix contains such a table and a guide for how to use it.     We will solve normal distribution problems in this section by always first finding the Z-score. The reason is that we will encounter close parallels called test statistics beginning in Chapter 5; these are, in many instances, an equivalent of a Z-score.    Normal probability examples  Cumulative SAT scores are approximated well by a normal model, .   Finding probability of SAT score above 1190   Shannon is a randomly selected SAT taker, and nothing is known about Shannon's SAT aptitude. What is the probability Shannon scores at least 1190 on her SATs?    First, always draw and label a picture of the normal distribution. (Drawings need not be exact to be useful.) We are interested in the chance she scores above 1190, so we shade this upper tail:   Shading the upper tail above 1190    The picture shows the mean and the values at 2 standard deviations above and below the mean. The simplest way to find the shaded area under the curve makes use of the Z-score of the cutoff value. With , , and the cutoff value , the Z-score is computed as Using statistical software (or another preferred method), we can find the area left of as 0.6736. To find the area above  , we compute one minus the area of the lower tail:   Computing the upper tail area    The probability Shannon scores at least 1190 on the SAT is 0.3264.      Always draw a picture first, and find the Z-score second   For any normal probability situation, always always always draw and label the normal curve and shade the area of interest first. The picture will provide an estimate of the probability. After drawing a figure to represent the situation, identify the Z-score for the value of interest.     If the probability of Shannon scoring at least 1190 is 0.3264, then what is the probability she scores less than 1190? Draw the normal curve representing this exercise, shading the lower region instead of the upper one.    We found this probability in : 0.6736.     Finding a percentile   Edward earned a 1030 on his SAT. What is his percentile?    First, a picture is needed. Edward's percentile is the proportion of people who do not get as high as a 1030. These are the scores to the left of 1030.   Shading the lower tail below 1030    Identifying the mean , the standard deviation , and the cutoff for the tail area makes it easy to compute the Z-score: Using statistical software, we get a tail area of 0.3632. Edward is at the 36 percentile.      Use the results of to compute the proportion of SAT takers who did better than Edward. Also draw a new picture.    If Edward did better than 36% of SAT takers, then about 64% must have done better than him.      Finding areas to the right   Many software programs return the area to the left when given a Z-score. If you would like the area to the right, first find the area to the left and then subtract this amount from one.     Stuart earned an SAT score of 1500. Draw a picture for each part. (a) What is his percentile? (b) What percent of SAT takers did better than Stuart?    We leave the drawings to you. (a) . (b) .    Based on a sample of 100 men, the heights of male adults in the US is nearly normal with mean 70.0'' and standard deviation 3.3''.    Mike is 5'7'' and Jose is 6'4'', and they both live in the US. (a) What is Mike's height percentile? (b) What is Jose's height percentile? Also draw one picture for each part.    First put the heights into inches: 67 and 76 inches. (a) . (b) .    The last several problems have focused on finding the percentile (lower tail) or the upper tail for a particular observation. What if you would like to know the observation corresponding to a particular percentile?   Finding height at 40th percentile   Erik's height is at the 40 percentile. How tall is he?    As always, first draw the picture.   Finding the height at the 40th percentile    In this case, the lower tail probability is known (0.40), which can be shaded on the diagram. We want to find the observation that corresponds to this value. As a first step in this direction, we determine the Z-score associated with the 40 percentile. Using software, we can obtain the corresponding Z-score of about -0.25.  Knowing and the population parameters and inches, the Z-score formula can be set up to determine Erik's unknown height, labeled : Solving for yields a height of 69.18 inches. That is, Erik is about 5'9''.     Finding height at 82nd percentile   What is the adult male height at the 82 percentile?    Again, we draw the figure first.   Finding the height at the 82nd percentile    Next, we want to find the Z-score at the 82 percentile, which will be a positive value and can be found using software as . Finally, the height is found using the Z-score formula with the known mean , standard deviation , and Z-score : This yields 73.04 inches or about 6'1'' as the height at the 82 percentile.      The SAT scores follow . (a) What is the 95 percentile for SAT scores? (b) What is the 97.5 percentile for SAT scores?    Short answers: (a) SAT score. (b) SAT score.      Adult male heights follow . (a) What is the probability that a randomly selected male adult is at least 6'2'' (74 inches)? (b) What is the probability that a male adult is shorter than 5'9'' (69 inches)?    Short answers: (a) , then subtract this value from 1 to get 0.1131. (b) .     Finding probability between two values   What is the probability that a random adult male is between 5'9'' and 6'2''?    These heights correspond to 69 inches and 74 inches. First, draw the figure. The area of interest is no longer an upper or lower tail.   Finding area between two values    The total area under the curve is 1. If we find the area of the two tails that are not shaded (from , these areas are 0.3821 and 0.1131), then we can find the middle area:   Subtracting the tail areas from 1    That is, the probability of being between 5'9'' and 6'2'' is 0.5048.      SAT scores follow . What percent of SAT takers get between 1100 and 1400?    This is an abbreviated solution. (Be sure to draw a figure!) First find the percent who get below 1100 and the percent that get above 1400: (area below), (area above). Final answer: .      Adult male heights follow . What percent of adult males are between 5'5'' and 5'7''?    5'5'' is 65 inches ( ). 5'7'' is 67 inches ( ). Numerical solution: , i.e. 11.71%.      68-95-99.7 rule  Here, we present a useful rule of thumb for the probability of falling within 1, 2, and 3 standard deviations of the mean in the normal distribution. This will be useful in a wide range of practical settings, especially when trying to make a quick estimate without a calculator or Z-table.   Probabilities for falling within 1, 2, and 3 standard deviations of the mean in a normal distribution.      Use software, a calculator, or a probability table to confirm that about 68%, 95%, and 99.7% of observations fall within 1, 2, and 3 standard deviations of the mean in the normal distribution, respectively. For instance, first find the area that falls between and , which should have an area of about 0.68. Similarly there should be an area of about 0.95 between and .    First draw the pictures. Using software, we get 0.6827 within 1 standard deviation, 0.9545 within 2 standard deviations, and 0.9973 within 3 standard deviations.    It is possible for a normal random variable to fall 4, 5, or even more standard deviations from the mean. However, these occurrences are very rare if the data are nearly normal. The probability of being further than 4 standard deviations from the mean is about 1-in-15,000. For 5 and 6 standard deviations, it is about 1-in-2 million and 1-in-500 million, respectively.    SAT scores closely follow the normal model with mean and standard deviation . (a) About what percent of test takers score 700 to 1500? (b) What percent score between 1100 and 1500?    (a) 700 and 1500 represent two standard deviations below and above the mean, which means about 95% of test takers will score between 700 and 1500. (b) We found that 700 to 1500 represents about 95% of test takers. These test takers would be evenly split by the center of the distribution, 1100, so of all test takers score between 1100 and 1500.      Exercises   Area under the curve, Part I   What percent of a standard normal distribution is found in each region? Be sure to draw a graph.             Area under the curve, Part II   What percent of a standard normal distribution is found in each region? Be sure to draw a graph.             GRE scores, Part I   Sophia who took the Graduate Record Examination (GRE) scored 160 on the Verbal Reasoning section and 157 on the Quantitative Reasoning section. The mean score for Verbal Reasoning section for all test takers was 151 with a standard deviation of 7, and the mean score for the Quantitative Reasoning was 153 with a standard deviation of 7.67. Suppose that both distributions are nearly normal.    Write down the short-hand for these two normal distributions.   What is Sophia's Z-score on the Verbal Reasoning section? On the Quantitative Reasoning section? Draw a standard normal distribution curve and mark these two Z-scores.   What do these Z-scores tell you?  Relative to others, which section did she do better on?  Find her percentile scores for the two exams.   What percent of the test takers did better than her on the Verbal Reasoning section? On the Quantitative Reasoning section?    Explain why simply comparing raw scores from the two sections could lead to an incorrect conclusion as to which section a student did better on.    If the distributions of the scores on these exams are not nearly normal, would your answers to parts (b) - (f) change? Explain your reasoning.        Triathlon times, Part I   In triathlons, it is common for racers to be placed into age and gender groups. Friends Leo and Mary both completed the Hermosa Beach Triathlon, where Leo competed in the Men, Ages 30 - 34 group while Mary competed in the Women, Ages 25 - 29 group. Leo completed the race in 1:22:28 (4948 seconds), while Mary completed the race in 1:31:53 (5513 seconds). Obviously Leo finished faster, but they are curious about how they did within their respective groups. Can you help them? Here is some information on the performance of their groups:     The finishing times of the Men, Ages 30 - 34 group has a mean of 4313 seconds with a standard deviation of 583 seconds.    The finishing times of the Women, Ages 25 - 29 group has a mean of 5261 seconds with a standard deviation of 807 seconds.    The distributions of finishing times for both groups are approximately normal.     Remember: a better performance corresponds to a faster finish.    Write down the short-hand for these two normal distributions.   What are the Z-scores for Leo's and Mary's finishing times? What do these Z-scores tell you?    Did Leo or Mary rank better in their respective groups? Explain your reasoning.    What percent of the triathletes did Leo finish faster than in his group?    What percent of the triathletes did Mary finish faster than in her group?    If the distributions of finishing times are not nearly normal, would your answers to parts (b)-(e) change? Explain your reasoning.        GRE scores, Part II   In we saw two distributions for GRE scores: for the verbal part of the exam and for the quantitative part. Use this information to compute each of the following:     The score of a student who scored in the 80 percentile on the Quantitative Reasoning section.    The score of a student who scored worse than 70% of the test takers in the Verbal Reasoning section.        Triathlon times, Part II   In we saw two distributions for triathlon times: for Men, Ages 30 - 34 and for the Women, Ages 25 - 29 group. Times are listed in seconds. Use this information to compute each of the following:     The cutoff time for the fastest 5% of athletes in the men's group, i.e. those who took the shortest 5% of time to finish.    The cutoff time for the slowest 10% of athletes in the women's group.        LA weather, Part I   The average daily high temperature in June in LA is 77°F with a standard deviation of 5°F. Suppose that the temperatures in June closely follow a normal distribution.     What is the probability of observing an 83°F temperature or higher in LA during a randomly chosen day in June?    How cool are the coldest 10% of the days (days with lowest high temperature) during June in LA?        CAPM   The Capital Asset Pricing Model (CAPM) is a financial model that assumes returns on a portfolio are normally distributed. Suppose a portfolio has an average annual return of 14.7% (i.e. an average gain of 14.7%) with a standard deviation of 33%. A return of 0% means the value of the portfolio doesn't change, a negative return means that the portfolio loses money, and a positive return means that the portfolio gains money.     What percent of years does this portfolio lose money, i.e. have a return less than 0%?    What is the cutoff for the highest 15% of annual returns with this portfolio?        LA weather, Part II    states that average daily high temperature in June in LA is 77°F with a standard deviation of 5°F, and it can be assumed that they follow a normal distribution. We use the following equation to convert °F (Fahrenheit) to °C (Celsius):      Write the probability model for the distribution of temperature in °C in June in LA.    What is the probability of observing a 28°C (which roughly corresponds to 83°F) temperature or higher in June in LA? Calculate using the °C model from part (a).    Did you get the same answer or different answers in part (b) of this question and part (a) of ? Are you surprised? Explain.    Estimate the IQR of the temperatures (in °C) in June in LA.        Find the SD   Cholesterol levels for women aged 20 to 34 follow an approximately normal distribution with mean 185 milligrams per deciliter (mg\/dl). Women with cholesterol levels above 220 mg\/dl are considered to have high cholesterol and about 18.5% of women fall into this category. What is the standard deviation of the distribution of cholesterol levels for women aged 20 to 34?     "
},
{
  "id": "fig-simple-normal",
  "level": "2",
  "url": "sec-normal-distribution.html#fig-simple-normal",
  "type": "Figure",
  "number": "4.1.1",
  "title": "",
  "body": " A normal curve   "
},
{
  "id": "subsec-normal-distribution-model-2",
  "level": "2",
  "url": "sec-normal-distribution.html#subsec-normal-distribution-model-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "normal distribution "
},
{
  "id": "fig-two-sample-normals",
  "level": "2",
  "url": "sec-normal-distribution.html#fig-two-sample-normals",
  "type": "Figure",
  "number": "4.1.2",
  "title": "",
  "body": " Both curves represent the normal distribution. However, they differ in their center and spread.   "
},
{
  "id": "fig-two-sample-normals-stacked",
  "level": "2",
  "url": "sec-normal-distribution.html#fig-two-sample-normals-stacked",
  "type": "Figure",
  "number": "4.1.3",
  "title": "",
  "body": " The normal distributions shown in but plotted together and on the same scale.   "
},
{
  "id": "subsec-normal-distribution-model-5",
  "level": "2",
  "url": "sec-normal-distribution.html#subsec-normal-distribution-model-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parameters "
},
{
  "id": "subsec-normal-distribution-model-6-1",
  "level": "2",
  "url": "sec-normal-distribution.html#subsec-normal-distribution-model-6-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Normal distribution facts "
},
{
  "id": "subsec-normal-distribution-model-7",
  "level": "2",
  "url": "sec-normal-distribution.html#subsec-normal-distribution-model-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard normal distribution "
},
{
  "id": "subsec-normal-distribution-model-8",
  "level": "2",
  "url": "sec-normal-distribution.html#subsec-normal-distribution-model-8",
  "type": "Checkpoint",
  "number": "4.1.4",
  "title": "",
  "body": "  Write down the short-hand for a normal distribution with (a) mean 5 and standard deviation 3, (b) mean -100 and standard deviation 10, and (c) mean 2 and standard deviation 9.    (a) . (b) . (c) .   "
},
{
  "id": "ex-act-sat",
  "level": "2",
  "url": "sec-normal-distribution.html#ex-act-sat",
  "type": "Example",
  "number": "4.1.5",
  "title": "Comparing SAT and ACT scores.",
  "body": " Comparing SAT and ACT scores    shows the mean and standard deviation for total scores on the SAT and ACT. The distribution of SAT and ACT scores are both nearly normal. Suppose Ann scored 1300 on her SAT and Tom scored 24 on his ACT. Who performed better?    We use the standard deviation as a guide. Ann is 1 standard deviation above average on the SAT: . Tom is 0.5 standard deviations above the mean on the ACT: . In , we can see that Ann tends to do better with respect to everyone else than Tom did, so her score was better.   "
},
{
  "id": "table-sat-act-stats",
  "level": "2",
  "url": "sec-normal-distribution.html#table-sat-act-stats",
  "type": "Table",
  "number": "4.1.6",
  "title": "Mean and standard deviation for the SAT and ACT",
  "body": " Mean and standard deviation for the SAT and ACT     SAT  ACT    Mean  1100  21    SD  200  6    "
},
{
  "id": "fig-sat-act-normals",
  "level": "2",
  "url": "sec-normal-distribution.html#fig-sat-act-normals",
  "type": "Figure",
  "number": "4.1.7",
  "title": "",
  "body": " Ann's and Tom's scores shown against the SAT and ACT distributions.   "
},
{
  "id": "subsec-standardizing-z-scores-6",
  "level": "2",
  "url": "sec-normal-distribution.html#subsec-standardizing-z-scores-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Z-score "
},
{
  "id": "subsec-standardizing-z-scores-7-1",
  "level": "2",
  "url": "sec-normal-distribution.html#subsec-standardizing-z-scores-7-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "The Z-score "
},
{
  "id": "subsec-standardizing-z-scores-8",
  "level": "2",
  "url": "sec-normal-distribution.html#subsec-standardizing-z-scores-8",
  "type": "Checkpoint",
  "number": "4.1.8",
  "title": "",
  "body": "  Use Tom's ACT score, 24, along with the ACT mean and standard deviation to find his Z-score.        "
},
{
  "id": "subsec-standardizing-z-scores-10",
  "level": "2",
  "url": "sec-normal-distribution.html#subsec-standardizing-z-scores-10",
  "type": "Checkpoint",
  "number": "4.1.9",
  "title": "",
  "body": "  Let represent a random variable from , and suppose we observe . (a) Find the Z-score of . (b) Use the Z-score to determine how many standard deviations above or below the mean falls.    (a) Its Z-score is given by . (b) The observation is 1.095 standard deviations above the mean. We know it must be above the mean since is positive.   "
},
{
  "id": "ex-head-length-zscore",
  "level": "2",
  "url": "sec-normal-distribution.html#ex-head-length-zscore",
  "type": "Checkpoint",
  "number": "4.1.10",
  "title": "",
  "body": "  Head lengths of brushtail possums follow a normal distribution with mean 92.6 mm and standard deviation 3.6 mm. Compute the Z-scores for possums with head lengths of 95.4 mm and 85.8 mm.    For mm: . For mm: .   "
},
{
  "id": "subsec-standardizing-z-scores-13",
  "level": "2",
  "url": "sec-normal-distribution.html#subsec-standardizing-z-scores-13",
  "type": "Checkpoint",
  "number": "4.1.11",
  "title": "",
  "body": "  Which of the observations in is more unusual?    Because the absolute value of Z-score for the second observation is larger than that of the first, the second observation has a more unusual head length.   "
},
{
  "id": "subsec-finding-tail-areas-2",
  "level": "2",
  "url": "sec-normal-distribution.html#subsec-finding-tail-areas-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "percentile "
},
{
  "id": "fig-sat-below-1300",
  "level": "2",
  "url": "sec-normal-distribution.html#fig-sat-below-1300",
  "type": "Figure",
  "number": "4.1.12",
  "title": "",
  "body": " The area to the left of represents the fraction of people who scored lower than Ann.   "
},
{
  "id": "subsec-finding-tail-areas-4",
  "level": "2",
  "url": "sec-normal-distribution.html#subsec-finding-tail-areas-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "probability table "
},
{
  "id": "subsec-finding-tail-areas-5",
  "level": "2",
  "url": "sec-normal-distribution.html#subsec-finding-tail-areas-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "test statistics "
},
{
  "id": "ex-sat-above-1190",
  "level": "2",
  "url": "sec-normal-distribution.html#ex-sat-above-1190",
  "type": "Example",
  "number": "4.1.13",
  "title": "Finding probability of SAT score above 1190.",
  "body": " Finding probability of SAT score above 1190   Shannon is a randomly selected SAT taker, and nothing is known about Shannon's SAT aptitude. What is the probability Shannon scores at least 1190 on her SATs?    First, always draw and label a picture of the normal distribution. (Drawings need not be exact to be useful.) We are interested in the chance she scores above 1190, so we shade this upper tail:   Shading the upper tail above 1190    The picture shows the mean and the values at 2 standard deviations above and below the mean. The simplest way to find the shaded area under the curve makes use of the Z-score of the cutoff value. With , , and the cutoff value , the Z-score is computed as Using statistical software (or another preferred method), we can find the area left of as 0.6736. To find the area above  , we compute one minus the area of the lower tail:   Computing the upper tail area    The probability Shannon scores at least 1190 on the SAT is 0.3264.   "
},
{
  "id": "subsec-normal-probability-examples-4-1",
  "level": "2",
  "url": "sec-normal-distribution.html#subsec-normal-probability-examples-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Always draw a picture first, and find the Z-score second "
},
{
  "id": "subsec-normal-probability-examples-5",
  "level": "2",
  "url": "sec-normal-distribution.html#subsec-normal-probability-examples-5",
  "type": "Checkpoint",
  "number": "4.1.16",
  "title": "",
  "body": "  If the probability of Shannon scoring at least 1190 is 0.3264, then what is the probability she scores less than 1190? Draw the normal curve representing this exercise, shading the lower region instead of the upper one.    We found this probability in : 0.6736.   "
},
{
  "id": "ex-edward-sat-below-1030",
  "level": "2",
  "url": "sec-normal-distribution.html#ex-edward-sat-below-1030",
  "type": "Example",
  "number": "4.1.17",
  "title": "Finding a percentile.",
  "body": " Finding a percentile   Edward earned a 1030 on his SAT. What is his percentile?    First, a picture is needed. Edward's percentile is the proportion of people who do not get as high as a 1030. These are the scores to the left of 1030.   Shading the lower tail below 1030    Identifying the mean , the standard deviation , and the cutoff for the tail area makes it easy to compute the Z-score: Using statistical software, we get a tail area of 0.3632. Edward is at the 36 percentile.   "
},
{
  "id": "subsec-normal-probability-examples-7",
  "level": "2",
  "url": "sec-normal-distribution.html#subsec-normal-probability-examples-7",
  "type": "Checkpoint",
  "number": "4.1.19",
  "title": "",
  "body": "  Use the results of to compute the proportion of SAT takers who did better than Edward. Also draw a new picture.    If Edward did better than 36% of SAT takers, then about 64% must have done better than him.   "
},
{
  "id": "subsec-normal-probability-examples-8-1",
  "level": "2",
  "url": "sec-normal-distribution.html#subsec-normal-probability-examples-8-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Finding areas to the right "
},
{
  "id": "subsec-normal-probability-examples-9",
  "level": "2",
  "url": "sec-normal-distribution.html#subsec-normal-probability-examples-9",
  "type": "Checkpoint",
  "number": "4.1.20",
  "title": "",
  "body": "  Stuart earned an SAT score of 1500. Draw a picture for each part. (a) What is his percentile? (b) What percent of SAT takers did better than Stuart?    We leave the drawings to you. (a) . (b) .   "
},
{
  "id": "subsec-normal-probability-examples-11",
  "level": "2",
  "url": "sec-normal-distribution.html#subsec-normal-probability-examples-11",
  "type": "Checkpoint",
  "number": "4.1.21",
  "title": "",
  "body": "  Mike is 5'7'' and Jose is 6'4'', and they both live in the US. (a) What is Mike's height percentile? (b) What is Jose's height percentile? Also draw one picture for each part.    First put the heights into inches: 67 and 76 inches. (a) . (b) .   "
},
{
  "id": "ex-normal-40-perc",
  "level": "2",
  "url": "sec-normal-distribution.html#ex-normal-40-perc",
  "type": "Example",
  "number": "4.1.22",
  "title": "Finding height at 40th percentile.",
  "body": " Finding height at 40th percentile   Erik's height is at the 40 percentile. How tall is he?    As always, first draw the picture.   Finding the height at the 40th percentile    In this case, the lower tail probability is known (0.40), which can be shaded on the diagram. We want to find the observation that corresponds to this value. As a first step in this direction, we determine the Z-score associated with the 40 percentile. Using software, we can obtain the corresponding Z-score of about -0.25.  Knowing and the population parameters and inches, the Z-score formula can be set up to determine Erik's unknown height, labeled : Solving for yields a height of 69.18 inches. That is, Erik is about 5'9''.   "
},
{
  "id": "ex-height-82-perc",
  "level": "2",
  "url": "sec-normal-distribution.html#ex-height-82-perc",
  "type": "Example",
  "number": "4.1.24",
  "title": "Finding height at 82nd percentile.",
  "body": " Finding height at 82nd percentile   What is the adult male height at the 82 percentile?    Again, we draw the figure first.   Finding the height at the 82nd percentile    Next, we want to find the Z-score at the 82 percentile, which will be a positive value and can be found using software as . Finally, the height is found using the Z-score formula with the known mean , standard deviation , and Z-score : This yields 73.04 inches or about 6'1'' as the height at the 82 percentile.   "
},
{
  "id": "subsec-normal-probability-examples-15",
  "level": "2",
  "url": "sec-normal-distribution.html#subsec-normal-probability-examples-15",
  "type": "Checkpoint",
  "number": "4.1.26",
  "title": "",
  "body": "  The SAT scores follow . (a) What is the 95 percentile for SAT scores? (b) What is the 97.5 percentile for SAT scores?    Short answers: (a) SAT score. (b) SAT score.   "
},
{
  "id": "ex-more-74-less-69",
  "level": "2",
  "url": "sec-normal-distribution.html#ex-more-74-less-69",
  "type": "Checkpoint",
  "number": "4.1.27",
  "title": "",
  "body": "  Adult male heights follow . (a) What is the probability that a randomly selected male adult is at least 6'2'' (74 inches)? (b) What is the probability that a male adult is shorter than 5'9'' (69 inches)?    Short answers: (a) , then subtract this value from 1 to get 0.1131. (b) .   "
},
{
  "id": "ex-between-59-and-62",
  "level": "2",
  "url": "sec-normal-distribution.html#ex-between-59-and-62",
  "type": "Example",
  "number": "4.1.28",
  "title": "Finding probability between two values.",
  "body": " Finding probability between two values   What is the probability that a random adult male is between 5'9'' and 6'2''?    These heights correspond to 69 inches and 74 inches. First, draw the figure. The area of interest is no longer an upper or lower tail.   Finding area between two values    The total area under the curve is 1. If we find the area of the two tails that are not shaded (from , these areas are 0.3821 and 0.1131), then we can find the middle area:   Subtracting the tail areas from 1    That is, the probability of being between 5'9'' and 6'2'' is 0.5048.   "
},
{
  "id": "subsec-normal-probability-examples-18",
  "level": "2",
  "url": "sec-normal-distribution.html#subsec-normal-probability-examples-18",
  "type": "Checkpoint",
  "number": "4.1.31",
  "title": "",
  "body": "  SAT scores follow . What percent of SAT takers get between 1100 and 1400?    This is an abbreviated solution. (Be sure to draw a figure!) First find the percent who get below 1100 and the percent that get above 1400: (area below), (area above). Final answer: .   "
},
{
  "id": "subsec-normal-probability-examples-19",
  "level": "2",
  "url": "sec-normal-distribution.html#subsec-normal-probability-examples-19",
  "type": "Checkpoint",
  "number": "4.1.32",
  "title": "",
  "body": "  Adult male heights follow . What percent of adult males are between 5'5'' and 5'7''?    5'5'' is 65 inches ( ). 5'7'' is 67 inches ( ). Numerical solution: , i.e. 11.71%.   "
},
{
  "id": "fig-68-95-997",
  "level": "2",
  "url": "sec-normal-distribution.html#fig-68-95-997",
  "type": "Figure",
  "number": "4.1.33",
  "title": "",
  "body": " Probabilities for falling within 1, 2, and 3 standard deviations of the mean in a normal distribution.   "
},
{
  "id": "subsec-68-95-997-rule-4",
  "level": "2",
  "url": "sec-normal-distribution.html#subsec-68-95-997-rule-4",
  "type": "Checkpoint",
  "number": "4.1.34",
  "title": "",
  "body": "  Use software, a calculator, or a probability table to confirm that about 68%, 95%, and 99.7% of observations fall within 1, 2, and 3 standard deviations of the mean in the normal distribution, respectively. For instance, first find the area that falls between and , which should have an area of about 0.68. Similarly there should be an area of about 0.95 between and .    First draw the pictures. Using software, we get 0.6827 within 1 standard deviation, 0.9545 within 2 standard deviations, and 0.9973 within 3 standard deviations.   "
},
{
  "id": "subsec-68-95-997-rule-6",
  "level": "2",
  "url": "sec-normal-distribution.html#subsec-68-95-997-rule-6",
  "type": "Checkpoint",
  "number": "4.1.35",
  "title": "",
  "body": "  SAT scores closely follow the normal model with mean and standard deviation . (a) About what percent of test takers score 700 to 1500? (b) What percent score between 1100 and 1500?    (a) 700 and 1500 represent two standard deviations below and above the mean, which means about 95% of test takers will score between 700 and 1500. (b) We found that 700 to 1500 represents about 95% of test takers. These test takers would be evenly split by the center of the distribution, 1100, so of all test takers score between 1100 and 1500.   "
},
{
  "id": "ex-area-under-curve-1",
  "level": "2",
  "url": "sec-normal-distribution.html#ex-area-under-curve-1",
  "type": "Exercise",
  "number": "4.1.6.1",
  "title": "Area under the curve, Part I.",
  "body": " Area under the curve, Part I   What percent of a standard normal distribution is found in each region? Be sure to draw a graph.           "
},
{
  "id": "ex-area-under-curve-2",
  "level": "2",
  "url": "sec-normal-distribution.html#ex-area-under-curve-2",
  "type": "Exercise",
  "number": "4.1.6.2",
  "title": "Area under the curve, Part II.",
  "body": " Area under the curve, Part II   What percent of a standard normal distribution is found in each region? Be sure to draw a graph.           "
},
{
  "id": "ex-gre-intro",
  "level": "2",
  "url": "sec-normal-distribution.html#ex-gre-intro",
  "type": "Exercise",
  "number": "4.1.6.3",
  "title": "GRE scores, Part I.",
  "body": " GRE scores, Part I   Sophia who took the Graduate Record Examination (GRE) scored 160 on the Verbal Reasoning section and 157 on the Quantitative Reasoning section. The mean score for Verbal Reasoning section for all test takers was 151 with a standard deviation of 7, and the mean score for the Quantitative Reasoning was 153 with a standard deviation of 7.67. Suppose that both distributions are nearly normal.    Write down the short-hand for these two normal distributions.   What is Sophia's Z-score on the Verbal Reasoning section? On the Quantitative Reasoning section? Draw a standard normal distribution curve and mark these two Z-scores.   What do these Z-scores tell you?  Relative to others, which section did she do better on?  Find her percentile scores for the two exams.   What percent of the test takers did better than her on the Verbal Reasoning section? On the Quantitative Reasoning section?    Explain why simply comparing raw scores from the two sections could lead to an incorrect conclusion as to which section a student did better on.    If the distributions of the scores on these exams are not nearly normal, would your answers to parts (b) - (f) change? Explain your reasoning.      "
},
{
  "id": "ex-triathlon-times-intro",
  "level": "2",
  "url": "sec-normal-distribution.html#ex-triathlon-times-intro",
  "type": "Exercise",
  "number": "4.1.6.4",
  "title": "Triathlon times, Part I.",
  "body": " Triathlon times, Part I   In triathlons, it is common for racers to be placed into age and gender groups. Friends Leo and Mary both completed the Hermosa Beach Triathlon, where Leo competed in the Men, Ages 30 - 34 group while Mary competed in the Women, Ages 25 - 29 group. Leo completed the race in 1:22:28 (4948 seconds), while Mary completed the race in 1:31:53 (5513 seconds). Obviously Leo finished faster, but they are curious about how they did within their respective groups. Can you help them? Here is some information on the performance of their groups:     The finishing times of the Men, Ages 30 - 34 group has a mean of 4313 seconds with a standard deviation of 583 seconds.    The finishing times of the Women, Ages 25 - 29 group has a mean of 5261 seconds with a standard deviation of 807 seconds.    The distributions of finishing times for both groups are approximately normal.     Remember: a better performance corresponds to a faster finish.    Write down the short-hand for these two normal distributions.   What are the Z-scores for Leo's and Mary's finishing times? What do these Z-scores tell you?    Did Leo or Mary rank better in their respective groups? Explain your reasoning.    What percent of the triathletes did Leo finish faster than in his group?    What percent of the triathletes did Mary finish faster than in her group?    If the distributions of finishing times are not nearly normal, would your answers to parts (b)-(e) change? Explain your reasoning.      "
},
{
  "id": "ex-gre-cutoffs",
  "level": "2",
  "url": "sec-normal-distribution.html#ex-gre-cutoffs",
  "type": "Exercise",
  "number": "4.1.6.5",
  "title": "GRE scores, Part II.",
  "body": " GRE scores, Part II   In we saw two distributions for GRE scores: for the verbal part of the exam and for the quantitative part. Use this information to compute each of the following:     The score of a student who scored in the 80 percentile on the Quantitative Reasoning section.    The score of a student who scored worse than 70% of the test takers in the Verbal Reasoning section.      "
},
{
  "id": "ex-triathlon-times-cutoffs",
  "level": "2",
  "url": "sec-normal-distribution.html#ex-triathlon-times-cutoffs",
  "type": "Exercise",
  "number": "4.1.6.6",
  "title": "Triathlon times, Part II.",
  "body": " Triathlon times, Part II   In we saw two distributions for triathlon times: for Men, Ages 30 - 34 and for the Women, Ages 25 - 29 group. Times are listed in seconds. Use this information to compute each of the following:     The cutoff time for the fastest 5% of athletes in the men's group, i.e. those who took the shortest 5% of time to finish.    The cutoff time for the slowest 10% of athletes in the women's group.      "
},
{
  "id": "ex-la-weather-intro",
  "level": "2",
  "url": "sec-normal-distribution.html#ex-la-weather-intro",
  "type": "Exercise",
  "number": "4.1.6.7",
  "title": "LA weather, Part I.",
  "body": " LA weather, Part I   The average daily high temperature in June in LA is 77°F with a standard deviation of 5°F. Suppose that the temperatures in June closely follow a normal distribution.     What is the probability of observing an 83°F temperature or higher in LA during a randomly chosen day in June?    How cool are the coldest 10% of the days (days with lowest high temperature) during June in LA?      "
},
{
  "id": "ex-capm",
  "level": "2",
  "url": "sec-normal-distribution.html#ex-capm",
  "type": "Exercise",
  "number": "4.1.6.8",
  "title": "CAPM.",
  "body": " CAPM   The Capital Asset Pricing Model (CAPM) is a financial model that assumes returns on a portfolio are normally distributed. Suppose a portfolio has an average annual return of 14.7% (i.e. an average gain of 14.7%) with a standard deviation of 33%. A return of 0% means the value of the portfolio doesn't change, a negative return means that the portfolio loses money, and a positive return means that the portfolio gains money.     What percent of years does this portfolio lose money, i.e. have a return less than 0%?    What is the cutoff for the highest 15% of annual returns with this portfolio?      "
},
{
  "id": "ex-la-weather-unit-change",
  "level": "2",
  "url": "sec-normal-distribution.html#ex-la-weather-unit-change",
  "type": "Exercise",
  "number": "4.1.6.9",
  "title": "LA weather, Part II.",
  "body": " LA weather, Part II    states that average daily high temperature in June in LA is 77°F with a standard deviation of 5°F, and it can be assumed that they follow a normal distribution. We use the following equation to convert °F (Fahrenheit) to °C (Celsius):      Write the probability model for the distribution of temperature in °C in June in LA.    What is the probability of observing a 28°C (which roughly corresponds to 83°F) temperature or higher in June in LA? Calculate using the °C model from part (a).    Did you get the same answer or different answers in part (b) of this question and part (a) of ? Are you surprised? Explain.    Estimate the IQR of the temperatures (in °C) in June in LA.      "
},
{
  "id": "ex-find-sd-cholesterol",
  "level": "2",
  "url": "sec-normal-distribution.html#ex-find-sd-cholesterol",
  "type": "Exercise",
  "number": "4.1.6.10",
  "title": "Find the SD.",
  "body": " Find the SD   Cholesterol levels for women aged 20 to 34 follow an approximately normal distribution with mean 185 milligrams per deciliter (mg\/dl). Women with cholesterol levels above 220 mg\/dl are considered to have high cholesterol and about 18.5% of women fall into this category. What is the standard deviation of the distribution of cholesterol levels for women aged 20 to 34?   "
},
{
  "id": "sec-geometric-distribution",
  "level": "1",
  "url": "sec-geometric-distribution.html",
  "type": "Section",
  "number": "4.2",
  "title": "Geometric distribution",
  "body": " Geometric distribution   How long should we expect to flip a coin until it turns up heads? Or how many times should we expect to roll a die until we get a 1? These questions can be answered using the geometric distribution. We first formalize each trial such as a single coin flip or die toss using the Bernoulli distribution, and then we combine these with our tools from probability (Chapter 3) to construct the geometric distribution.    Bernoulli distribution  Many health insurance plans in the United States have a deductible, where the insured individual is responsible for costs up to the deductible, and then the costs above the deductible are shared between the individual and insurance company for the remainder of the year.  Suppose a health insurance company found that 70% of the people they insure stay below their deductible in any given year. Each of these people can be thought of as a trial . We label a person a success if her healthcare costs do not exceed the deductible. We label a person a failure if she does exceed her deductible in the year. Because 70% of the individuals will not hit their deductible, we denote the probability of a success as . The probability of a failure is sometimes denoted with , which would be 0.3 for the insurance example.  When an individual trial only has two possible outcomes, often labeled as success or failure , it is called a Bernoulli random variable . We chose to label a person who does not hit her deductible as a success and all others as failures . However, we could just as easily have reversed these labels. The mathematical framework we will build does not depend on which outcome is labeled a success and which a failure, as long as we are consistent.  Bernoulli random variables are often denoted as 1 for a success and 0 for a failure. In addition to being convenient in entering data, it is also mathematically handy. Suppose we observe ten trials:  1 1 1 0 1 0 0 1 1 0  Then the sample proportion , , is the sample mean of these observations: This mathematical inquiry of Bernoulli random variables can be extended even further. Because 0 and 1 are numerical outcomes, we can define the mean and standard deviation of a Bernoulli random variable. (See Exercises and .)    Bernoulli random variable   If is a random variable that takes value 1 with probability of success and 0 with probability , then is a Bernoulli random variable with mean and standard deviation    In general, it is useful to think about a Bernoulli random variable as a random process with only two outcomes: a success or failure. Then we build our mathematical framework using the numerical labels 1 and 0 for successes and failures, respectively.    Geometric distribution  The geometric distribution is used to describe how many trials it takes to observe a success. Let's first look at an example.   Finding first success in insurance claims   Suppose we are working at the insurance company and need to find a case where the person did not exceed her (or his) deductible as a case study. If the probability a person will not exceed her deductible is 0.7 and we are drawing people at random, what are the chances that the first person will not have exceeded her deductible, i.e. be a success? The second person? The third? What about we pull cases before we find the first success, i.e. the first success is the person? (If the first success is the fifth person, then we say .)    The probability of stopping after the first person is just the chance the first person will not hit her (or his) deductible: 0.7. The probability the second person is the first to not hit her deductible is Likewise, the probability it will be the third case is .  If the first success is on the person, then there are failures and finally 1 success, which corresponds to the probability . This is the same as .     illustrates what the geometric distribution is, which describes the waiting time until a success for independent and identically distributed (iid) Bernoulli random variables. In this case, the independence aspect just means the individuals in the example don't affect each other, and identical means they each have the same probability of success.  The geometric distribution from is shown in . In general, the probabilities for a geometric distribution decrease exponentially fast.   The geometric distribution when the probability of success is     While this text will not derive the formulas for the mean (expected) number of trials needed to find the first success or the standard deviation or variance of this distribution, we present general formulas for each.    Geometric Distribution   If the probability of a success in one trial is and the probability of a failure is , then the probability of finding the first success in the trial is given by The mean (i.e. expected value), variance, and standard deviation of this wait time are given by    It is no accident that we use the symbol for both the mean and expected value. The mean and the expected value are one and the same.  It takes, on average, trials to get a success under the geometric distribution. This mathematical result is consistent with what we would expect intuitively. If the probability of a success is high (e.g. 0.8), then we don't usually wait very long for a success: trials on average. If the probability of a success is low (e.g. 0.1), then we would expect to view many trials before we see a success: trials.    The probability that a particular case would not exceed their deductible is said to be 0.7. If we were to examine cases until we found one where the person did not hit her deductible, how many cases should we expect to check?    We would expect to see about individuals to find the first success.     Finding probability of success within first 3 cases   What is the chance that we would find the first success within the first 3 cases?    This is the chance it is the first ( ), second ( ), or third ( ) case is the first success, which are three disjoint outcomes. Because the individuals in the sample are randomly sampled from a large population, they are independent. We compute the probability of each case and add the separate results: There is a probability of 0.973 that we would find a successful case within 3 cases.      Determine a more clever way to solve . Show that you get the same result.    First find the probability of the complement: . Next, compute one minus this probability: .     Expected draws for car insurance   Suppose a car insurer has determined that 88% of its drivers will not exceed their deductible in a given year. If someone at the company were to randomly draw driver files until they found one that had not exceeded their deductible, what is the expected number of drivers the insurance employee must check? What is the standard deviation of the number of driver files that must be drawn?    In this example, a success is again when someone will not exceed the insurance deductible, which has probability . The expected number of people to be checked is and the standard deviation is .      Using the results from , and , would it be appropriate to use the normal model to find what proportion of experiments would end in 3 or fewer trials?    No. The geometric distribution is always right skewed and can never be well-approximated by the normal model.    The independence assumption is crucial to the geometric distribution's accurate description of a scenario. Mathematically, we can see that to construct the probability of the success on the trial, we had to use the Multiplication Rule for Independent Processes. It is no simple task to generalize the geometric model for dependent trials.    Exercises   Is it Bernoulli   Determine if each trial can be considered an independent Bernoulli trial for the following situations.    Cards dealt in a hand of poker.  Outcome of each roll of a die.       With and without replacement   In the following situations assume that half of the specified population is male and the other half is female.     Suppose you're sampling from a room with 10 people. What is the probability of sampling two females in a row when sampling with replacement? What is the probability when sampling without replacement?    Now suppose you're sampling from a stadium with 10,000 people. What is the probability of sampling two females in a row when sampling with replacement? What is the probability when sampling without replacement?    We often treat individuals who are sampled from a large population as independent. Using your findings from parts (a) and (b), explain whether or not this assumption is reasonable.        Eye color, Part I   A husband and wife both have brown eyes but carry genes that make it possible for their children to have brown eyes (probability 0.75), blue eyes (0.125), or green eyes (0.125).     What is the probability the first blue-eyed child they have is their third child? Assume that the eye colors of the children are independent of each other.    On average, how many children would such a pair of parents have before having a blue-eyed child? What is the standard deviation of the number of children they would expect to have until the first blue-eyed child?        Defective rate   A machine that produces a special type of transistor (a component of computers) has a 2% defective rate. The production is considered a random process where each transistor is independent of the others.     What is the probability that the transistor produced is the first with a defect?    What is the probability that the machine produces no defective transistors in a batch of 100?    On average, how many transistors would you expect to be produced before the first with a defect? What is the standard deviation?    Another machine that also produces transistors has a 5% defective rate where each transistor is produced independent of the others. On average how many transistors would you expect to be produced with this machine before the first with a defect? What is the standard deviation?    Based on your answers to parts (c) and (d), how does increasing the probability of an event affect the mean and standard deviation of the wait time until success?        Bernoulli, the mean   Use the probability rules from Section 3.4 to derive the mean of a Bernoulli random variable, i.e. a random variable that takes value 1 with probability and value 0 with probability . That is, compute the expected value of a generic Bernoulli random variable.     Bernoulli, the standard deviation   Use the probability rules from Section 3.4 to derive the standard deviation of a Bernoulli random variable, i.e. a random variable that takes value 1 with probability and value 0 with probability . That is, compute the square root of the variance of a generic Bernoulli random variable.     "
},
{
  "id": "subsec-bernoulli-distribution-3",
  "level": "2",
  "url": "sec-geometric-distribution.html#subsec-bernoulli-distribution-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "trial success failure probability of a success "
},
{
  "id": "subsec-bernoulli-distribution-4",
  "level": "2",
  "url": "sec-geometric-distribution.html#subsec-bernoulli-distribution-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Bernoulli random variable "
},
{
  "id": "subsec-bernoulli-distribution-7",
  "level": "2",
  "url": "sec-geometric-distribution.html#subsec-bernoulli-distribution-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sample proportion "
},
{
  "id": "subsec-bernoulli-distribution-8-1",
  "level": "2",
  "url": "sec-geometric-distribution.html#subsec-bernoulli-distribution-8-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Bernoulli random variable "
},
{
  "id": "subsec-geometric-distribution-def-2",
  "level": "2",
  "url": "sec-geometric-distribution.html#subsec-geometric-distribution-def-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "geometric distribution "
},
{
  "id": "ex-wait-for-deductible",
  "level": "2",
  "url": "sec-geometric-distribution.html#ex-wait-for-deductible",
  "type": "Example",
  "number": "4.2.1",
  "title": "Finding first success in insurance claims.",
  "body": " Finding first success in insurance claims   Suppose we are working at the insurance company and need to find a case where the person did not exceed her (or his) deductible as a case study. If the probability a person will not exceed her deductible is 0.7 and we are drawing people at random, what are the chances that the first person will not have exceeded her deductible, i.e. be a success? The second person? The third? What about we pull cases before we find the first success, i.e. the first success is the person? (If the first success is the fifth person, then we say .)    The probability of stopping after the first person is just the chance the first person will not hit her (or his) deductible: 0.7. The probability the second person is the first to not hit her deductible is Likewise, the probability it will be the third case is .  If the first success is on the person, then there are failures and finally 1 success, which corresponds to the probability . This is the same as .   "
},
{
  "id": "subsec-geometric-distribution-def-4",
  "level": "2",
  "url": "sec-geometric-distribution.html#subsec-geometric-distribution-def-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "geometric distribution independent and identically distributed (iid) "
},
{
  "id": "subsec-geometric-distribution-def-5",
  "level": "2",
  "url": "sec-geometric-distribution.html#subsec-geometric-distribution-def-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exponentially "
},
{
  "id": "fig-geometric-dist-70",
  "level": "2",
  "url": "sec-geometric-distribution.html#fig-geometric-dist-70",
  "type": "Figure",
  "number": "4.2.2",
  "title": "",
  "body": " The geometric distribution when the probability of success is    "
},
{
  "id": "subsec-geometric-distribution-def-8-1",
  "level": "2",
  "url": "sec-geometric-distribution.html#subsec-geometric-distribution-def-8-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Geometric Distribution "
},
{
  "id": "subsec-geometric-distribution-def-11",
  "level": "2",
  "url": "sec-geometric-distribution.html#subsec-geometric-distribution-def-11",
  "type": "Checkpoint",
  "number": "4.2.3",
  "title": "",
  "body": "  The probability that a particular case would not exceed their deductible is said to be 0.7. If we were to examine cases until we found one where the person did not hit her deductible, how many cases should we expect to check?    We would expect to see about individuals to find the first success.   "
},
{
  "id": "ex-insure-first-success-in-lt4",
  "level": "2",
  "url": "sec-geometric-distribution.html#ex-insure-first-success-in-lt4",
  "type": "Example",
  "number": "4.2.4",
  "title": "Finding probability of success within first 3 cases.",
  "body": " Finding probability of success within first 3 cases   What is the chance that we would find the first success within the first 3 cases?    This is the chance it is the first ( ), second ( ), or third ( ) case is the first success, which are three disjoint outcomes. Because the individuals in the sample are randomly sampled from a large population, they are independent. We compute the probability of each case and add the separate results: There is a probability of 0.973 that we would find a successful case within 3 cases.   "
},
{
  "id": "subsec-geometric-distribution-def-13",
  "level": "2",
  "url": "sec-geometric-distribution.html#subsec-geometric-distribution-def-13",
  "type": "Checkpoint",
  "number": "4.2.5",
  "title": "",
  "body": "  Determine a more clever way to solve . Show that you get the same result.    First find the probability of the complement: . Next, compute one minus this probability: .   "
},
{
  "id": "ex-car-insure-08-draw-one",
  "level": "2",
  "url": "sec-geometric-distribution.html#ex-car-insure-08-draw-one",
  "type": "Example",
  "number": "4.2.6",
  "title": "Expected draws for car insurance.",
  "body": " Expected draws for car insurance   Suppose a car insurer has determined that 88% of its drivers will not exceed their deductible in a given year. If someone at the company were to randomly draw driver files until they found one that had not exceeded their deductible, what is the expected number of drivers the insurance employee must check? What is the standard deviation of the number of driver files that must be drawn?    In this example, a success is again when someone will not exceed the insurance deductible, which has probability . The expected number of people to be checked is and the standard deviation is .   "
},
{
  "id": "subsec-geometric-distribution-def-15",
  "level": "2",
  "url": "sec-geometric-distribution.html#subsec-geometric-distribution-def-15",
  "type": "Checkpoint",
  "number": "4.2.7",
  "title": "",
  "body": "  Using the results from , and , would it be appropriate to use the normal model to find what proportion of experiments would end in 3 or fewer trials?    No. The geometric distribution is always right skewed and can never be well-approximated by the normal model.   "
},
{
  "id": "ex-is-it-bernoulli",
  "level": "2",
  "url": "sec-geometric-distribution.html#ex-is-it-bernoulli",
  "type": "Exercise",
  "number": "4.2.3.1",
  "title": "Is it Bernoulli.",
  "body": " Is it Bernoulli   Determine if each trial can be considered an independent Bernoulli trial for the following situations.    Cards dealt in a hand of poker.  Outcome of each roll of a die.     "
},
{
  "id": "ex-with-without-replacement",
  "level": "2",
  "url": "sec-geometric-distribution.html#ex-with-without-replacement",
  "type": "Exercise",
  "number": "4.2.3.2",
  "title": "With and without replacement.",
  "body": " With and without replacement   In the following situations assume that half of the specified population is male and the other half is female.     Suppose you're sampling from a room with 10 people. What is the probability of sampling two females in a row when sampling with replacement? What is the probability when sampling without replacement?    Now suppose you're sampling from a stadium with 10,000 people. What is the probability of sampling two females in a row when sampling with replacement? What is the probability when sampling without replacement?    We often treat individuals who are sampled from a large population as independent. Using your findings from parts (a) and (b), explain whether or not this assumption is reasonable.      "
},
{
  "id": "ex-eye-color-geometric",
  "level": "2",
  "url": "sec-geometric-distribution.html#ex-eye-color-geometric",
  "type": "Exercise",
  "number": "4.2.3.3",
  "title": "Eye color, Part I.",
  "body": " Eye color, Part I   A husband and wife both have brown eyes but carry genes that make it possible for their children to have brown eyes (probability 0.75), blue eyes (0.125), or green eyes (0.125).     What is the probability the first blue-eyed child they have is their third child? Assume that the eye colors of the children are independent of each other.    On average, how many children would such a pair of parents have before having a blue-eyed child? What is the standard deviation of the number of children they would expect to have until the first blue-eyed child?      "
},
{
  "id": "ex-defective-rate",
  "level": "2",
  "url": "sec-geometric-distribution.html#ex-defective-rate",
  "type": "Exercise",
  "number": "4.2.3.4",
  "title": "Defective rate.",
  "body": " Defective rate   A machine that produces a special type of transistor (a component of computers) has a 2% defective rate. The production is considered a random process where each transistor is independent of the others.     What is the probability that the transistor produced is the first with a defect?    What is the probability that the machine produces no defective transistors in a batch of 100?    On average, how many transistors would you expect to be produced before the first with a defect? What is the standard deviation?    Another machine that also produces transistors has a 5% defective rate where each transistor is produced independent of the others. On average how many transistors would you expect to be produced with this machine before the first with a defect? What is the standard deviation?    Based on your answers to parts (c) and (d), how does increasing the probability of an event affect the mean and standard deviation of the wait time until success?      "
},
{
  "id": "ex-bernoulli-mean-derivation",
  "level": "2",
  "url": "sec-geometric-distribution.html#ex-bernoulli-mean-derivation",
  "type": "Exercise",
  "number": "4.2.3.5",
  "title": "Bernoulli, the mean.",
  "body": " Bernoulli, the mean   Use the probability rules from Section 3.4 to derive the mean of a Bernoulli random variable, i.e. a random variable that takes value 1 with probability and value 0 with probability . That is, compute the expected value of a generic Bernoulli random variable.   "
},
{
  "id": "ex-bernoulli-sd-derivation",
  "level": "2",
  "url": "sec-geometric-distribution.html#ex-bernoulli-sd-derivation",
  "type": "Exercise",
  "number": "4.2.3.6",
  "title": "Bernoulli, the standard deviation.",
  "body": " Bernoulli, the standard deviation   Use the probability rules from Section 3.4 to derive the standard deviation of a Bernoulli random variable, i.e. a random variable that takes value 1 with probability and value 0 with probability . That is, compute the square root of the variance of a generic Bernoulli random variable.   "
},
{
  "id": "sec-binomial-distribution",
  "level": "1",
  "url": "sec-binomial-distribution.html",
  "type": "Section",
  "number": "4.3",
  "title": "Binomial distribution",
  "body": " Binomial distribution   The binomial distribution is used to describe the number of successes in a fixed number of trials. This is different from the geometric distribution, which described the number of trials we must wait before we observe a success.    The binomial distribution  Let's again imagine ourselves back at the insurance agency where 70% of individuals do not exceed their deductible.   Probability of one exceeding deductible   Suppose the insurance agency is considering a random sample of four individuals they insure. What is the chance exactly one of them will exceed the deductible and the other three will not? Let's call the four people Ariana ( ), Brittany ( ), Carlton ( ), and Damian ( ) for convenience.    Let's consider a scenario where one person exceeds the deductible: But there are three other scenarios: Brittany, Carlton, or Damian could have been the one to exceed the deductible. In each of these cases, the probability is again . These four scenarios exhaust all the possible ways that exactly one of these four people could have exceeded the deductible, so the total probability is       Verify that the scenario where Brittany is the only one to exceed the deductible has probability .     .    The scenario outlined in is an example of a binomial distribution scenario. The binomial distribution describes the probability of having exactly successes in independent Bernoulli trials with probability of a success (in , , , ). We would like to determine the probabilities associated with the binomial distribution more generally, i.e. we want a formula where we can use , , and to obtain the probability. To do this, we reexamine each part of .  There were four individuals who could have been the one to exceed the deductible, and each of these four scenarios had the same probability. Thus, we could identify the final probability as The first component of this equation is the number of ways to arrange the successes among the trials. The second component is the probability of any of the four (equally probable) scenarios.  Consider under the general case of successes and failures in the trials. In any such scenario, we apply the Multiplication Rule for independent events: This is our general formula for .  Secondly, we introduce a general formula for the number of ways to choose successes in trials, i.e. arrange successes and failures: The quantity is read n choose k . Other notation for choose includes , , and . The exclamation point notation (e.g. ) denotes a factorial expression. Using the formula, we can compute the number of ways to choose successes in trials: This result is exactly what we found by carefully thinking of each possible scenario in .  Substituting choose for the number of scenarios and for the single scenario probability yields the general binomial formula.    Binomial distribution   Suppose the probability of a single trial being a success is . Then the probability of observing exactly successes in independent trials is given by The mean, variance, and standard deviation of the number of observed successes are      Is it binomial? Four conditions to check.     The trials are independent.  The number of trials, , is fixed.  Each trial outcome can be classified as a success or failure .  The probability of a success, , is the same for each trial.      Probability of 3 of 8 exceeding deductible   What is the probability that 3 of 8 randomly selected individuals will have exceeded the insurance deductible, i.e. that 5 of 8 will not exceed the deductible? Recall that 70% of individuals will not exceed the deductible.    We would like to apply the binomial model, so we check the conditions. The number of trials is fixed ( ) (condition 2) and each trial outcome can be classified as a success or failure (condition 3). Because the sample is random, the trials are independent (condition 1) and the probability of a success is the same for each trial (condition 4).  In the outcome of interest, there are successes in trials (recall that a success is an individual who does not exceed the deductible), and the probability of a success is . So the probability that 5 of 8 will not exceed the deductible and 3 will exceed the deductible is given by Dealing with the factorial part: Using , the final probability is about .      Computing binomial probabilities   The first step in using the binomial model is to check that the model is appropriate. The second step is to identify , , and . As the last stage use software or the formulas to determine the probability, then interpret the results.  If you must do calculations by hand, it's often useful to cancel out as many terms as possible in the top and bottom of the binomial coefficient.     If we randomly sampled 40 case files from the insurance agency discussed earlier, how many of the cases would you expect to not have exceeded the deductible in a given year? What is the standard deviation of the number that would not have exceeded the deductible?    We are asked to determine the expected number (the mean) and the standard deviation, both of which can be directly computed from the formulas: and . Because very roughly 95% of observations fall within 2 standard deviations of the mean (see Section 1.6.3), we would probably observe at least 22 but fewer than 34 individuals in our sample who would not exceed the deductible.      The probability that a random smoker will develop a severe lung condition in his or her lifetime is about 0.3. If you have 4 friends who smoke, are the conditions for the binomial model satisfied?    One possible answer: if the friends know each other, then the independence assumption is probably not satisfied. For example, acquaintances may have similar smoking habits, or those friends might make a pact to quit together.      Suppose these four friends do not know each other and we can treat them as if they were a random sample from the population. Is the binomial model appropriate? What is the probability that  None of them will develop a severe lung condition?  One will develop a severe lung condition?  That no more than one will develop a severe lung condition?      To check if the binomial model is appropriate, we must verify the conditions. (i) Since we are supposing we can treat the friends as a random sample, they are independent. (ii) We have a fixed number of trials ( ). (iii) Each outcome is a success or failure. (iv) The probability of a success is the same for each trial since the individuals are like a random sample ( if we say a success is someone getting a lung condition, a morbid choice).  Compute parts (a) and (b) using the binomial formula: , . Note: . Part (c) can be computed as the sum of parts (a) and (b): . That is, there is about a 65% chance that no more than one of your four smoking friends will develop a severe lung condition.      What is the probability that at least 2 of your 4 smoking friends will develop a severe lung condition in their lifetimes?    The complement (no more than one will develop a severe lung condition) as computed in as 0.6517, so we compute one minus this value: 0.3483.      Suppose you have 7 friends who are smokers and they can be treated as a random sample of smokers.   How many would you expect to develop a severe lung condition, i.e. what is the mean?    What is the probability that at most 2 of your 7 friends will develop a severe lung condition?       (a) . (b) .    Next we consider the first term in the binomial probability, choose under some special scenarios.    Why is it true that and for any number ?    Frame these expressions into words. How many different ways are there to arrange 0 successes and failures in trials? (1 way.) How many different ways are there to arrange successes and 0 failures in trials? (1 way.)      How many ways can you arrange one success and failures in trials? How many ways can you arrange successes and one failure in trials?    One success and failures: there are exactly unique places we can put the success, so there are ways to arrange one success and failures. A similar argument is used for the second question. Mathematically, we show these results by verifying the following two equations:       Normal approximation to the binomial distribution  The binomial formula is cumbersome when the sample size ( ) is large, particularly when we consider a range of observations. In some cases we may use the normal distribution as an easier and faster way to estimate binomial probabilities.   Smoker survey probability   Approximately 15% of the US population smokes cigarettes. A local government believed their community had a lower smoker rate and commissioned a survey of 400 randomly selected individuals. The survey found that only 42 of the 400 participants smoke cigarettes. If the true proportion of smokers in the community was really 15%, what is the probability of observing 42 or fewer smokers in a sample of 400 people?    We leave the usual verification that the four conditions for the binomial model are valid as an exercise.  The question posed is equivalent to asking, what is the probability of observing , 1, 2, , or 42 smokers in a sample of when ? We can compute these 43 different probabilities and add them together to find the answer: If the true proportion of smokers in the community is , then the probability of observing 42 or fewer smokers in a sample of is 0.0054.    The computations in are tedious and long. In general, we should avoid such work if an alternative method exists that is faster, easier, and still accurate. Recall that calculating probabilities of a range of values is much easier in the normal model. We might wonder, is it reasonable to use the normal model in place of the binomial distribution? Surprisingly, yes, if certain conditions are met.    Here we consider the binomial model when the probability of a success is . shows four hollow histograms for simulated samples from the binomial distribution using four different sample sizes: . What happens to the shape of the distributions as the sample size increases? What distribution does the last hollow histogram resemble?    The distribution is transformed from a blocky and skewed distribution into one that rather resembles the normal distribution in last hollow histogram.     Hollow histograms of samples from the binomial model when . The sample sizes for the four plots are , 30, 100, and 300, respectively.      Normal approximation of the binomial distribution   The binomial distribution with probability of success is nearly normal when the sample size is sufficiently large that and are both at least 10. The approximate normal distribution has parameters corresponding to the mean and standard deviation of the binomial distribution:    The normal approximation may be used when computing the range of many possible successes. For instance, we may apply the normal distribution to the setting of .   Normal approximation for smoker survey   How can we use the normal approximation to estimate the probability of observing 42 or fewer smokers in a sample of 400, if the true proportion of smokers is ?    Showing that the binomial model is reasonable was a suggested exercise in . We also verify that both and are at least 10: With these conditions checked, we may use the normal approximation in place of the binomial distribution using the mean and standard deviation from the binomial model: We want to find the probability of observing 42 or fewer smokers using this model.      Use the normal model to estimate the probability of observing 42 or fewer smokers. Your answer should be approximately equal to the solution of : 0.0054.    Compute the Z-score first: . The corresponding left tail area is 0.0059.      The normal approximation breaks down on small intervals  The normal approximation to the binomial distribution tends to perform poorly when estimating the probability of a small range of counts, even when the conditions are met.  Suppose we wanted to compute the probability of observing 49, 50, or 51 smokers in 400 when . With such a large sample, we might be tempted to apply the normal approximation and use the range 49 to 51. However, we would find that the binomial solution and the normal approximation notably differ: We can identify the cause of this discrepancy using , which shows the areas representing the binomial probability (outlined) and normal approximation (shaded). Notice that the width of the area under the normal distribution is 0.5 units too slim on both sides of the interval.   A normal curve with the area between 49 and 51 shaded. The outlined area represents the exact binomial probability.      Improving the normal approximation for the binomial distribution   The normal approximation to the binomial distribution for intervals of values is usually improved if cutoff values are modified slightly. The cutoff values for the lower end of a shaded region should be reduced by 0.5, and the cutoff value for the upper end should be increased by 0.5.   The tip to add extra area when applying the normal approximation is most often useful when examining a range of observations. In the example above, the revised normal distribution estimate is 0.0633, much closer to the exact value of 0.0649. While it is possible to also apply this correction when computing a tail area, the benefit of the modification usually disappears since the total interval is typically quite wide.    Exercises   Underage drinking, Part I   Data collected by the Substance Abuse and Mental Health Services Administration (SAMSHA) suggests that 69.7% of 18-20 year olds consumed alcoholic beverages in any given year. Substance Abuse and Mental Health Services Administration, Results from the 2013 National Survey on Drug Use and Health: Summary of National Findings      Suppose a random sample of ten 18-20 year olds is taken. Is the use of the binomial distribution appropriate for calculating the probability that exactly six consumed alcoholic beverages? Explain.    Calculate the probability that exactly 6 out of 10 randomly sampled 18-20 year olds consumed an alcoholic drink.    What is the probability that exactly four out of ten 18-20 year olds have not consumed an alcoholic beverage?    What is the probability that at most 2 out of 5 randomly sampled 18-20 year olds have consumed alcoholic beverages?    What is the probability that at least 1 out of 5 randomly sampled 18-20 year olds have consumed alcoholic beverages?        Chickenpox, Part I   Boston Children's Hospital estimates that 90% of Americans have had chickenpox by the time they reach adulthood. Boston Children's Hospital, Chickenpox      Suppose we take a random sample of 100 American adults. Is the use of the binomial distribution appropriate for calculating the probability that exactly 97 out of 100 randomly sampled American adults had chickenpox during childhood? Explain.    Calculate the probability that exactly 97 out of 100 randomly sampled American adults had chickenpox during childhood.    What is the probability that exactly 3 out of a new sample of 100 American adults have not had chickenpox in their childhood?    What is the probability that at least 1 out of 10 randomly sampled American adults have had chickenpox?    What is the probability that at most 3 out of 10 randomly sampled American adults have not had chickenpox?        Underage drinking, Part II   We learned in that about 70% of 18-20 year olds consumed alcoholic beverages in any given year. We now consider a random sample of fifty 18-20 year olds.     How many people would you expect to have consumed alcoholic beverages? And with what standard deviation?    Would you be surprised if there were 45 or more people who have consumed alcoholic beverages?    What is the probability that 45 or more people in this sample have consumed alcoholic beverages? How does this probability relate to your answer to part (b)?        Chickenpox, Part II   We learned in that about 90% of American adults had chickenpox before adulthood. We now consider a random sample of 120 American adults.     How many people in this sample would you expect to have had chickenpox in their childhood? And with what standard deviation?    Would you be surprised if there were 105 people who have had chickenpox in their childhood?    What is the probability that 105 or fewer people in this sample have had chickenpox in their childhood? How does this probability relate to your answer to part (b)?        Game of dreidel   A dreidel is a four-sided spinning top with the Hebrew letters nun , gimel , hei , and shin , one on each side. Each side is equally likely to come up in a single spin of the dreidel. Suppose you spin a dreidel three times. Calculate the probability of getting    at least one nun ?  exactly 2 nun s?  exactly 1 hei ?  at most 2 gimel s?       Arachnophobia   A Gallup Poll found that 7% of teenagers (ages 13 to 17) suffer from arachnophobia and are extremely afraid of spiders. At a summer camp there are 10 teenagers sleeping in each tent. Assume that these 10 teenagers are independent of each other. Gallup Poll, Fear of Spiders      Calculate the probability that at least one of them suffers from arachnophobia.    Calculate the probability that exactly 2 of them suffer from arachnophobia.    Calculate the probability that at most 1 of them suffers from arachnophobia.    If the camp counselor wants to make sure no more than 1 teenager in each tent is afraid of spiders, does it seem reasonable for him to randomly assign teenagers to tents?        Eye color, Part II   Exercise 4.2.12 introduces a husband and wife with brown eyes who have 0.75 probability of having children with brown eyes, 0.125 probability of having children with blue eyes, and 0.125 probability of having children with green eyes.     What is the probability that their first child will have green eyes and the second will not?    What is the probability that exactly one of their two children will have green eyes?    If they have six children, what is the probability that exactly two will have green eyes?    If they have six children, what is the probability that at least one will have green eyes?    What is the probability that the first green eyed child will be the 4th child?    Would it be considered unusual if only 2 out of their 6 children had brown eyes?        Sickle cell anemia   Sickle cell anemia is a genetic blood disorder where red blood cells lose their flexibility and assume an abnormal, rigid, sickle shape, which results in a risk of various complications. If both parents are carriers of the disease, then a child has a 25% chance of having the disease, 50% chance of being a carrier, and 25% chance of neither having the disease nor being a carrier. If two parents who are carriers of the disease have 3 children, what is the probability that    two will have the disease?  none will have the disease?  at least one will neither have the disease nor be a carrier?  the first child with the disease will the be 3rd child?       Exploring permutations   The formula for the number of ways to arrange objects is . This exercise walks you through the derivation of this formula for a couple of special cases.  A small company has five employees: Anna, Ben, Carl, Damian, and Eddy. There are five parking spots in a row at the company, none of which are assigned, and each day the employees pull into a random parking spot. That is, all possible orderings of the cars in the row of spots are equally likely.     On a given day, what is the probability that the employees park in alphabetical order?    If the alphabetical order has an equal chance of occurring relative to all other possible orderings, how many ways must there be to arrange the five cars?    Now consider a sample of 8 employees instead. How many possible ways are there to order these 8 employees' cars?        Male children   While it is often assumed that the probabilities of having a boy or a girl are the same, the actual probability of having a boy is slightly higher at 0.51. Suppose a couple plans to have 3 kids.     Use the binomial model to calculate the probability that two of them will be boys.    Write out all possible orderings of 3 children, 2 of whom are boys. Use these scenarios to calculate the same probability from part (a) but using the addition rule for disjoint outcomes. Confirm that your answers from parts (a) and (b) match.    If we wanted to calculate the probability that a couple who plans to have 8 kids will have 3 boys, briefly describe why the approach from part (b) would be more tedious than the approach from part (a).        "
},
{
  "id": "sec-binomial-distribution-2-1",
  "level": "2",
  "url": "sec-binomial-distribution.html#sec-binomial-distribution-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "binomial distribution "
},
{
  "id": "ex-insure-one-of-four-exceeds",
  "level": "2",
  "url": "sec-binomial-distribution.html#ex-insure-one-of-four-exceeds",
  "type": "Example",
  "number": "4.3.1",
  "title": "Probability of one exceeding deductible.",
  "body": " Probability of one exceeding deductible   Suppose the insurance agency is considering a random sample of four individuals they insure. What is the chance exactly one of them will exceed the deductible and the other three will not? Let's call the four people Ariana ( ), Brittany ( ), Carlton ( ), and Damian ( ) for convenience.    Let's consider a scenario where one person exceeds the deductible: But there are three other scenarios: Brittany, Carlton, or Damian could have been the one to exceed the deductible. In each of these cases, the probability is again . These four scenarios exhaust all the possible ways that exactly one of these four people could have exceeded the deductible, so the total probability is    "
},
{
  "id": "subsec-binomial-distribution-def-4",
  "level": "2",
  "url": "sec-binomial-distribution.html#subsec-binomial-distribution-def-4",
  "type": "Checkpoint",
  "number": "4.3.2",
  "title": "",
  "body": "  Verify that the scenario where Brittany is the only one to exceed the deductible has probability .     .   "
},
{
  "id": "subsec-binomial-distribution-def-5",
  "level": "2",
  "url": "sec-binomial-distribution.html#subsec-binomial-distribution-def-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "binomial distribution "
},
{
  "id": "subsec-binomial-distribution-def-8",
  "level": "2",
  "url": "sec-binomial-distribution.html#subsec-binomial-distribution-def-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "n choose k factorial "
},
{
  "id": "subsec-binomial-distribution-def-10-1",
  "level": "2",
  "url": "sec-binomial-distribution.html#subsec-binomial-distribution-def-10-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Binomial distribution "
},
{
  "id": "subsec-binomial-distribution-def-11-1",
  "level": "2",
  "url": "sec-binomial-distribution.html#subsec-binomial-distribution-def-11-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Is it binomial? Four conditions to check. "
},
{
  "id": "ex-binomial-eight-individuals",
  "level": "2",
  "url": "sec-binomial-distribution.html#ex-binomial-eight-individuals",
  "type": "Example",
  "number": "4.3.3",
  "title": "Probability of 3 of 8 exceeding deductible.",
  "body": " Probability of 3 of 8 exceeding deductible   What is the probability that 3 of 8 randomly selected individuals will have exceeded the insurance deductible, i.e. that 5 of 8 will not exceed the deductible? Recall that 70% of individuals will not exceed the deductible.    We would like to apply the binomial model, so we check the conditions. The number of trials is fixed ( ) (condition 2) and each trial outcome can be classified as a success or failure (condition 3). Because the sample is random, the trials are independent (condition 1) and the probability of a success is the same for each trial (condition 4).  In the outcome of interest, there are successes in trials (recall that a success is an individual who does not exceed the deductible), and the probability of a success is . So the probability that 5 of 8 will not exceed the deductible and 3 will exceed the deductible is given by Dealing with the factorial part: Using , the final probability is about .   "
},
{
  "id": "subsec-binomial-distribution-def-13-1",
  "level": "2",
  "url": "sec-binomial-distribution.html#subsec-binomial-distribution-def-13-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Computing binomial probabilities "
},
{
  "id": "subsec-binomial-distribution-def-14",
  "level": "2",
  "url": "sec-binomial-distribution.html#subsec-binomial-distribution-def-14",
  "type": "Checkpoint",
  "number": "4.3.4",
  "title": "",
  "body": "  If we randomly sampled 40 case files from the insurance agency discussed earlier, how many of the cases would you expect to not have exceeded the deductible in a given year? What is the standard deviation of the number that would not have exceeded the deductible?    We are asked to determine the expected number (the mean) and the standard deviation, both of which can be directly computed from the formulas: and . Because very roughly 95% of observations fall within 2 standard deviations of the mean (see Section 1.6.3), we would probably observe at least 22 but fewer than 34 individuals in our sample who would not exceed the deductible.   "
},
{
  "id": "subsec-binomial-distribution-def-15",
  "level": "2",
  "url": "sec-binomial-distribution.html#subsec-binomial-distribution-def-15",
  "type": "Checkpoint",
  "number": "4.3.5",
  "title": "",
  "body": "  The probability that a random smoker will develop a severe lung condition in his or her lifetime is about 0.3. If you have 4 friends who smoke, are the conditions for the binomial model satisfied?    One possible answer: if the friends know each other, then the independence assumption is probably not satisfied. For example, acquaintances may have similar smoking habits, or those friends might make a pact to quit together.   "
},
{
  "id": "ex-no-more-than-one-friend-lung-condition",
  "level": "2",
  "url": "sec-binomial-distribution.html#ex-no-more-than-one-friend-lung-condition",
  "type": "Checkpoint",
  "number": "4.3.6",
  "title": "",
  "body": "  Suppose these four friends do not know each other and we can treat them as if they were a random sample from the population. Is the binomial model appropriate? What is the probability that  None of them will develop a severe lung condition?  One will develop a severe lung condition?  That no more than one will develop a severe lung condition?      To check if the binomial model is appropriate, we must verify the conditions. (i) Since we are supposing we can treat the friends as a random sample, they are independent. (ii) We have a fixed number of trials ( ). (iii) Each outcome is a success or failure. (iv) The probability of a success is the same for each trial since the individuals are like a random sample ( if we say a success is someone getting a lung condition, a morbid choice).  Compute parts (a) and (b) using the binomial formula: , . Note: . Part (c) can be computed as the sum of parts (a) and (b): . That is, there is about a 65% chance that no more than one of your four smoking friends will develop a severe lung condition.   "
},
{
  "id": "subsec-binomial-distribution-def-17",
  "level": "2",
  "url": "sec-binomial-distribution.html#subsec-binomial-distribution-def-17",
  "type": "Checkpoint",
  "number": "4.3.7",
  "title": "",
  "body": "  What is the probability that at least 2 of your 4 smoking friends will develop a severe lung condition in their lifetimes?    The complement (no more than one will develop a severe lung condition) as computed in as 0.6517, so we compute one minus this value: 0.3483.   "
},
{
  "id": "subsec-binomial-distribution-def-18",
  "level": "2",
  "url": "sec-binomial-distribution.html#subsec-binomial-distribution-def-18",
  "type": "Checkpoint",
  "number": "4.3.8",
  "title": "",
  "body": "  Suppose you have 7 friends who are smokers and they can be treated as a random sample of smokers.   How many would you expect to develop a severe lung condition, i.e. what is the mean?    What is the probability that at most 2 of your 7 friends will develop a severe lung condition?       (a) . (b) .   "
},
{
  "id": "subsec-binomial-distribution-def-20",
  "level": "2",
  "url": "sec-binomial-distribution.html#subsec-binomial-distribution-def-20",
  "type": "Checkpoint",
  "number": "4.3.9",
  "title": "",
  "body": "  Why is it true that and for any number ?    Frame these expressions into words. How many different ways are there to arrange 0 successes and failures in trials? (1 way.) How many different ways are there to arrange successes and 0 failures in trials? (1 way.)   "
},
{
  "id": "subsec-binomial-distribution-def-21",
  "level": "2",
  "url": "sec-binomial-distribution.html#subsec-binomial-distribution-def-21",
  "type": "Checkpoint",
  "number": "4.3.10",
  "title": "",
  "body": "  How many ways can you arrange one success and failures in trials? How many ways can you arrange successes and one failure in trials?    One success and failures: there are exactly unique places we can put the success, so there are ways to arrange one success and failures. A similar argument is used for the second question. Mathematically, we show these results by verifying the following two equations:    "
},
{
  "id": "ex-exact-binom-smoker",
  "level": "2",
  "url": "sec-binomial-distribution.html#ex-exact-binom-smoker",
  "type": "Example",
  "number": "4.3.11",
  "title": "Smoker survey probability.",
  "body": " Smoker survey probability   Approximately 15% of the US population smokes cigarettes. A local government believed their community had a lower smoker rate and commissioned a survey of 400 randomly selected individuals. The survey found that only 42 of the 400 participants smoke cigarettes. If the true proportion of smokers in the community was really 15%, what is the probability of observing 42 or fewer smokers in a sample of 400 people?    We leave the usual verification that the four conditions for the binomial model are valid as an exercise.  The question posed is equivalent to asking, what is the probability of observing , 1, 2, , or 42 smokers in a sample of when ? We can compute these 43 different probabilities and add them together to find the answer: If the true proportion of smokers in the community is , then the probability of observing 42 or fewer smokers in a sample of is 0.0054.   "
},
{
  "id": "subsec-normal-approx-binomial-5",
  "level": "2",
  "url": "sec-binomial-distribution.html#subsec-normal-approx-binomial-5",
  "type": "Checkpoint",
  "number": "4.3.12",
  "title": "",
  "body": "  Here we consider the binomial model when the probability of a success is . shows four hollow histograms for simulated samples from the binomial distribution using four different sample sizes: . What happens to the shape of the distributions as the sample size increases? What distribution does the last hollow histogram resemble?    The distribution is transformed from a blocky and skewed distribution into one that rather resembles the normal distribution in last hollow histogram.   "
},
{
  "id": "fig-four-binomial-approx",
  "level": "2",
  "url": "sec-binomial-distribution.html#fig-four-binomial-approx",
  "type": "Figure",
  "number": "4.3.13",
  "title": "",
  "body": " Hollow histograms of samples from the binomial model when . The sample sizes for the four plots are , 30, 100, and 300, respectively.   "
},
{
  "id": "subsec-normal-approx-binomial-7-1",
  "level": "2",
  "url": "sec-binomial-distribution.html#subsec-normal-approx-binomial-7-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Normal approximation of the binomial distribution "
},
{
  "id": "ex-approx-normal-for-smoker-binom",
  "level": "2",
  "url": "sec-binomial-distribution.html#ex-approx-normal-for-smoker-binom",
  "type": "Example",
  "number": "4.3.14",
  "title": "Normal approximation for smoker survey.",
  "body": " Normal approximation for smoker survey   How can we use the normal approximation to estimate the probability of observing 42 or fewer smokers in a sample of 400, if the true proportion of smokers is ?    Showing that the binomial model is reasonable was a suggested exercise in . We also verify that both and are at least 10: With these conditions checked, we may use the normal approximation in place of the binomial distribution using the mean and standard deviation from the binomial model: We want to find the probability of observing 42 or fewer smokers using this model.   "
},
{
  "id": "subsec-normal-approx-binomial-10",
  "level": "2",
  "url": "sec-binomial-distribution.html#subsec-normal-approx-binomial-10",
  "type": "Checkpoint",
  "number": "4.3.15",
  "title": "",
  "body": "  Use the normal model to estimate the probability of observing 42 or fewer smokers. Your answer should be approximately equal to the solution of : 0.0054.    Compute the Z-score first: . The corresponding left tail area is 0.0059.   "
},
{
  "id": "fig-norm-approx-binomial-fail",
  "level": "2",
  "url": "sec-binomial-distribution.html#fig-norm-approx-binomial-fail",
  "type": "Figure",
  "number": "4.3.16",
  "title": "",
  "body": " A normal curve with the area between 49 and 51 shaded. The outlined area represents the exact binomial probability.   "
},
{
  "id": "subsec-normal-approx-breaks-down-5-1",
  "level": "2",
  "url": "sec-binomial-distribution.html#subsec-normal-approx-breaks-down-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Improving the normal approximation for the binomial distribution "
},
{
  "id": "ex-underage-drinking-intro",
  "level": "2",
  "url": "sec-binomial-distribution.html#ex-underage-drinking-intro",
  "type": "Exercise",
  "number": "4.3.4.1",
  "title": "Underage drinking, Part I.",
  "body": " Underage drinking, Part I   Data collected by the Substance Abuse and Mental Health Services Administration (SAMSHA) suggests that 69.7% of 18-20 year olds consumed alcoholic beverages in any given year. Substance Abuse and Mental Health Services Administration, Results from the 2013 National Survey on Drug Use and Health: Summary of National Findings      Suppose a random sample of ten 18-20 year olds is taken. Is the use of the binomial distribution appropriate for calculating the probability that exactly six consumed alcoholic beverages? Explain.    Calculate the probability that exactly 6 out of 10 randomly sampled 18-20 year olds consumed an alcoholic drink.    What is the probability that exactly four out of ten 18-20 year olds have not consumed an alcoholic beverage?    What is the probability that at most 2 out of 5 randomly sampled 18-20 year olds have consumed alcoholic beverages?    What is the probability that at least 1 out of 5 randomly sampled 18-20 year olds have consumed alcoholic beverages?      "
},
{
  "id": "ex-chickenpox-intro",
  "level": "2",
  "url": "sec-binomial-distribution.html#ex-chickenpox-intro",
  "type": "Exercise",
  "number": "4.3.4.2",
  "title": "Chickenpox, Part I.",
  "body": " Chickenpox, Part I   Boston Children's Hospital estimates that 90% of Americans have had chickenpox by the time they reach adulthood. Boston Children's Hospital, Chickenpox      Suppose we take a random sample of 100 American adults. Is the use of the binomial distribution appropriate for calculating the probability that exactly 97 out of 100 randomly sampled American adults had chickenpox during childhood? Explain.    Calculate the probability that exactly 97 out of 100 randomly sampled American adults had chickenpox during childhood.    What is the probability that exactly 3 out of a new sample of 100 American adults have not had chickenpox in their childhood?    What is the probability that at least 1 out of 10 randomly sampled American adults have had chickenpox?    What is the probability that at most 3 out of 10 randomly sampled American adults have not had chickenpox?      "
},
{
  "id": "ex-underage-drinking-normal-approx",
  "level": "2",
  "url": "sec-binomial-distribution.html#ex-underage-drinking-normal-approx",
  "type": "Exercise",
  "number": "4.3.4.3",
  "title": "Underage drinking, Part II.",
  "body": " Underage drinking, Part II   We learned in that about 70% of 18-20 year olds consumed alcoholic beverages in any given year. We now consider a random sample of fifty 18-20 year olds.     How many people would you expect to have consumed alcoholic beverages? And with what standard deviation?    Would you be surprised if there were 45 or more people who have consumed alcoholic beverages?    What is the probability that 45 or more people in this sample have consumed alcoholic beverages? How does this probability relate to your answer to part (b)?      "
},
{
  "id": "ex-chickenpox-normal-approx",
  "level": "2",
  "url": "sec-binomial-distribution.html#ex-chickenpox-normal-approx",
  "type": "Exercise",
  "number": "4.3.4.4",
  "title": "Chickenpox, Part II.",
  "body": " Chickenpox, Part II   We learned in that about 90% of American adults had chickenpox before adulthood. We now consider a random sample of 120 American adults.     How many people in this sample would you expect to have had chickenpox in their childhood? And with what standard deviation?    Would you be surprised if there were 105 people who have had chickenpox in their childhood?    What is the probability that 105 or fewer people in this sample have had chickenpox in their childhood? How does this probability relate to your answer to part (b)?      "
},
{
  "id": "ex-game-of-dreidel",
  "level": "2",
  "url": "sec-binomial-distribution.html#ex-game-of-dreidel",
  "type": "Exercise",
  "number": "4.3.4.5",
  "title": "Game of dreidel.",
  "body": " Game of dreidel   A dreidel is a four-sided spinning top with the Hebrew letters nun , gimel , hei , and shin , one on each side. Each side is equally likely to come up in a single spin of the dreidel. Suppose you spin a dreidel three times. Calculate the probability of getting    at least one nun ?  exactly 2 nun s?  exactly 1 hei ?  at most 2 gimel s?     "
},
{
  "id": "ex-arachnophobia",
  "level": "2",
  "url": "sec-binomial-distribution.html#ex-arachnophobia",
  "type": "Exercise",
  "number": "4.3.4.6",
  "title": "Arachnophobia.",
  "body": " Arachnophobia   A Gallup Poll found that 7% of teenagers (ages 13 to 17) suffer from arachnophobia and are extremely afraid of spiders. At a summer camp there are 10 teenagers sleeping in each tent. Assume that these 10 teenagers are independent of each other. Gallup Poll, Fear of Spiders      Calculate the probability that at least one of them suffers from arachnophobia.    Calculate the probability that exactly 2 of them suffer from arachnophobia.    Calculate the probability that at most 1 of them suffers from arachnophobia.    If the camp counselor wants to make sure no more than 1 teenager in each tent is afraid of spiders, does it seem reasonable for him to randomly assign teenagers to tents?      "
},
{
  "id": "ex-eye-color-binomial",
  "level": "2",
  "url": "sec-binomial-distribution.html#ex-eye-color-binomial",
  "type": "Exercise",
  "number": "4.3.4.7",
  "title": "Eye color, Part II.",
  "body": " Eye color, Part II   Exercise 4.2.12 introduces a husband and wife with brown eyes who have 0.75 probability of having children with brown eyes, 0.125 probability of having children with blue eyes, and 0.125 probability of having children with green eyes.     What is the probability that their first child will have green eyes and the second will not?    What is the probability that exactly one of their two children will have green eyes?    If they have six children, what is the probability that exactly two will have green eyes?    If they have six children, what is the probability that at least one will have green eyes?    What is the probability that the first green eyed child will be the 4th child?    Would it be considered unusual if only 2 out of their 6 children had brown eyes?      "
},
{
  "id": "ex-sickle-cell-anemia",
  "level": "2",
  "url": "sec-binomial-distribution.html#ex-sickle-cell-anemia",
  "type": "Exercise",
  "number": "4.3.4.8",
  "title": "Sickle cell anemia.",
  "body": " Sickle cell anemia   Sickle cell anemia is a genetic blood disorder where red blood cells lose their flexibility and assume an abnormal, rigid, sickle shape, which results in a risk of various complications. If both parents are carriers of the disease, then a child has a 25% chance of having the disease, 50% chance of being a carrier, and 25% chance of neither having the disease nor being a carrier. If two parents who are carriers of the disease have 3 children, what is the probability that    two will have the disease?  none will have the disease?  at least one will neither have the disease nor be a carrier?  the first child with the disease will the be 3rd child?     "
},
{
  "id": "ex-explore-combinations",
  "level": "2",
  "url": "sec-binomial-distribution.html#ex-explore-combinations",
  "type": "Exercise",
  "number": "4.3.4.9",
  "title": "Exploring permutations.",
  "body": " Exploring permutations   The formula for the number of ways to arrange objects is . This exercise walks you through the derivation of this formula for a couple of special cases.  A small company has five employees: Anna, Ben, Carl, Damian, and Eddy. There are five parking spots in a row at the company, none of which are assigned, and each day the employees pull into a random parking spot. That is, all possible orderings of the cars in the row of spots are equally likely.     On a given day, what is the probability that the employees park in alphabetical order?    If the alphabetical order has an equal chance of occurring relative to all other possible orderings, how many ways must there be to arrange the five cars?    Now consider a sample of 8 employees instead. How many possible ways are there to order these 8 employees' cars?      "
},
{
  "id": "ex-male-children",
  "level": "2",
  "url": "sec-binomial-distribution.html#ex-male-children",
  "type": "Exercise",
  "number": "4.3.4.10",
  "title": "Male children.",
  "body": " Male children   While it is often assumed that the probabilities of having a boy or a girl are the same, the actual probability of having a boy is slightly higher at 0.51. Suppose a couple plans to have 3 kids.     Use the binomial model to calculate the probability that two of them will be boys.    Write out all possible orderings of 3 children, 2 of whom are boys. Use these scenarios to calculate the same probability from part (a) but using the addition rule for disjoint outcomes. Confirm that your answers from parts (a) and (b) match.    If we wanted to calculate the probability that a couple who plans to have 8 kids will have 3 boys, briefly describe why the approach from part (b) would be more tedious than the approach from part (a).      "
},
{
  "id": "sec-negative-binomial",
  "level": "1",
  "url": "sec-negative-binomial.html",
  "type": "Section",
  "number": "4.4",
  "title": "Negative binomial distribution",
  "body": " Negative binomial distribution   The geometric distribution describes the probability of observing the first success on the trial. The negative binomial distribution is more general: it describes the probability of observing the success on the trial.    Field goal attempts   Each day a high school football coach tells his star kicker, Brian, that he can go home after he successfully kicks four 35 yard field goals. Suppose we say each kick has a probability of being successful. If is small e.g. close to 0.1 would we expect Brian to need many attempts before he successfully kicks his fourth field goal?    We are waiting for the fourth success ( ). If the probability of a success ( ) is small, then the number of attempts ( ) will probably be large. This means that Brian is more likely to need many attempts before he gets successes. To put this another way, the probability of being small is low.    To identify a negative binomial case, we check 4 conditions. The first three are common to the binomial distribution.    Is it negative binomial? Four conditions to check     The trials are independent.  Each trial outcome can be classified as a success or failure.  The probability of a success ( ) is the same for each trial.  The last trial must be a success.       Suppose Brian is very diligent in his attempts and he makes each 35 yard field goal with probability . Take a guess at how many attempts he would need before making his fourth kick.    One possible answer: since he is likely to make each field goal attempt, it will take him at least 4 attempts but probably not more than 6 or 7.     Sequences of successes and failures   In yesterday's practice, it took Brian only 6 tries to get his fourth field goal. Write out each of the possible sequences of kicks.    Because it took Brian six tries to get the fourth success, we know the last kick must have been a success. That leaves three successful kicks and two unsuccessful kicks (we label these as failures) that make up the first five attempts. There are ten possible sequences of these first five kicks, which are shown in . If Brian achieved his fourth success ( ) on his sixth attempt ( ), then his order of successes and failures must be one of these ten possible sequences.     The ten possible sequences when the fourth successful kick is on the sixth attempt. S denotes a success and F denotes a failure.     Kick Attempt     1  2  3  4  5  6    1          2          3          4          5          6          7          8          9          10             Each sequence in has exactly two failures and four successes with the last attempt always being a success. If the probability of a success is , find the probability of the first sequence.    The first sequence: .    If the probability Brian kicks a 35 yard field goal is , what is the probability it takes Brian exactly six tries to get his fourth successful kick? We can write this as where the sequences are from . We can break down this last probability into the sum of ten disjoint possibilities: The probability of the first sequence was identified in as 0.0164, and each of the other sequences have the same probability. Since each of the ten sequences has the same probability, the total probability is ten times that of any individual sequence.  The way to compute this negative binomial probability is similar to how the binomial problems were solved in . The probability is broken into two pieces: Each part is examined separately, then we multiply to get the final result.  We first identify the probability of a single sequence. One particular case is to first observe all the failures ( of them) followed by the successes:   We must also identify the number of sequences for the general case. Above, ten sequences were identified where the fourth success came on the sixth attempt. These sequences were identified by fixing the last observation as a success and looking for all the ways to arrange the other observations. In other words, how many ways could we arrange successes in trials? This can be found using the choose coefficient but for and instead: This is the number of different ways we can order successes and failures in trials.    Negative binomial distribution   The negative binomial distribution describes the probability of observing the success on the trial, where all trials are independent: The value represents the probability that an individual trial is a success.    Using the negative binomial formula   Show using the formula for the negative binomial distribution that the probability Brian kicks his fourth successful field goal on the sixth attempt is 0.164.    The probability of a single success is , the number of successes is , and the number of necessary attempts under this scenario is .       The negative binomial distribution requires that each kick attempt by Brian is independent. Do you think it is reasonable to suggest that each of Brian's kick attempts are independent?    Answers may vary. We cannot conclusively say they are or are not independent. However, many statistical reviews of athletic performance suggest such attempts are very nearly independent.      Assume Brian's kick attempts are independent. What is the probability that Brian will kick his fourth field goal within 5 attempts?    If his fourth field goal ( ) is within five attempts, it either took him four or five tries ( or ). We have from earlier. Use the negative binomial distribution to compute the probability of tries and tries, then add those probabilities together:       Binomial versus negative binomial   In the binomial case, we typically have a fixed number of trials and instead consider the number of successes. In the negative binomial case, we examine how many trials it takes to observe a fixed number of successes and require that the last observation be a success.     On 70% of days, a hospital admits at least one heart attack patient. On 30% of the days, no heart attack patients are admitted. Identify each case below as a binomial or negative binomial case, and compute the probability.     What is the probability the hospital will admit a heart attack patient on exactly three days this week?    What is the probability the second day with a heart attack patient will be the fourth day of the week?    What is the probability the fifth day of next month will be the first day with a heart attack patient?       In each part, .     The number of days is fixed, so this is binomial. The parameters are and : 0.097.    The last success (admitting a heart attack patient) is fixed to the last day, so we should apply the negative binomial distribution. The parameters are , : 0.132.    This problem is negative binomial with and : 0.006. Note that the negative binomial case when is the same as using the geometric distribution.        Section 4.4 Exercises   Rolling a die   Calculate the following probabilities and indicate which probability distribution model is appropriate in each case. You roll a fair die 5 times. What is the probability of rolling    the first 6 on the fifth roll?  exactly three 6s?  the third 6 on the fifth roll?       Playing darts   Calculate the following probabilities and indicate which probability distribution model is appropriate in each case. A very good darts player can hit the bull's eye (red circle in the center of the dart board) 65% of the time. What is the probability that he    hits the bullseye for the time on the try?  hits the bullseye 10 times in 15 tries?  hits the first bullseye on the third try?       Sampling at school   For a sociology class project you are asked to conduct a survey on 20 students at your school. You decide to stand outside of your dorm's cafeteria and conduct the survey on a random sample of 20 students leaving the cafeteria after dinner one evening. Your dorm is comprised of 45% males and 55% females.     Which probability model is most appropriate for calculating the probability that the person you survey is the female? Explain.    Compute the probability from part (a).    The three possible scenarios that lead to person you survey being the female are One common feature among these scenarios is that the last trial is always female. In the first three trials there are 2 males and 1 female. Use the binomial coefficient to confirm that there are 3 ways of ordering 2 males and 1 female.    Use the findings presented in part (c) to explain why the formula for the coefficient for the negative binomial is while the formula for the binomial coefficient is .        Serving in volleyball   A not-so-skilled volleyball player has a 15% chance of making the serve, which involves hitting the ball so it passes over the net on a trajectory such that it will land in the opposing team's court. Suppose that her serves are independent of each other.     What is the probability that on the try she will make her successful serve?    Suppose she has made two successful serves in nine attempts. What is the probability that her serve will be successful?    Even though parts (a) and (b) discuss the same scenario, the probabilities you calculated should be different. Can you explain the reason for this discrepancy?        "
},
{
  "id": "sec-negative-binomial-2-1",
  "level": "2",
  "url": "sec-negative-binomial.html#sec-negative-binomial-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "negative binomial distribution "
},
{
  "id": "ex-brian-field-goals-intro",
  "level": "2",
  "url": "sec-negative-binomial.html#ex-brian-field-goals-intro",
  "type": "Example",
  "number": "4.4.1",
  "title": "Field goal attempts.",
  "body": " Field goal attempts   Each day a high school football coach tells his star kicker, Brian, that he can go home after he successfully kicks four 35 yard field goals. Suppose we say each kick has a probability of being successful. If is small e.g. close to 0.1 would we expect Brian to need many attempts before he successfully kicks his fourth field goal?    We are waiting for the fourth success ( ). If the probability of a success ( ) is small, then the number of attempts ( ) will probably be large. This means that Brian is more likely to need many attempts before he gets successes. To put this another way, the probability of being small is low.   "
},
{
  "id": "sec-negative-binomial-5-1",
  "level": "2",
  "url": "sec-negative-binomial.html#sec-negative-binomial-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Is it negative binomial? Four conditions to check "
},
{
  "id": "sec-negative-binomial-6",
  "level": "2",
  "url": "sec-negative-binomial.html#sec-negative-binomial-6",
  "type": "Checkpoint",
  "number": "4.4.2",
  "title": "",
  "body": "  Suppose Brian is very diligent in his attempts and he makes each 35 yard field goal with probability . Take a guess at how many attempts he would need before making his fourth kick.    One possible answer: since he is likely to make each field goal attempt, it will take him at least 4 attempts but probably not more than 6 or 7.   "
},
{
  "id": "ex-six-tries-for-four-successes",
  "level": "2",
  "url": "sec-negative-binomial.html#ex-six-tries-for-four-successes",
  "type": "Example",
  "number": "4.4.3",
  "title": "Sequences of successes and failures.",
  "body": " Sequences of successes and failures   In yesterday's practice, it took Brian only 6 tries to get his fourth field goal. Write out each of the possible sequences of kicks.    Because it took Brian six tries to get the fourth success, we know the last kick must have been a success. That leaves three successful kicks and two unsuccessful kicks (we label these as failures) that make up the first five attempts. There are ten possible sequences of these first five kicks, which are shown in . If Brian achieved his fourth success ( ) on his sixth attempt ( ), then his order of successes and failures must be one of these ten possible sequences.   "
},
{
  "id": "fig-brian-six-attempts",
  "level": "2",
  "url": "sec-negative-binomial.html#fig-brian-six-attempts",
  "type": "Figure",
  "number": "4.4.4",
  "title": "",
  "body": " The ten possible sequences when the fourth successful kick is on the sixth attempt. S denotes a success and F denotes a failure.     Kick Attempt     1  2  3  4  5  6    1          2          3          4          5          6          7          8          9          10          "
},
{
  "id": "ex-prob-of-first-sequence",
  "level": "2",
  "url": "sec-negative-binomial.html#ex-prob-of-first-sequence",
  "type": "Checkpoint",
  "number": "4.4.5",
  "title": "",
  "body": "  Each sequence in has exactly two failures and four successes with the last attempt always being a success. If the probability of a success is , find the probability of the first sequence.    The first sequence: .   "
},
{
  "id": "sec-negative-binomial-14-1",
  "level": "2",
  "url": "sec-negative-binomial.html#sec-negative-binomial-14-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Negative binomial distribution "
},
{
  "id": "ex-brian-fourth-on-sixth",
  "level": "2",
  "url": "sec-negative-binomial.html#ex-brian-fourth-on-sixth",
  "type": "Example",
  "number": "4.4.6",
  "title": "Using the negative binomial formula.",
  "body": " Using the negative binomial formula   Show using the formula for the negative binomial distribution that the probability Brian kicks his fourth successful field goal on the sixth attempt is 0.164.    The probability of a single success is , the number of successes is , and the number of necessary attempts under this scenario is .    "
},
{
  "id": "sec-negative-binomial-16",
  "level": "2",
  "url": "sec-negative-binomial.html#sec-negative-binomial-16",
  "type": "Checkpoint",
  "number": "4.4.7",
  "title": "",
  "body": "  The negative binomial distribution requires that each kick attempt by Brian is independent. Do you think it is reasonable to suggest that each of Brian's kick attempts are independent?    Answers may vary. We cannot conclusively say they are or are not independent. However, many statistical reviews of athletic performance suggest such attempts are very nearly independent.   "
},
{
  "id": "ex-brian-within-five",
  "level": "2",
  "url": "sec-negative-binomial.html#ex-brian-within-five",
  "type": "Checkpoint",
  "number": "4.4.8",
  "title": "",
  "body": "  Assume Brian's kick attempts are independent. What is the probability that Brian will kick his fourth field goal within 5 attempts?    If his fourth field goal ( ) is within five attempts, it either took him four or five tries ( or ). We have from earlier. Use the negative binomial distribution to compute the probability of tries and tries, then add those probabilities together:    "
},
{
  "id": "sec-negative-binomial-18-1",
  "level": "2",
  "url": "sec-negative-binomial.html#sec-negative-binomial-18-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Binomial versus negative binomial "
},
{
  "id": "ex-hospital-heart-attacks",
  "level": "2",
  "url": "sec-negative-binomial.html#ex-hospital-heart-attacks",
  "type": "Checkpoint",
  "number": "4.4.9",
  "title": "",
  "body": "  On 70% of days, a hospital admits at least one heart attack patient. On 30% of the days, no heart attack patients are admitted. Identify each case below as a binomial or negative binomial case, and compute the probability.     What is the probability the hospital will admit a heart attack patient on exactly three days this week?    What is the probability the second day with a heart attack patient will be the fourth day of the week?    What is the probability the fifth day of next month will be the first day with a heart attack patient?       In each part, .     The number of days is fixed, so this is binomial. The parameters are and : 0.097.    The last success (admitting a heart attack patient) is fixed to the last day, so we should apply the negative binomial distribution. The parameters are , : 0.132.    This problem is negative binomial with and : 0.006. Note that the negative binomial case when is the same as using the geometric distribution.      "
},
{
  "id": "ex-rolling-die-neg-binom",
  "level": "2",
  "url": "sec-negative-binomial.html#ex-rolling-die-neg-binom",
  "type": "Exercise",
  "number": "4.4.1",
  "title": "Rolling a die.",
  "body": " Rolling a die   Calculate the following probabilities and indicate which probability distribution model is appropriate in each case. You roll a fair die 5 times. What is the probability of rolling    the first 6 on the fifth roll?  exactly three 6s?  the third 6 on the fifth roll?     "
},
{
  "id": "ex-playing-darts",
  "level": "2",
  "url": "sec-negative-binomial.html#ex-playing-darts",
  "type": "Exercise",
  "number": "4.4.2",
  "title": "Playing darts.",
  "body": " Playing darts   Calculate the following probabilities and indicate which probability distribution model is appropriate in each case. A very good darts player can hit the bull's eye (red circle in the center of the dart board) 65% of the time. What is the probability that he    hits the bullseye for the time on the try?  hits the bullseye 10 times in 15 tries?  hits the first bullseye on the third try?     "
},
{
  "id": "ex-sampling-at-school",
  "level": "2",
  "url": "sec-negative-binomial.html#ex-sampling-at-school",
  "type": "Exercise",
  "number": "4.4.3",
  "title": "Sampling at school.",
  "body": " Sampling at school   For a sociology class project you are asked to conduct a survey on 20 students at your school. You decide to stand outside of your dorm's cafeteria and conduct the survey on a random sample of 20 students leaving the cafeteria after dinner one evening. Your dorm is comprised of 45% males and 55% females.     Which probability model is most appropriate for calculating the probability that the person you survey is the female? Explain.    Compute the probability from part (a).    The three possible scenarios that lead to person you survey being the female are One common feature among these scenarios is that the last trial is always female. In the first three trials there are 2 males and 1 female. Use the binomial coefficient to confirm that there are 3 ways of ordering 2 males and 1 female.    Use the findings presented in part (c) to explain why the formula for the coefficient for the negative binomial is while the formula for the binomial coefficient is .      "
},
{
  "id": "ex-serving-volleyball",
  "level": "2",
  "url": "sec-negative-binomial.html#ex-serving-volleyball",
  "type": "Exercise",
  "number": "4.4.4",
  "title": "Serving in volleyball.",
  "body": " Serving in volleyball   A not-so-skilled volleyball player has a 15% chance of making the serve, which involves hitting the ball so it passes over the net on a trajectory such that it will land in the opposing team's court. Suppose that her serves are independent of each other.     What is the probability that on the try she will make her successful serve?    Suppose she has made two successful serves in nine attempts. What is the probability that her serve will be successful?    Even though parts (a) and (b) discuss the same scenario, the probabilities you calculated should be different. Can you explain the reason for this discrepancy?      "
},
{
  "id": "sec-poisson-distribution",
  "level": "1",
  "url": "sec-poisson-distribution.html",
  "type": "Section",
  "number": "4.5",
  "title": "Poisson distribution",
  "body": " Poisson distribution   AMI incidents in New York City   There are about 8 million individuals in New York City. How many individuals might we expect to be hospitalized for acute myocardial infarction (AMI), i.e. a heart attack, each day? According to historical records, the average number is about 4.4 individuals. However, we would also like to know the approximate distribution of counts. What would a histogram of the number of AMI occurrences each day look like if we recorded the daily counts over an entire year?    A histogram of the number of occurrences of AMI on 365 days for NYC is shown in . These data are simulated. In practice, we should check for an association between successive days. The sample mean (4.38) is similar to the historical average of 4.4. The sample standard deviation is about 2, and the histogram indicates that about 70% of the data fall between 2.4 and 6.4. The distribution's shape is unimodal and skewed to the right.     A histogram of the number of occurrences of AMI on 365 separate days in NYC.    The Poisson distribution is often useful for estimating the number of events in a large population over a unit of time. For instance, consider each of the following events:  having a heart attack,  getting married, and  getting struck by lightning.  The Poisson distribution helps us describe the number of such events that will occur in a day for a fixed population if the individuals within the population are independent. The Poisson distribution could also be used over another unit of time, such as an hour or a week.  The histogram in approximates a Poisson distribution with rate equal to 4.4. The rate for a Poisson distribution is the average number of occurrences in a mostly-fixed population per unit of time. In , the time unit is a day, the population is all New York City residents, and the historical rate is 4.4. The parameter in the Poisson distribution is the rate or how many events we expect to observe and it is typically denoted by (the Greek letter lambda ) or . Using the rate, we can describe the probability of observing exactly events in a single unit of time.    Poisson distribution   Suppose we are watching for events and the number of observed events follows a Poisson distribution with rate . Then where may take a value 0, 1, 2, and so on, and represents -factorial, as described on page . The letter is the base of the natural logarithm. The mean and standard deviation of this distribution are and , respectively.   We will leave a rigorous set of conditions for the Poisson distribution to a later course. However, we offer a few simple guidelines that can be used for an initial evaluation of whether the Poisson model would be appropriate.  A random variable may follow a Poisson distribution if we are looking for the number of events, the population that generates such events is large, and the events occur independently of each other.  Even when events are not really independent for instance, Saturdays and Sundays are especially popular for weddings a Poisson model may sometimes still be reasonable if we allow it to have a different rate for different times. In the wedding example, the rate would be modeled as higher on weekends than on weekdays. The idea of modeling rates for a Poisson distribution against a second variable such as the day of week forms the foundation of some more advanced methods that fall in the realm of generalized linear models . In Chapters and , we will discuss a foundation of linear models.   Section 4.5 Exercises   Customers at a coffee shop   A coffee shop serves an average of 75 customers per hour during the morning rush.     Which distribution have we studied that is most appropriate for calculating the probability of a given number of customers arriving within one hour during this time of day?    What are the mean and the standard deviation of the number of customers this coffee shop serves in one hour during this time of day?    Would it be considered unusually low if only 60 customers showed up to this coffee shop in one hour during this time of day?    Calculate the probability that this coffee shop serves 70 customers in one hour during this time of day.        Stenographer's typos   A very skilled court stenographer makes one typographical error (typo) per hour on average.     What probability distribution is most appropriate for calculating the probability of a given number of typos this stenographer makes in an hour?    What are the mean and the standard deviation of the number of typos this stenographer makes?    Would it be considered unusual if this stenographer made 4 typos in a given hour?    Calculate the probability that this stenographer makes at most 2 typos in a given hour.        How many cars show up   For Monday through Thursday when there isn't a holiday, the average number of vehicles that visit a particular retailer between 2pm and 3pm each afternoon is 6.5, and the number of cars that show up on any given day follows a Poisson distribution.     What is the probability that exactly 5 cars will show up next Monday?    What is the probability that 0, 1, or 2 cars will show up next Monday between 2pm and 3pm?    There is an average of 11.7 people who visit during those same hours from vehicles. Is it likely that the number of people visiting by car during this hour is also Poisson? Explain.        Lost baggage   Occasionally an airline will lose a bag. Suppose a small airline has found it can reasonably model the number of bags lost each weekday using a Poisson model with a mean of 2.2 bags.     What is the probability that the airline will lose no bags next Monday?    What is the probability that the airline will lose 0, 1, or 2 bags on next Monday?    Suppose the airline expands over the course of the next 3 years, doubling the number of flights it makes, and the CEO asks you if it's reasonable for them to continue using the Poisson model with a mean of 2.2. What is an appropriate recommendation? Explain.        "
},
{
  "id": "ex-ami-nyc",
  "level": "2",
  "url": "sec-poisson-distribution.html#ex-ami-nyc",
  "type": "Example",
  "number": "4.5.1",
  "title": "AMI incidents in New York City.",
  "body": " AMI incidents in New York City   There are about 8 million individuals in New York City. How many individuals might we expect to be hospitalized for acute myocardial infarction (AMI), i.e. a heart attack, each day? According to historical records, the average number is about 4.4 individuals. However, we would also like to know the approximate distribution of counts. What would a histogram of the number of AMI occurrences each day look like if we recorded the daily counts over an entire year?    A histogram of the number of occurrences of AMI on 365 days for NYC is shown in . These data are simulated. In practice, we should check for an association between successive days. The sample mean (4.38) is similar to the historical average of 4.4. The sample standard deviation is about 2, and the histogram indicates that about 70% of the data fall between 2.4 and 6.4. The distribution's shape is unimodal and skewed to the right.   "
},
{
  "id": "fig-ami-incidences-over-100-days",
  "level": "2",
  "url": "sec-poisson-distribution.html#fig-ami-incidences-over-100-days",
  "type": "Figure",
  "number": "4.5.2",
  "title": "",
  "body": " A histogram of the number of occurrences of AMI on 365 separate days in NYC.   "
},
{
  "id": "sec-poisson-distribution-4",
  "level": "2",
  "url": "sec-poisson-distribution.html#sec-poisson-distribution-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Poisson distribution "
},
{
  "id": "sec-poisson-distribution-5",
  "level": "2",
  "url": "sec-poisson-distribution.html#sec-poisson-distribution-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rate "
},
{
  "id": "sec-poisson-distribution-6-1",
  "level": "2",
  "url": "sec-poisson-distribution.html#sec-poisson-distribution-6-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Poisson distribution "
},
{
  "id": "sec-poisson-distribution-9",
  "level": "2",
  "url": "sec-poisson-distribution.html#sec-poisson-distribution-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "generalized linear models "
},
{
  "id": "ex-coffee-shop-customers",
  "level": "2",
  "url": "sec-poisson-distribution.html#ex-coffee-shop-customers",
  "type": "Exercise",
  "number": "4.5.1",
  "title": "Customers at a coffee shop.",
  "body": " Customers at a coffee shop   A coffee shop serves an average of 75 customers per hour during the morning rush.     Which distribution have we studied that is most appropriate for calculating the probability of a given number of customers arriving within one hour during this time of day?    What are the mean and the standard deviation of the number of customers this coffee shop serves in one hour during this time of day?    Would it be considered unusually low if only 60 customers showed up to this coffee shop in one hour during this time of day?    Calculate the probability that this coffee shop serves 70 customers in one hour during this time of day.      "
},
{
  "id": "ex-stenographer-typos",
  "level": "2",
  "url": "sec-poisson-distribution.html#ex-stenographer-typos",
  "type": "Exercise",
  "number": "4.5.2",
  "title": "Stenographer’s typos.",
  "body": " Stenographer's typos   A very skilled court stenographer makes one typographical error (typo) per hour on average.     What probability distribution is most appropriate for calculating the probability of a given number of typos this stenographer makes in an hour?    What are the mean and the standard deviation of the number of typos this stenographer makes?    Would it be considered unusual if this stenographer made 4 typos in a given hour?    Calculate the probability that this stenographer makes at most 2 typos in a given hour.      "
},
{
  "id": "ex-cars-in-parking-lot",
  "level": "2",
  "url": "sec-poisson-distribution.html#ex-cars-in-parking-lot",
  "type": "Exercise",
  "number": "4.5.3",
  "title": "How many cars show up.",
  "body": " How many cars show up   For Monday through Thursday when there isn't a holiday, the average number of vehicles that visit a particular retailer between 2pm and 3pm each afternoon is 6.5, and the number of cars that show up on any given day follows a Poisson distribution.     What is the probability that exactly 5 cars will show up next Monday?    What is the probability that 0, 1, or 2 cars will show up next Monday between 2pm and 3pm?    There is an average of 11.7 people who visit during those same hours from vehicles. Is it likely that the number of people visiting by car during this hour is also Poisson? Explain.      "
},
{
  "id": "ex-lost-baggage",
  "level": "2",
  "url": "sec-poisson-distribution.html#ex-lost-baggage",
  "type": "Exercise",
  "number": "4.5.4",
  "title": "Lost baggage.",
  "body": " Lost baggage   Occasionally an airline will lose a bag. Suppose a small airline has found it can reasonably model the number of bags lost each weekday using a Poisson model with a mean of 2.2 bags.     What is the probability that the airline will lose no bags next Monday?    What is the probability that the airline will lose 0, 1, or 2 bags on next Monday?    Suppose the airline expands over the course of the next 3 years, doubling the number of flights it makes, and the CEO asks you if it's reasonable for them to continue using the Poisson model with a mean of 2.2. What is an appropriate recommendation? Explain.      "
},
{
  "id": "sec-ch04-review",
  "level": "1",
  "url": "sec-ch04-review.html",
  "type": "Section",
  "number": "4.6",
  "title": "Chapter review",
  "body": " Chapter review   Chapter review   Roulette winnings   In the game of roulette, a wheel is spun and you place bets on where it will stop. One popular bet is that it will stop on a red slot; such a bet has an 18\/38 chance of winning. If it stops on red, you double the money you bet. If not, you lose the money you bet. Suppose you play 3 times, each time with a $1 bet. Let Y represent the total amount won or lost. Write a probability model for Y.     Speeding on the I-5, Part I   The distribution of passenger vehicle speeds traveling on the Interstate 5 Freeway (I-5) in California is nearly normal with a mean of 72.6 miles\/hour and a standard deviation of 4.78 miles\/hour.    What percent of passenger vehicles travel slower than 80 miles\/hour?  What percent of passenger vehicles travel between 60 and 80 miles\/hour?  How fast do the fastest 5% of passenger vehicles travel?   The speed limit on this stretch of the I-5 is 70 miles\/hour. Approximate what percentage of the passenger vehicles travel above the speed limit on this stretch of the I-5.        University admissions   Suppose a university announced that it admitted 2,500 students for the following year's freshman class. However, the university has dorm room spots for only 1,786 freshman students. If there is a 70% chance that an admitted student will decide to accept the offer and attend this university, what is the approximate probability that the university will not have enough dormitory room spots for the freshman class?     Speeding on the I-5, Part II    states that the distribution of speeds of cars traveling on the Interstate 5 Freeway (I-5) in California is nearly normal with a mean of 72.6 miles\/hour and a standard deviation of 4.78 miles\/hour. The speed limit on this stretch of the I-5 is 70 miles\/hour.     A highway patrol officer is hidden on the side of the freeway. What is the probability that 5 cars pass and none are speeding? Assume that the speeds of the cars are independent of each other.    On average, how many cars would the highway patrol officer expect to watch until the first car that is speeding? What is the standard deviation of the number of cars he would expect to watch?        Auto insurance premiums   Suppose a newspaper article states that the distribution of auto insurance premiums for residents of California is approximately normal with a mean of $1,650. The article also states that 25% of California residents pay more than $1,800.     What is the Z-score that corresponds to the top 25% (or the 75 percentile) of the standard normal distribution?   What is the mean insurance cost? What is the cutoff for the 75th percentile?  Identify the standard deviation of insurance premiums in California.       SAT scores   SAT scores (out of 1600) are distributed normally with a mean of 1100 and a standard deviation of 200. Suppose a school council awards a certificate of excellence to all students who score at least 1350 on the SAT, and suppose we pick one of the recognized students at random. What is the probability this student's score will be at least 1500? (The material covered in Section 2.2 on conditional probability would be useful for this question.)     Married women   The American Community Survey estimates that 47.1% of women ages 15 years and over are married.     We randomly select three women between these ages. What is the probability that the third woman selected is the only one who is married?    What is the probability that all three randomly selected women are married?    On average, how many women would you expect to sample before selecting a married woman? What is the standard deviation?    If the proportion of married women was actually 30%, how many women would you expect to sample before selecting a married woman? What is the standard deviation?    Based on your answers to parts (c) and (d), how does decreasing the probability of an event affect the mean and standard deviation of the wait time until success?        Survey response rate   Pew Research reported that the typical response rate to their surveys is only 9%. If for a particular survey 15,000 households are contacted, what is the probability that at least 1,500 will agree to respond?     Overweight baggage   Suppose weights of the checked baggage of airline passengers follow a nearly normal distribution with mean 45 pounds and standard deviation 3.2 pounds. Most airlines charge a fee for baggage that weigh in excess of 50 pounds. Determine what percent of airline passengers incur this fee.     Heights of 10 year olds, Part I   Heights of 10 year olds, regardless of gender, closely follow a normal distribution with mean 55 inches and standard deviation 6 inches.     What is the probability that a randomly chosen 10 year old is shorter than 48 inches?    What is the probability that a randomly chosen 10 year old is between 60 and 65 inches?    If the tallest 10% of the class is considered very tall , what is the height cutoff for very tall ?        Buying books on Ebay   Suppose you're considering buying your expensive chemistry textbook on Ebay. Looking at past auctions suggests that the prices of this textbook follow an approximately normal distribution with mean $89 and standard deviation $15.     What is the probability that a randomly selected auction for this book closes at more than $100?    Ebay allows you to set your maximum bid price so that if someone outbids you on an auction you can automatically outbid them, up to the maximum bid price you set. If you are only bidding on one auction, what are the advantages and disadvantages of setting a bid price too high or too low? What if you are bidding on multiple auctions?    If you watched 10 auctions, roughly what percentile might you use for a maximum bid cutoff to be somewhat sure that you will win one of these ten auctions? Is it possible to find a cutoff point that will ensure that you win an auction?    If you are willing to track up to ten auctions closely, about what price might you use as your maximum bid price if you want to be somewhat sure that you will buy one of these ten books?        Heights of 10 year olds, Part II   Heights of 10 year olds, regardless of gender, closely follow a normal distribution with mean 55 inches and standard deviation 6 inches.     The height requirement for Batman the Ride at Six Flags Magic Mountain is 54 inches. What percent of 10 year olds cannot go on this ride?    Suppose there are four 10 year olds. What is the chance that at least two of them will be able to ride Batman the Ride ?    Suppose you work at the park to help them better understand their customers' demographics, and you are counting people as they enter the park. What is the chance that the first 10 year old you see who can ride Batman the Ride is the 3rd 10 year old who enters the park?    What is the chance that the fifth 10 year old you see who can ride Batman the Ride is the 12th 10 year old who enters the park?        Heights of 10 year olds, Part III   Heights of 10 year olds, regardless of gender, closely follow a normal distribution with mean 55 inches and standard deviation 6 inches.     What fraction of 10 year olds are taller than 76 inches?    If there are 2,000 10 year olds entering Six Flags Magic Mountain in a single day, then compute the expected number of 10 year olds who are at least 76 inches tall. (You may assume the heights of the 10-year olds are independent.)    Using the binomial distribution, compute the probability that 0 of the 2,000 10 year olds will be at least 76 inches tall.    The number of 10 year olds who enter Six Flags Magic Mountain and are at least 76 inches tall in a given day follows a Poisson distribution with mean equal to the value found in part . Use the Poisson distribution to identify the probability no 10 year old will enter the park who is 76 inches or taller.        Multiple choice quiz   In a multiple choice quiz there are 5 questions and 4 choices for each question (a, b, c, d). Robin has not studied for the quiz at all, and decides to randomly guess the answers. What is the probability that    the first question she gets right is the 3 question?  she gets exactly 3 or exactly 4 questions right?  she gets the majority of the questions right?       "
},
{
  "id": "ex-roulette-winnings",
  "level": "2",
  "url": "sec-ch04-review.html#ex-roulette-winnings",
  "type": "Exercise",
  "number": "4.6.1",
  "title": "Roulette winnings.",
  "body": " Roulette winnings   In the game of roulette, a wheel is spun and you place bets on where it will stop. One popular bet is that it will stop on a red slot; such a bet has an 18\/38 chance of winning. If it stops on red, you double the money you bet. If not, you lose the money you bet. Suppose you play 3 times, each time with a $1 bet. Let Y represent the total amount won or lost. Write a probability model for Y.   "
},
{
  "id": "ex-speeding-i5-intro",
  "level": "2",
  "url": "sec-ch04-review.html#ex-speeding-i5-intro",
  "type": "Exercise",
  "number": "4.6.2",
  "title": "Speeding on the I-5, Part I.",
  "body": " Speeding on the I-5, Part I   The distribution of passenger vehicle speeds traveling on the Interstate 5 Freeway (I-5) in California is nearly normal with a mean of 72.6 miles\/hour and a standard deviation of 4.78 miles\/hour.    What percent of passenger vehicles travel slower than 80 miles\/hour?  What percent of passenger vehicles travel between 60 and 80 miles\/hour?  How fast do the fastest 5% of passenger vehicles travel?   The speed limit on this stretch of the I-5 is 70 miles\/hour. Approximate what percentage of the passenger vehicles travel above the speed limit on this stretch of the I-5.      "
},
{
  "id": "ex-university-admissions",
  "level": "2",
  "url": "sec-ch04-review.html#ex-university-admissions",
  "type": "Exercise",
  "number": "4.6.3",
  "title": "University admissions.",
  "body": " University admissions   Suppose a university announced that it admitted 2,500 students for the following year's freshman class. However, the university has dorm room spots for only 1,786 freshman students. If there is a 70% chance that an admitted student will decide to accept the offer and attend this university, what is the approximate probability that the university will not have enough dormitory room spots for the freshman class?   "
},
{
  "id": "ex-speeding-i5-geometric",
  "level": "2",
  "url": "sec-ch04-review.html#ex-speeding-i5-geometric",
  "type": "Exercise",
  "number": "4.6.4",
  "title": "Speeding on the I-5, Part II.",
  "body": " Speeding on the I-5, Part II    states that the distribution of speeds of cars traveling on the Interstate 5 Freeway (I-5) in California is nearly normal with a mean of 72.6 miles\/hour and a standard deviation of 4.78 miles\/hour. The speed limit on this stretch of the I-5 is 70 miles\/hour.     A highway patrol officer is hidden on the side of the freeway. What is the probability that 5 cars pass and none are speeding? Assume that the speeds of the cars are independent of each other.    On average, how many cars would the highway patrol officer expect to watch until the first car that is speeding? What is the standard deviation of the number of cars he would expect to watch?      "
},
{
  "id": "ex-auto-insurance-premiums",
  "level": "2",
  "url": "sec-ch04-review.html#ex-auto-insurance-premiums",
  "type": "Exercise",
  "number": "4.6.5",
  "title": "Auto insurance premiums.",
  "body": " Auto insurance premiums   Suppose a newspaper article states that the distribution of auto insurance premiums for residents of California is approximately normal with a mean of $1,650. The article also states that 25% of California residents pay more than $1,800.     What is the Z-score that corresponds to the top 25% (or the 75 percentile) of the standard normal distribution?   What is the mean insurance cost? What is the cutoff for the 75th percentile?  Identify the standard deviation of insurance premiums in California.     "
},
{
  "id": "ex-sat-scores",
  "level": "2",
  "url": "sec-ch04-review.html#ex-sat-scores",
  "type": "Exercise",
  "number": "4.6.6",
  "title": "SAT scores.",
  "body": " SAT scores   SAT scores (out of 1600) are distributed normally with a mean of 1100 and a standard deviation of 200. Suppose a school council awards a certificate of excellence to all students who score at least 1350 on the SAT, and suppose we pick one of the recognized students at random. What is the probability this student's score will be at least 1500? (The material covered in Section 2.2 on conditional probability would be useful for this question.)   "
},
{
  "id": "ex-married-women",
  "level": "2",
  "url": "sec-ch04-review.html#ex-married-women",
  "type": "Exercise",
  "number": "4.6.7",
  "title": "Married women.",
  "body": " Married women   The American Community Survey estimates that 47.1% of women ages 15 years and over are married.     We randomly select three women between these ages. What is the probability that the third woman selected is the only one who is married?    What is the probability that all three randomly selected women are married?    On average, how many women would you expect to sample before selecting a married woman? What is the standard deviation?    If the proportion of married women was actually 30%, how many women would you expect to sample before selecting a married woman? What is the standard deviation?    Based on your answers to parts (c) and (d), how does decreasing the probability of an event affect the mean and standard deviation of the wait time until success?      "
},
{
  "id": "ex-survey-response-rate",
  "level": "2",
  "url": "sec-ch04-review.html#ex-survey-response-rate",
  "type": "Exercise",
  "number": "4.6.8",
  "title": "Survey response rate.",
  "body": " Survey response rate   Pew Research reported that the typical response rate to their surveys is only 9%. If for a particular survey 15,000 households are contacted, what is the probability that at least 1,500 will agree to respond?   "
},
{
  "id": "ex-overweight-baggage",
  "level": "2",
  "url": "sec-ch04-review.html#ex-overweight-baggage",
  "type": "Exercise",
  "number": "4.6.9",
  "title": "Overweight baggage.",
  "body": " Overweight baggage   Suppose weights of the checked baggage of airline passengers follow a nearly normal distribution with mean 45 pounds and standard deviation 3.2 pounds. Most airlines charge a fee for baggage that weigh in excess of 50 pounds. Determine what percent of airline passengers incur this fee.   "
},
{
  "id": "ex-heights-10-yrs",
  "level": "2",
  "url": "sec-ch04-review.html#ex-heights-10-yrs",
  "type": "Exercise",
  "number": "4.6.10",
  "title": "Heights of 10 year olds, Part I.",
  "body": " Heights of 10 year olds, Part I   Heights of 10 year olds, regardless of gender, closely follow a normal distribution with mean 55 inches and standard deviation 6 inches.     What is the probability that a randomly chosen 10 year old is shorter than 48 inches?    What is the probability that a randomly chosen 10 year old is between 60 and 65 inches?    If the tallest 10% of the class is considered very tall , what is the height cutoff for very tall ?      "
},
{
  "id": "ex-buy-books-ebay",
  "level": "2",
  "url": "sec-ch04-review.html#ex-buy-books-ebay",
  "type": "Exercise",
  "number": "4.6.11",
  "title": "Buying books on Ebay.",
  "body": " Buying books on Ebay   Suppose you're considering buying your expensive chemistry textbook on Ebay. Looking at past auctions suggests that the prices of this textbook follow an approximately normal distribution with mean $89 and standard deviation $15.     What is the probability that a randomly selected auction for this book closes at more than $100?    Ebay allows you to set your maximum bid price so that if someone outbids you on an auction you can automatically outbid them, up to the maximum bid price you set. If you are only bidding on one auction, what are the advantages and disadvantages of setting a bid price too high or too low? What if you are bidding on multiple auctions?    If you watched 10 auctions, roughly what percentile might you use for a maximum bid cutoff to be somewhat sure that you will win one of these ten auctions? Is it possible to find a cutoff point that will ensure that you win an auction?    If you are willing to track up to ten auctions closely, about what price might you use as your maximum bid price if you want to be somewhat sure that you will buy one of these ten books?      "
},
{
  "id": "ex-heights-10-yrs-prob",
  "level": "2",
  "url": "sec-ch04-review.html#ex-heights-10-yrs-prob",
  "type": "Exercise",
  "number": "4.6.12",
  "title": "Heights of 10 year olds, Part II.",
  "body": " Heights of 10 year olds, Part II   Heights of 10 year olds, regardless of gender, closely follow a normal distribution with mean 55 inches and standard deviation 6 inches.     The height requirement for Batman the Ride at Six Flags Magic Mountain is 54 inches. What percent of 10 year olds cannot go on this ride?    Suppose there are four 10 year olds. What is the chance that at least two of them will be able to ride Batman the Ride ?    Suppose you work at the park to help them better understand their customers' demographics, and you are counting people as they enter the park. What is the chance that the first 10 year old you see who can ride Batman the Ride is the 3rd 10 year old who enters the park?    What is the chance that the fifth 10 year old you see who can ride Batman the Ride is the 12th 10 year old who enters the park?      "
},
{
  "id": "ex-heights-10-yrs-dist",
  "level": "2",
  "url": "sec-ch04-review.html#ex-heights-10-yrs-dist",
  "type": "Exercise",
  "number": "4.6.13",
  "title": "Heights of 10 year olds, Part III.",
  "body": " Heights of 10 year olds, Part III   Heights of 10 year olds, regardless of gender, closely follow a normal distribution with mean 55 inches and standard deviation 6 inches.     What fraction of 10 year olds are taller than 76 inches?    If there are 2,000 10 year olds entering Six Flags Magic Mountain in a single day, then compute the expected number of 10 year olds who are at least 76 inches tall. (You may assume the heights of the 10-year olds are independent.)    Using the binomial distribution, compute the probability that 0 of the 2,000 10 year olds will be at least 76 inches tall.    The number of 10 year olds who enter Six Flags Magic Mountain and are at least 76 inches tall in a given day follows a Poisson distribution with mean equal to the value found in part . Use the Poisson distribution to identify the probability no 10 year old will enter the park who is 76 inches or taller.      "
},
{
  "id": "ex-mc-quiz",
  "level": "2",
  "url": "sec-ch04-review.html#ex-mc-quiz",
  "type": "Exercise",
  "number": "4.6.14",
  "title": "Multiple choice quiz.",
  "body": " Multiple choice quiz   In a multiple choice quiz there are 5 questions and 4 choices for each question (a, b, c, d). Robin has not studied for the quiz at all, and decides to randomly guess the answers. What is the probability that    the first question she gets right is the 3 question?  she gets exactly 3 or exactly 4 questions right?  she gets the majority of the questions right?     "
},
{
  "id": "sec-point-estimates",
  "level": "1",
  "url": "sec-point-estimates.html",
  "type": "Section",
  "number": "5.1",
  "title": "Point Estimates and Sampling Variability",
  "body": " Point Estimates and Sampling Variability   Companies such as Pew Research frequently conduct polls as a way to understand the state of public opinion or knowledge on many topics, including politics, scientific understanding, brand recognition, and more. The ultimate goal in taking a poll is generally to use the responses to estimate the opinion or knowledge of the broader population.    Point Estimates and Error  Suppose a poll suggested the US President's approval rating is 45%. We would consider 45% to be a point estimate of the approval rating we might see if we collected responses from the entire population. This entire-population response proportion is generally referred to as the parameter of interest .  When the parameter is a proportion, it is often denoted by , and we often refer to the sample proportion as (pronounced p-hat ). Unless we collect responses from every individual in the population, remains unknown, and we use as our estimate of . The difference we observe from the poll versus the parameter is called the error in the estimate.  Generally, the error consists of two aspects: sampling error and bias .     Sampling error , sometimes called sampling uncertainty , describes how much an estimate will tend to vary from one sample to the next. For instance, the estimate from one sample might be 1% too low while in another it may be 3% too high. The sample size is often represented by the letter .       Bias describes a systematic tendency to over- or under-estimate the true population value. We try to minimize bias through thoughtful data collection procedures.      Understanding the Variability of a Point Estimate  To understand how a sample proportion behaves, consider a scenario where the proportion of American adults who support expanding solar energy is . If we were to take a poll of 1000 American adults on this topic, how close might we expect the sample proportion to be to 0.88?  We can simulate responses we would get from a simple random sample of 1000 American adults through the following steps:   Create a set of entries representing all American adults, where 88% say \"support\" and 12% say \"not\".  Mix up the entries and pull out 1000 entries to represent our sample.  Compute the fraction that say \"support\".   If we conduct this simulation 10,000 times, we create a sampling distribution of the sample proportions. This distribution has important characteristics:   Center: The center of the distribution equals the population proportion.  Spread: The standard deviation is called the standard error (SE) .  Shape: The distribution is approximately normal (bell-shaped).    Sampling distributions are never observed in practice, but we keep them in mind as they help us understand and characterize the point estimates we do observe.     Central Limit Theorem    When observations are independent and the sample size is sufficiently large, the sample proportion will tend to follow a normal distribution with:   The sample size is typically considered sufficiently large when and , which is called the success-failure condition .    The Central Limit Theorem is incredibly important and provides a foundation for much of statistics. Be mindful of the two technical conditions: the observations must be independent, and the sample size must be sufficiently large.    Applying the Central Limit Theorem to Real-World Settings  When we don't know the population proportion and must use in place of , we use the substitution approximation (also called the plug-in principle ). This allows us to estimate the standard error:   We also use in place of when checking the success-failure condition in practical applications where we don't know the true population proportion.    Extending the Framework for Other Statistics  The strategy of using a sample statistic to estimate a parameter is quite common and can be applied to other statistics besides a proportion. For instance, to estimate the average salary for graduates from a particular college, we could survey a random sample of recent graduates and use the sample mean to estimate the population mean .  The principles and general ideas are the same across different contexts, even if the details change. While this chapter emphasizes a single proportion context, these methods will be applied to many different contexts throughout this book.   "
},
{
  "id": "subsec-point-estimates-error-2",
  "level": "2",
  "url": "sec-point-estimates.html#subsec-point-estimates-error-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "point estimate parameter of interest "
},
{
  "id": "subsec-point-estimates-error-3",
  "level": "2",
  "url": "sec-point-estimates.html#subsec-point-estimates-error-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "error "
},
{
  "id": "subsec-point-estimates-error-4",
  "level": "2",
  "url": "sec-point-estimates.html#subsec-point-estimates-error-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sampling error bias "
},
{
  "id": "subsec-point-estimates-error-5",
  "level": "2",
  "url": "sec-point-estimates.html#subsec-point-estimates-error-5",
  "type": "Definition",
  "number": "5.1.1",
  "title": "",
  "body": "   Sampling error , sometimes called sampling uncertainty , describes how much an estimate will tend to vary from one sample to the next. For instance, the estimate from one sample might be 1% too low while in another it may be 3% too high. The sample size is often represented by the letter .   "
},
{
  "id": "subsec-point-estimates-error-6",
  "level": "2",
  "url": "sec-point-estimates.html#subsec-point-estimates-error-6",
  "type": "Definition",
  "number": "5.1.2",
  "title": "",
  "body": "   Bias describes a systematic tendency to over- or under-estimate the true population value. We try to minimize bias through thoughtful data collection procedures.   "
},
{
  "id": "subsec-variability-point-estimate-5",
  "level": "2",
  "url": "sec-point-estimates.html#subsec-variability-point-estimate-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sampling distribution "
},
{
  "id": "thm-central-limit-theorem",
  "level": "2",
  "url": "sec-point-estimates.html#thm-central-limit-theorem",
  "type": "Theorem",
  "number": "5.1.3",
  "title": "",
  "body": "  When observations are independent and the sample size is sufficiently large, the sample proportion will tend to follow a normal distribution with:   The sample size is typically considered sufficiently large when and , which is called the success-failure condition .   "
},
{
  "id": "subsec-clt-real-world-2",
  "level": "2",
  "url": "sec-point-estimates.html#subsec-clt-real-world-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "substitution approximation "
},
{
  "id": "sec-confidence-intervals",
  "level": "1",
  "url": "sec-confidence-intervals.html",
  "type": "Section",
  "number": "5.2",
  "title": "Confidence Intervals for a Proportion",
  "body": " Confidence Intervals for a Proportion   The sample proportion provides a single plausible value for the population proportion . However, the sample proportion isn't perfect and will have some standard error associated with it. When stating an estimate for the population proportion, it is better practice to provide a plausible range of values instead of supplying just the point estimate.    Capturing the Population Parameter  A confidence interval is a range of plausible values where we are likely to find the population parameter. Using a confidence interval is like fishing with a net instead of a spear: we have a good chance of catching the fish.    Constructing a 95% Confidence Interval  Our sample proportion is the most plausible value of the population proportion, so it makes sense to build a confidence interval around this point estimate. The standard error provides a guide for how large we should make the confidence interval.  In a normal distribution, 95% of the data is within 1.96 standard deviations of the mean. Using this principle, we can construct a confidence interval that extends 1.96 standard errors from the sample proportion to be 95% confident that the interval captures the population proportion:   When we say we are 95% confident, we mean: suppose we took many samples and built a 95% confidence interval from each. Then about 95% of those intervals would contain the parameter, .    A 95% confidence interval for a parameter is constructed as:   This confidence interval accounts for sampling error but not bias.      Changing the Confidence Level  We can create confidence intervals with different confidence levels. For example, to create a 99% confidence interval, we use 2.58 instead of 1.96:   The choice of critical value depends on the desired confidence level. To find for any confidence level, we select it so that the area between and in the standard normal distribution corresponds to the confidence level.    For a point estimate that closely follows a normal model with standard error , a confidence interval for the population parameter is:   where corresponds to the confidence level selected.      In a confidence interval, is called the margin of error .      Confidence Interval Procedure for a Single Proportion    Prepare  Identify and , and determine what confidence level you wish to use.    Check  Verify the conditions to ensure is nearly normal. For one-proportion confidence intervals, use in place of to check the success-failure condition.    Calculate  If the conditions hold, compute using , find , and construct the interval.    Conclude  Interpret the confidence interval in the context of the problem.      Interpreting Confidence Intervals  When interpreting a confidence interval, note that the statement is always about the population parameter (considering all members of the population), not about individual observations or future point estimates. A confidence interval only provides a plausible range for population parameters.   Remember that the methods discussed apply only to sampling error, not to bias. If a data set is collected in a way that systematically under-estimates or over-estimates the population parameter, these techniques will not address that problem.    "
},
{
  "id": "subsec-capturing-parameter-2",
  "level": "2",
  "url": "sec-confidence-intervals.html#subsec-capturing-parameter-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "confidence interval "
},
{
  "id": "subsec-95-ci-6",
  "level": "2",
  "url": "sec-confidence-intervals.html#subsec-95-ci-6",
  "type": "Definition",
  "number": "5.2.1",
  "title": "",
  "body": "  A 95% confidence interval for a parameter is constructed as:   This confidence interval accounts for sampling error but not bias.   "
},
{
  "id": "subsec-changing-confidence-5",
  "level": "2",
  "url": "sec-confidence-intervals.html#subsec-changing-confidence-5",
  "type": "Definition",
  "number": "5.2.2",
  "title": "",
  "body": "  For a point estimate that closely follows a normal model with standard error , a confidence interval for the population parameter is:   where corresponds to the confidence level selected.   "
},
{
  "id": "subsec-changing-confidence-6",
  "level": "2",
  "url": "sec-confidence-intervals.html#subsec-changing-confidence-6",
  "type": "Definition",
  "number": "5.2.3",
  "title": "",
  "body": "  In a confidence interval, is called the margin of error .   "
},
{
  "id": "sec-hypothesis-testing",
  "level": "1",
  "url": "sec-hypothesis-testing.html",
  "type": "Section",
  "number": "5.3",
  "title": "Hypothesis Testing for a Proportion",
  "body": " Hypothesis Testing for a Proportion   The hypothesis testing framework is used to rigorously evaluate competing ideas and claims. In this section, we'll explore how to formally test claims about population proportions using data from samples.    Hypothesis Testing Framework  In hypothesis testing, we consider two competing ideas:   The null hypothesis ( ) often represents a skeptical perspective or a claim to be tested.  The alternative hypothesis ( ) represents an alternative claim under consideration and is often represented by a range of possible parameter values.   Our job as data scientists is to play the role of a skeptic: before we buy into the alternative hypothesis, we need to see strong supporting evidence. Even if we fail to reject the null hypothesis, we typically do not accept it as true; failing to find strong evidence for the alternative hypothesis is not equivalent to accepting the null hypothesis.    The null value is the value of the parameter under the null hypothesis. It is common to label the null value with the same symbol as the parameter but with a subscript 0. For example, if the null hypothesis is , then the null value is .      Testing Hypotheses Using Confidence Intervals  We can use confidence intervals to evaluate hypothesis tests. If the null value falls within the confidence interval, we cannot say the null value is implausible. In this case, we cannot reject the null hypothesis. If the null value falls outside the confidence interval, it is implausible and we reject the null hypothesis.    Decision Errors in Hypothesis Testing  Hypothesis tests are not flawless: we can make an incorrect decision based on the data.    A Type 1 Error is rejecting the null hypothesis when is actually true.      A Type 2 Error is failing to reject the null hypothesis when the alternative is actually true.    If we reduce how often we make one type of error, we generally make more of the other type.    The significance level  indicates how often we incorrectly reject when it is true. The traditional significance level is .      Formal Testing Using P-values    The p-value is the probability of observing data at least as favorable to the alternative hypothesis as our current data set, if the null hypothesis were true. We typically use a summary statistic of the data, such as the sample proportion, to help compute the p-value and evaluate the hypotheses.    When evaluating hypotheses for proportions using the p-value method, we use the null value (not ) when checking the success-failure condition and computing the standard error:    When using the p-value method to evaluate a hypothesis test, check the success-failure condition using the null value instead of using the sample proportion. We're supposing the null hypothesis is true, which is different from the confidence interval approach.     Prepare  Identify the parameter of interest, list hypotheses, identify the significance level, and identify and .    Check  Verify conditions to ensure is nearly normal under . For one-proportion hypothesis tests, use the null value to check the success-failure condition.    Calculate  If the conditions hold, compute the standard error using , compute the Z-score, and identify the p-value.    Conclude  Evaluate the hypothesis test by comparing the p-value to , and provide a conclusion in the context of the problem.      When the p-value is less than the significance level , we reject and report that the data provide strong evidence supporting the alternative hypothesis.  When the p-value is greater than , we do not reject , and we report that we do not have sufficient evidence to reject the null hypothesis.      Choosing a Significance Level  Choosing a significance level for a test is important in many contexts. The traditional level is , but it can be helpful to adjust the significance level based on the application.   If making a Type 1 Error is dangerous or especially costly, choose a small significance level (e.g., 0.01).  If a Type 2 Error is relatively more dangerous or costly, choose a higher significance level (e.g., 0.10).    "
},
{
  "id": "subsec-ht-framework-5",
  "level": "2",
  "url": "sec-hypothesis-testing.html#subsec-ht-framework-5",
  "type": "Definition",
  "number": "5.3.1",
  "title": "",
  "body": "  The null value is the value of the parameter under the null hypothesis. It is common to label the null value with the same symbol as the parameter but with a subscript 0. For example, if the null hypothesis is , then the null value is .   "
},
{
  "id": "subsec-decision-errors-3",
  "level": "2",
  "url": "sec-hypothesis-testing.html#subsec-decision-errors-3",
  "type": "Definition",
  "number": "5.3.2",
  "title": "",
  "body": "  A Type 1 Error is rejecting the null hypothesis when is actually true.   "
},
{
  "id": "subsec-decision-errors-4",
  "level": "2",
  "url": "sec-hypothesis-testing.html#subsec-decision-errors-4",
  "type": "Definition",
  "number": "5.3.3",
  "title": "",
  "body": "  A Type 2 Error is failing to reject the null hypothesis when the alternative is actually true.   "
},
{
  "id": "subsec-decision-errors-6",
  "level": "2",
  "url": "sec-hypothesis-testing.html#subsec-decision-errors-6",
  "type": "Definition",
  "number": "5.3.4",
  "title": "",
  "body": "  The significance level  indicates how often we incorrectly reject when it is true. The traditional significance level is .   "
},
{
  "id": "subsec-p-values-2",
  "level": "2",
  "url": "sec-hypothesis-testing.html#subsec-p-values-2",
  "type": "Definition",
  "number": "5.3.5",
  "title": "",
  "body": "  The p-value is the probability of observing data at least as favorable to the alternative hypothesis as our current data set, if the null hypothesis were true. We typically use a summary statistic of the data, such as the sample proportion, to help compute the p-value and evaluate the hypotheses.   "
},
{
  "id": "subsec-p-values-7",
  "level": "2",
  "url": "sec-hypothesis-testing.html#subsec-p-values-7",
  "type": "Definition",
  "number": "5.3.6",
  "title": "",
  "body": "  When the p-value is less than the significance level , we reject and report that the data provide strong evidence supporting the alternative hypothesis.  When the p-value is greater than , we do not reject , and we report that we do not have sufficient evidence to reject the null hypothesis.   "
},
{
  "id": "sec-ch05-review",
  "level": "1",
  "url": "sec-ch05-review.html",
  "type": "Section",
  "number": "5.4",
  "title": "Chapter 5 Review Exercises",
  "body": " Chapter 5 Review Exercises  Additional exercises for practicing the concepts covered in this chapter are available in the accompanying exercise materials. These exercises cover parameter identification, point estimates, confidence intervals, and hypothesis testing for proportions.  "
},
{
  "id": "sec-single-proportion",
  "level": "1",
  "url": "sec-single-proportion.html",
  "type": "Section",
  "number": "6.1",
  "title": "Inference for a Single Proportion",
  "body": " Inference for a Single Proportion   We encountered inference methods for a single proportion in Chapter 5, exploring point estimates, confidence intervals, and hypothesis tests. In this section, we'll review these topics and also learn how to choose an appropriate sample size when collecting data for single proportion contexts.    Identifying When the Sample Proportion is Nearly Normal  A sample proportion can be modeled using a normal distribution when the sample observations are independent and the sample size is sufficiently large.   Sampling Distribution of  The sampling distribution for based on a sample of size from a population with a true proportion is nearly normal when:   The sample's observations are independent, e.g., are from a simple random sample.  We expect to see at least 10 successes and 10 failures in the sample, i.e., and . This is called the success-failure condition .   When these conditions are met, the sampling distribution of is nearly normal with mean and standard error .   Typically we don't know the true proportion , so we substitute some value to check conditions and estimate the standard error. For confidence intervals, the sample proportion is used to check the success-failure condition and compute the standard error. For hypothesis tests, typically the null value (the proportion claimed in the null hypothesis) is used in place of .    Confidence Intervals for a Proportion  A confidence interval provides a range of plausible values for the parameter , and when can be modeled using a normal distribution, the confidence interval for takes the form:   where is chosen to correspond to the confidence level, and the standard error is computed as .   Constructing a Confidence Interval for a Single Proportion  Once you've determined that the sampling distribution for is nearly normal, a confidence interval for the population proportion is:   where corresponds to the confidence level.     Hypothesis Testing for a Proportion  When testing hypotheses about a population proportion, we use the hypothesized value (from the null hypothesis) to check conditions and compute the standard error.   Test statistic for a single proportion:    When the null hypothesis is true and the conditions are satisfied, follows a standard normal distribution.    Key Difference: For confidence intervals, use in the standard error. For hypothesis tests, use in the standard error.     Choosing a Sample Size When Estimating a Proportion  When planning a study, we often want to know: How many observations do we need to achieve a desired margin of error? The margin of error in a confidence interval is .  Solving for in the margin of error formula:   Since we don't know before collecting data, we can:   Use a guess for based on a previous study or pilot data.  Use , which gives the most conservative (largest) sample size, since is maximized when .    "
},
{
  "id": "sec-difference-two-proportions",
  "level": "1",
  "url": "sec-difference-two-proportions.html",
  "type": "Section",
  "number": "6.2",
  "title": "Difference of Two Proportions",
  "body": " Difference of Two Proportions   We now consider a different scenario: comparing proportions from two independent groups. For example, we might compare the proportion of patients who recover in a treatment group versus a control group, or compare the proportion of voters supporting a candidate across two different regions.    Sampling Distribution of a Difference of Proportions  When we have two independent samples, we're often interested in the difference between sample proportions: . This difference estimates the difference in population proportions: .   Sampling Distribution of   When the following conditions are satisfied, the sampling distribution of is nearly normal with:    Conditions:    Independence: The data in each group must be independent, and the two groups must be independent of each other.  Success-failure condition: The success-failure condition must hold for each sample: , , , and .       Confidence Interval for  A confidence interval for the difference is:   where the standard error is:   Note that we use the sample proportions and in the standard error formula.    Hypothesis Test for  When testing (or equivalently, ), we use a pooled proportion to compute the standard error.    The pooled proportion is used when testing the null hypothesis that two proportions are equal:   where and are the number of successes in each sample.    The test statistic is:     Remember: Use the pooled proportion in the standard error for hypothesis tests, but use the individual sample proportions for confidence intervals.    "
},
{
  "id": "thm-diff-proportions",
  "level": "2",
  "url": "sec-difference-two-proportions.html#thm-diff-proportions",
  "type": "Theorem",
  "number": "6.2.1",
  "title": "Sampling Distribution of <span class=\"process-math\">\\(\\hat{p}_1 - \\hat{p}_2\\)<\/span>.",
  "body": " Sampling Distribution of   When the following conditions are satisfied, the sampling distribution of is nearly normal with:    Conditions:    Independence: The data in each group must be independent, and the two groups must be independent of each other.  Success-failure condition: The success-failure condition must hold for each sample: , , , and .    "
},
{
  "id": "subsec-ht-diff-proportions-2",
  "level": "2",
  "url": "sec-difference-two-proportions.html#subsec-ht-diff-proportions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pooled proportion "
},
{
  "id": "def-pooled-proportion",
  "level": "2",
  "url": "sec-difference-two-proportions.html#def-pooled-proportion",
  "type": "Definition",
  "number": "6.2.2",
  "title": "",
  "body": "  The pooled proportion is used when testing the null hypothesis that two proportions are equal:   where and are the number of successes in each sample.   "
},
{
  "id": "sec-chi-square-gof",
  "level": "1",
  "url": "sec-chi-square-gof.html",
  "type": "Section",
  "number": "6.3",
  "title": "Testing for Goodness of Fit Using Chi-Square",
  "body": " Testing for Goodness of Fit Using Chi-Square   Sometimes we want to evaluate whether the observed distribution of a categorical variable matches a hypothesized distribution. For example: Does the distribution of blood types in a sample match the known distribution in the general population? Do observed frequencies of outcomes match those expected if a die is fair? These questions can be answered using a chi-square goodness of fit test .    Goodness of Fit Test  In a goodness of fit test, we compare observed counts to expected counts under a null hypothesis. The test statistic measures how far the observed counts are from the expected counts.    The chi-square test statistic for goodness of fit is:   where the sum is taken over all categories.    The chi-square statistic measures the total deviation between observed and expected counts. Large values of indicate a poor fit between the data and the null hypothesis.    The Chi-Square Distribution  When the sample size is large enough, the chi-square test statistic follows a chi-square distribution .    The chi-square distribution is a right-skewed distribution that starts at zero. It has one parameter: degrees of freedom (df) . For a goodness of fit test with categories:      Conditions for the chi-square goodness of fit test:    Independence: The observations must be independent.  Sample size: Each expected count must be at least 5.   The p-value for a chi-square test is always found in the upper tail of the chi-square distribution, since large values of provide evidence against .   "
},
{
  "id": "sec-chi-square-gof-2-1",
  "level": "2",
  "url": "sec-chi-square-gof.html#sec-chi-square-gof-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "chi-square goodness of fit test "
},
{
  "id": "def-chi-square-statistic",
  "level": "2",
  "url": "sec-chi-square-gof.html#def-chi-square-statistic",
  "type": "Definition",
  "number": "6.3.1",
  "title": "",
  "body": "  The chi-square test statistic for goodness of fit is:   where the sum is taken over all categories.   "
},
{
  "id": "subsec-chi-square-distribution-2",
  "level": "2",
  "url": "sec-chi-square-gof.html#subsec-chi-square-distribution-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "chi-square distribution "
},
{
  "id": "def-chi-square-dist",
  "level": "2",
  "url": "sec-chi-square-gof.html#def-chi-square-dist",
  "type": "Definition",
  "number": "6.3.2",
  "title": "",
  "body": "  The chi-square distribution is a right-skewed distribution that starts at zero. It has one parameter: degrees of freedom (df) . For a goodness of fit test with categories:    "
},
{
  "id": "sec-chi-square-independence",
  "level": "1",
  "url": "sec-chi-square-independence.html",
  "type": "Section",
  "number": "6.4",
  "title": "Testing for Independence in Two-Way Tables",
  "body": " Testing for Independence in Two-Way Tables   A two-way table (also called a contingency table ) summarizes data for two categorical variables. We often want to know: Are these two variables independent, or is there an association between them?    Two-Way Tables and Expected Counts  In a two-way table, we organize data by two categorical variables. To test for independence, we compare observed counts to expected counts under the assumption that the variables are independent.   Computing Expected Counts  If two variables are independent, the expected count for a cell in row and column is:      The Chi-Square Test for Independence  The chi-square test for independence uses the same test statistic as the goodness of fit test:   However, the degrees of freedom are calculated differently:    Hypotheses:    : The two variables are independent.  : The two variables are not independent (they are associated).    Conditions:    Independence: Each case that contributes a count to the table must be independent of all other cases.  Sample size: Each expected count must be at least 5.    The chi-square test for independence tells us whether there is an association, but it doesn't tell us the nature or strength of that association. If the test is significant, examine the table and consider computing row or column proportions to understand the relationship.     Limitations of Chi-Square Tests  Important considerations when using chi-square tests:   Chi-square tests can only establish whether an association exists; they do not determine causation.  The test requires all expected counts to be at least 5. If this condition is not met, consider combining categories or using an alternative test (such as Fisher's exact test).  Large sample sizes can make even trivial differences statistically significant. Always consider practical significance alongside statistical significance.  Chi-square tests work with counts, not percentages or proportions. Make sure your data are in the correct form.    "
},
{
  "id": "sec-chi-square-independence-2-1",
  "level": "2",
  "url": "sec-chi-square-independence.html#sec-chi-square-independence-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "contingency table "
},
{
  "id": "sec-ch07-review",
  "level": "1",
  "url": "sec-ch07-review.html",
  "type": "Section",
  "number": "6.5",
  "title": "Chapter 7 Review Exercises",
  "body": " Chapter 7 Review Exercises  This chapter covered inference for categorical data. Key concepts include:   Confidence intervals and hypothesis tests for a single proportion  Sample size calculations for proportions  Comparing two proportions using confidence intervals and hypothesis tests  The pooled proportion for hypothesis testing  Chi-square goodness of fit tests for comparing observed and expected distributions  Chi-square tests for independence in two-way tables  Computing expected counts and degrees of freedom for chi-square tests   Additional exercises for practicing these concepts are available in the accompanying exercise materials.  "
},
{
  "id": "sec-one-sample-t",
  "level": "1",
  "url": "sec-one-sample-t.html",
  "type": "Section",
  "number": "7.1",
  "title": "One-Sample Means with the <span class=\"process-math\">\\(t\\)<\/span>-Distribution",
  "body": " One-Sample Means with the -Distribution   Similar to how we can model the behavior of the sample proportion using a normal distribution, the sample mean can also be modeled using a normal distribution when certain conditions are met. However, we'll soon learn that a new distribution, called the t-distribution , tends to be more useful when working with the sample mean. We'll first learn about this new distribution, then we'll use it to construct confidence intervals and conduct hypothesis tests for the mean.    The Sampling Distribution of  The sample mean tends to follow a normal distribution centered at the population mean when certain conditions are met. Additionally, we can compute a standard error for the sample mean using the population standard deviation and the sample size .   Central Limit Theorem for the Sample Mean   When we collect a sufficiently large sample of independent observations from a population with mean and standard deviation , the sampling distribution of will be nearly normal with:     Before diving into confidence intervals and hypothesis tests using , we first need to cover two topics:   When we modeled using the normal distribution, certain conditions had to be satisfied. The conditions for working with are a little more complex.  The standard error is dependent on the population standard deviation . However, we rarely know , and instead we must estimate it. Because this estimation is itself imperfect, we use a new distribution called the t-distribution to account for this additional uncertainty.     Evaluating Conditions for Modeling  Two conditions are required to apply the Central Limit Theorem for a sample mean :   Independence: The sample observations must be independent. This is typically satisfied if the data come from a simple random sample and the sample size is less than 10% of the population.  Normality: The population distribution should be normal or the sample size should be large ( is a common guideline). For smaller samples, we can check normality using a normal probability plot or histogram.    When examining a sample, the normality condition is satisfied if:   The sample shows no clear outliers and little skewness, OR  The sample size is at least 30 and there are no particularly extreme outliers.      Introducing the -Distribution  When we don't know the population standard deviation (which is nearly always the case), we must estimate it using the sample standard deviation . This introduces additional uncertainty, especially for small samples. The t-distribution accounts for this extra variability.    The t-distribution is a bell-shaped distribution centered at zero, similar to the standard normal distribution, but with thicker tails. The exact form of the t-distribution depends on the degrees of freedom (df) . For inference with a single sample mean, .    Key properties of the t-distribution:   It is symmetric and bell-shaped, centered at 0.  It has thicker tails than the normal distribution, meaning more probability in the extremes.  As the degrees of freedom increase, the t-distribution approaches the normal distribution.  For , the t-distribution is nearly indistinguishable from the normal distribution.     When the population standard deviation is unknown and estimated by the sample standard deviation , the standard error of the mean is:       One-Sample -Confidence Intervals  A confidence interval for a population mean based on a sample of size with sample mean and sample standard deviation is given by:   Here, is the critical value from the t-distribution with degrees of freedom that corresponds to the desired confidence level.   One-Sample -Confidence Interval   Prepare  Identify the sample mean , sample standard deviation , and sample size . Determine the desired confidence level.    Check  Verify that observations are independent and that the sample size is appropriate for the distribution of the data (check for extreme outliers or strong skewness).    Calculate  Compute and . Find the appropriate value and construct the confidence interval .    Conclude  Interpret the confidence interval in the context of the problem.      One-Sample -Test  To test a hypothesis about a population mean , we use the one-sample t-test . The test statistic is:   where is the null value (the value of under the null hypothesis). This test statistic follows a t-distribution with when the null hypothesis is true and conditions are met.   One-Sample -Test   Prepare  State the hypotheses, identify , , , and the significance level .    Check  Verify independence and normality conditions.    Calculate  Compute the t-statistic and find the p-value using the t-distribution with .    Conclude  Make a decision by comparing the p-value to and interpret in context.     "
},
{
  "id": "sec-one-sample-t-2-1",
  "level": "2",
  "url": "sec-one-sample-t.html#sec-one-sample-t-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "t-distribution "
},
{
  "id": "thm-clt-mean",
  "level": "2",
  "url": "sec-one-sample-t.html#thm-clt-mean",
  "type": "Theorem",
  "number": "7.1.1",
  "title": "Central Limit Theorem for the Sample Mean.",
  "body": " Central Limit Theorem for the Sample Mean   When we collect a sufficiently large sample of independent observations from a population with mean and standard deviation , the sampling distribution of will be nearly normal with:    "
},
{
  "id": "subsec-introducing-t-dist-2",
  "level": "2",
  "url": "sec-one-sample-t.html#subsec-introducing-t-dist-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "t-distribution "
},
{
  "id": "def-t-distribution",
  "level": "2",
  "url": "sec-one-sample-t.html#def-t-distribution",
  "type": "Definition",
  "number": "7.1.2",
  "title": "",
  "body": "  The t-distribution is a bell-shaped distribution centered at zero, similar to the standard normal distribution, but with thicker tails. The exact form of the t-distribution depends on the degrees of freedom (df) . For inference with a single sample mean, .   "
},
{
  "id": "def-standard-error-mean",
  "level": "2",
  "url": "sec-one-sample-t.html#def-standard-error-mean",
  "type": "Definition",
  "number": "7.1.3",
  "title": "",
  "body": "  When the population standard deviation is unknown and estimated by the sample standard deviation , the standard error of the mean is:    "
},
{
  "id": "subsec-one-sample-t-test-2",
  "level": "2",
  "url": "sec-one-sample-t.html#subsec-one-sample-t-test-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "one-sample t-test "
},
{
  "id": "sec-paired-data",
  "level": "1",
  "url": "sec-paired-data.html",
  "type": "Section",
  "number": "7.2",
  "title": "Paired Data",
  "body": " Paired Data   Sometimes data naturally come in pairs. For example, we might measure blood pressure before and after treatment for the same patients, or we might compare test scores for students who took both a pretest and a posttest. When data are paired, we analyze the differences within each pair rather than treating the two groups as independent.    Paired Observations and Samples     Paired data represent two sets of observations that are collected on the same units or on units that are meaningfully connected. In a paired analysis, we are interested in the difference for each pair of observations.    Examples of paired data:   Blood pressure measurements before and after medication for the same patients  Pre-test and post-test scores for the same students  Measurements on twins or siblings  Prices of textbooks at two different stores for the same titles    The key to identifying paired data: Can we meaningfully connect one observation in the first dataset to exactly one observation in the second dataset?     Inference for Paired Data  To analyze paired data, we:   Calculate the difference for each pair:  Treat these differences as a single sample  Apply one-sample t-procedures to the differences   Let represent the mean of the differences and represent the standard deviation of the differences. Then:   Confidence interval for :   Test statistic:  (when testing )   The conditions for paired t-procedures are the same as for one-sample t-procedures, applied to the differences:   Independence: The pairs must be independent of each other.  Normality: The differences should come from a nearly normal distribution, or the sample size should be large enough.    "
},
{
  "id": "def-paired-data",
  "level": "2",
  "url": "sec-paired-data.html#def-paired-data",
  "type": "Definition",
  "number": "7.2.1",
  "title": "",
  "body": "   Paired data represent two sets of observations that are collected on the same units or on units that are meaningfully connected. In a paired analysis, we are interested in the difference for each pair of observations.   "
},
{
  "id": "sec-difference-two-means",
  "level": "1",
  "url": "sec-difference-two-means.html",
  "type": "Section",
  "number": "7.3",
  "title": "Difference of Two Means",
  "body": " Difference of Two Means   We now consider a different scenario: comparing means from two independent groups. For example, we might compare average exam scores between students who attended review sessions and those who didn't, or compare average recovery times between patients receiving two different treatments.    Comparing Two Independent Means  When comparing two independent groups, we examine the difference in sample means: . This quantity estimates the difference in population means: .    For inference on the difference of two means, the following conditions should be met:   Independence: Within each group, observations must be independent. The two groups must also be independent of each other.  Normality: The data in each group should come from a nearly normal distribution, or each sample size should be sufficiently large.       Two-Sample -Procedures  The standard error for the difference of two independent sample means is:   The degrees of freedom calculation for the two-sample t-test is complex. Most software uses the Welch-Satterthwaite approximation. A conservative approach is to use .   Confidence interval for :     Test statistic for :     Two-Sample -Procedures   Prepare  Identify summary statistics for both groups and determine the parameter of interest.    Check  Verify independence within and between groups, and check the normality condition for each group.    Calculate  Compute the standard error and degrees of freedom. Calculate the confidence interval or test statistic as appropriate.    Conclude  Interpret the results in context.      Pooled Standard Deviation (Optional)  When we have strong reason to believe that the two populations have equal variances, we can use a pooled standard deviation to get a more precise estimate. The pooled standard deviation is:   The standard error becomes and the degrees of freedom is . However, this approach should only be used when the equal variance assumption is reasonable.   "
},
{
  "id": "def-two-sample-conditions",
  "level": "2",
  "url": "sec-difference-two-means.html#def-two-sample-conditions",
  "type": "Definition",
  "number": "7.3.1",
  "title": "",
  "body": "  For inference on the difference of two means, the following conditions should be met:   Independence: Within each group, observations must be independent. The two groups must also be independent of each other.  Normality: The data in each group should come from a nearly normal distribution, or each sample size should be sufficiently large.    "
},
{
  "id": "subsec-pooled-standard-deviation-2",
  "level": "2",
  "url": "sec-difference-two-means.html#subsec-pooled-standard-deviation-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pooled standard deviation "
},
{
  "id": "sec-power-calculations",
  "level": "1",
  "url": "sec-power-calculations.html",
  "type": "Section",
  "number": "7.4",
  "title": "Power Calculations for a Difference of Means",
  "body": " Power Calculations for a Difference of Means   When planning a study, researchers often want to know: How large should my sample be to detect a meaningful effect? This question relates to the concept of statistical power .    Understanding Statistical Power    The power of a hypothesis test is the probability that the test correctly rejects a false null hypothesis. In other words, it's the probability of detecting an effect when one truly exists.     Power depends on several factors:   The significance level  (lower means lower power)  The effect size (larger effects are easier to detect)  The sample size (larger samples provide more power)  The variability in the data (less variability means more power)   Researchers typically aim for a power of 0.80 or higher, meaning an 80% chance of detecting a true effect.    Sample Size Determination  Power calculations can be used to determine the necessary sample size for a study. The process involves specifying:   The desired significance level  The desired power (typically 0.80)  The minimum effect size you want to detect  An estimate of the population standard deviation   With these inputs, statistical software or formulas can calculate the required sample size for each group. Adequate planning using power calculations helps ensure studies are neither underpowered (unable to detect real effects) nor wastefully large.   "
},
{
  "id": "sec-power-calculations-2-1",
  "level": "2",
  "url": "sec-power-calculations.html#sec-power-calculations-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "statistical power "
},
{
  "id": "def-power",
  "level": "2",
  "url": "sec-power-calculations.html#def-power",
  "type": "Definition",
  "number": "7.4.1",
  "title": "",
  "body": "  The power of a hypothesis test is the probability that the test correctly rejects a false null hypothesis. In other words, it's the probability of detecting an effect when one truly exists.    "
},
{
  "id": "sec-anova",
  "level": "1",
  "url": "sec-anova.html",
  "type": "Section",
  "number": "7.5",
  "title": "Comparing Many Means with ANOVA",
  "body": " Comparing Many Means with ANOVA   Sometimes we want to compare means across more than two groups. For example, we might want to compare average test scores across four different teaching methods, or compare recovery times across three different treatments. When comparing multiple groups, we use Analysis of Variance (ANOVA) .    ANOVA Hypotheses and Conditions  Consider comparing groups with means . The hypotheses for ANOVA are:   : The mean outcome is the same across all groups.  : At least one mean is different from the others.      Conditions for ANOVA:    Independence: Observations must be independent within and across groups.  Normality: The data within each group should be approximately normal.  Equal variance: The variability should be roughly constant across groups.       The -Statistic  ANOVA uses the F-statistic to compare group means. The F-statistic is a ratio of two measures of variability:   where MSG is the mean square between groups and MSE is the mean square error (within groups).   If the null hypothesis is true (all means equal), we expect .  If at least one mean is different, we expect .  Large values of provide evidence against .     The F-distribution is a right-skewed distribution (starting at 0) used for ANOVA. It has two degrees of freedom parameters:   (degrees of freedom for groups, where is the number of groups)  (degrees of freedom for error, where is the total sample size)       The ANOVA Table  ANOVA results are typically summarized in an ANOVA table :   ANOVA Table Structure:     Source  Sum of Squares  df  Mean Square  F  p-value    Groups  SSG        Error  SSE        Total  SST          Multiple Comparisons and What ANOVA Doesn't Tell Us  When ANOVA gives a significant result, it tells us that at least one mean is different, but it doesn't tell us which means differ. To determine which specific groups differ, we need to conduct multiple comparisons or post-hoc tests .    Multiple Testing Problem: When conducting many pairwise comparisons, the chance of making at least one Type 1 error increases. Methods like the Bonferroni correction or Tukey's HSD help control this error rate.   A simple approach is the Bonferroni correction : If conducting tests, use as the significance level for each individual test to maintain an overall significance level of approximately .   "
},
{
  "id": "sec-anova-2-1",
  "level": "2",
  "url": "sec-anova.html#sec-anova-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Analysis of Variance (ANOVA) "
},
{
  "id": "def-anova-conditions",
  "level": "2",
  "url": "sec-anova.html#def-anova-conditions",
  "type": "Definition",
  "number": "7.5.1",
  "title": "",
  "body": "   Conditions for ANOVA:    Independence: Observations must be independent within and across groups.  Normality: The data within each group should be approximately normal.  Equal variance: The variability should be roughly constant across groups.    "
},
{
  "id": "subsec-f-statistic-2",
  "level": "2",
  "url": "sec-anova.html#subsec-f-statistic-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "F-statistic "
},
{
  "id": "subsec-f-statistic-4",
  "level": "2",
  "url": "sec-anova.html#subsec-f-statistic-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mean square between groups mean square error "
},
{
  "id": "def-f-distribution",
  "level": "2",
  "url": "sec-anova.html#def-f-distribution",
  "type": "Definition",
  "number": "7.5.2",
  "title": "",
  "body": "  The F-distribution is a right-skewed distribution (starting at 0) used for ANOVA. It has two degrees of freedom parameters:   (degrees of freedom for groups, where is the number of groups)  (degrees of freedom for error, where is the total sample size)    "
},
{
  "id": "subsec-anova-table-2",
  "level": "2",
  "url": "sec-anova.html#subsec-anova-table-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ANOVA table "
},
{
  "id": "subsec-multiple-comparisons-2",
  "level": "2",
  "url": "sec-anova.html#subsec-multiple-comparisons-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "multiple comparisons post-hoc tests "
},
{
  "id": "subsec-multiple-comparisons-3-1",
  "level": "2",
  "url": "sec-anova.html#subsec-multiple-comparisons-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Bonferroni correction Tukey's HSD "
},
{
  "id": "subsec-multiple-comparisons-4",
  "level": "2",
  "url": "sec-anova.html#subsec-multiple-comparisons-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Bonferroni correction "
},
{
  "id": "sec-ch06-review",
  "level": "1",
  "url": "sec-ch06-review.html",
  "type": "Section",
  "number": "7.6",
  "title": "Chapter 6 Review Exercises",
  "body": " Chapter 6 Review Exercises  This chapter introduced inference for numerical data using the t-distribution. Key concepts include:   The t-distribution and its properties  One-sample t-confidence intervals and hypothesis tests  Paired data analysis using differences  Two-sample t-procedures for comparing independent groups  Statistical power and sample size determination  ANOVA for comparing three or more means   Additional exercises for practicing these concepts are available in the accompanying exercise materials.  "
},
{
  "id": "sec-fitting-line-residuals-correlation",
  "level": "1",
  "url": "sec-fitting-line-residuals-correlation.html",
  "type": "Section",
  "number": "8.1",
  "title": "Fitting a line, residuals, and correlation",
  "body": " Fitting a line, residuals, and correlation   It's helpful to think deeply about the line fitting process. In this section, we define the form of a linear model, explore criteria for what makes a good fit, and introduce a new statistic called correlation .    Fitting a line to data  It is rare for all of the data to fall perfectly on a straight line. Instead, it's more common for data to appear as a cloud of points , where the data fall around a straight line, even if none of the observations fall exactly on the line. In cases where there is a clear relationship between the variables, we will have some uncertainty regarding our estimates of the model parameters.   Linear Model   Linear regression is the statistical method for fitting a line to data where the relationship between two variables, and , can be modeled by a straight line with some error: where:  and are the model's parameters  represents the error (epsilon)  is the explanatory variable or predictor  is the response variable  The parameters are estimated using data, and we write their point estimates as and . The fitted line is written as:      There are also cases where fitting a straight line to the data, even if there is a clear relationship between the variables, is not helpful. One such case is when the relationship is nonlinear , such as a curved relationship.     Residuals  Residuals are the leftovers from the model fit: the differences between the observed values and the values predicted by the line.   Residual   The residual of the observation is the difference between the observed ( ) and predicted ( ) response values: If an observation lands above the regression line, then its residual, the vertical distance from the observation to the line, is positive. Observations below the line have negative residuals.     Residual Plot  A residual plot is a scatterplot of the residuals ( ) on the vertical axis against the predictor variable ( ) on the horizontal axis. These plots are helpful in evaluating whether a linear model is appropriate.  Key features to look for:  Random scatter: Residuals should be randomly scattered around zero with no apparent pattern  Constant variance: The variability of residuals should be roughly constant across all values of  No curvature: A curved pattern suggests a nonlinear relationship       Correlation  Correlation measures the strength of the linear relationship between two numerical variables.   Correlation   The correlation coefficient , denoted by , describes the strength and direction of the linear relationship between two numerical variables. The correlation is calculated as: where and are the sample standard deviations of and , respectively.  Properties of correlation:  The correlation is always between -1 and 1:  indicates a perfect negative linear relationship  indicates no linear relationship  indicates a perfect positive linear relationship  Correlation does not imply causation  Correlation is sensitive to outliers  Correlation measures only linear relationships       "
},
{
  "id": "sec-fitting-line-residuals-correlation-2-1",
  "level": "2",
  "url": "sec-fitting-line-residuals-correlation.html#sec-fitting-line-residuals-correlation-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "correlation "
},
{
  "id": "subsec-fitting-line-to-data-2",
  "level": "2",
  "url": "sec-fitting-line-residuals-correlation.html#subsec-fitting-line-to-data-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cloud of points "
},
{
  "id": "def-linear-model",
  "level": "2",
  "url": "sec-fitting-line-residuals-correlation.html#def-linear-model",
  "type": "Definition",
  "number": "8.1.1",
  "title": "Linear Model.",
  "body": " Linear Model   Linear regression is the statistical method for fitting a line to data where the relationship between two variables, and , can be modeled by a straight line with some error: where:  and are the model's parameters  represents the error (epsilon)  is the explanatory variable or predictor  is the response variable  The parameters are estimated using data, and we write their point estimates as and . The fitted line is written as:    "
},
{
  "id": "subsec-fitting-line-to-data-4",
  "level": "2",
  "url": "sec-fitting-line-residuals-correlation.html#subsec-fitting-line-to-data-4",
  "type": "Note",
  "number": "8.1.2",
  "title": "",
  "body": " There are also cases where fitting a straight line to the data, even if there is a clear relationship between the variables, is not helpful. One such case is when the relationship is nonlinear , such as a curved relationship.  "
},
{
  "id": "def-residual",
  "level": "2",
  "url": "sec-fitting-line-residuals-correlation.html#def-residual",
  "type": "Definition",
  "number": "8.1.3",
  "title": "Residual.",
  "body": " Residual   The residual of the observation is the difference between the observed ( ) and predicted ( ) response values: If an observation lands above the regression line, then its residual, the vertical distance from the observation to the line, is positive. Observations below the line have negative residuals.   "
},
{
  "id": "assem-residual-plot-2",
  "level": "2",
  "url": "sec-fitting-line-residuals-correlation.html#assem-residual-plot-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "residual plot "
},
{
  "id": "def-correlation",
  "level": "2",
  "url": "sec-fitting-line-residuals-correlation.html#def-correlation",
  "type": "Definition",
  "number": "8.1.4",
  "title": "Correlation.",
  "body": " Correlation   The correlation coefficient , denoted by , describes the strength and direction of the linear relationship between two numerical variables. The correlation is calculated as: where and are the sample standard deviations of and , respectively.  Properties of correlation:  The correlation is always between -1 and 1:  indicates a perfect negative linear relationship  indicates no linear relationship  indicates a perfect positive linear relationship  Correlation does not imply causation  Correlation is sensitive to outliers  Correlation measures only linear relationships     "
},
{
  "id": "sec-least-squares-regression",
  "level": "1",
  "url": "sec-least-squares-regression.html",
  "type": "Section",
  "number": "8.2",
  "title": "Least squares regression",
  "body": " Least squares regression   We now introduce a method for finding the coefficients and that minimize the sum of the squared residuals. This approach is called the method of least squares .    The least squares criterion  The least squares line is the line that minimizes the sum of the squared residuals.   Least Squares Regression Line   The least squares regression line is the line that minimizes: The coefficients that accomplish this are: where is the correlation, and are the sample standard deviations, and and are the sample means of and , respectively.     Important Property  The least squares regression line always passes through the point , the point of averages.     Interpreting regression coefficients   Interpreting the Slope  The slope describes the estimated change in the response variable for a one-unit increase in the predictor variable .   Template: For each additional [unit of ], the model predicts an additional (or a decrease of) [units of ], on average.    Interpreting the Intercept  The intercept describes the estimated value of when .   Caution: The intercept is often not meaningful if is outside the range of the observed data. In such cases, the intercept serves mainly as an adjustment constant.     Coefficient of determination:   (R-squared)   The coefficient of determination , denoted , describes the proportion of variation in the response variable that is explained by the least squares line with predictor : where is the correlation between and .  Interpretation: represents the percentage of the variability in that can be explained by the linear relationship with . Values range from 0 to 1 (or 0% to 100%).      Conditions for least squares regression   Conditions for Least Squares Regression  For inference in regression, we check the following conditions:  Linearity: The relationship between and should be linear. Check this with a scatterplot of the data and\/or a residual plot.  Nearly normal residuals: The residuals should be nearly normally distributed. Check this with a histogram or normal probability plot of residuals.  Constant variability: The variability of points around the least squares line should be roughly constant. Check this with a residual plot.  Independent observations: The observations should be independent. Consider how the data were collected.      "
},
{
  "id": "sec-least-squares-regression-2-1",
  "level": "2",
  "url": "sec-least-squares-regression.html#sec-least-squares-regression-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "method of least squares "
},
{
  "id": "subsec-least-squares-criterion-2",
  "level": "2",
  "url": "sec-least-squares-regression.html#subsec-least-squares-criterion-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "least squares line "
},
{
  "id": "def-least-squares",
  "level": "2",
  "url": "sec-least-squares-regression.html#def-least-squares",
  "type": "Definition",
  "number": "8.2.1",
  "title": "Least Squares Regression Line.",
  "body": " Least Squares Regression Line   The least squares regression line is the line that minimizes: The coefficients that accomplish this are: where is the correlation, and are the sample standard deviations, and and are the sample means of and , respectively.   "
},
{
  "id": "subsec-least-squares-criterion-4",
  "level": "2",
  "url": "sec-least-squares-regression.html#subsec-least-squares-criterion-4",
  "type": "Note",
  "number": "8.2.2",
  "title": "Important Property.",
  "body": " Important Property  The least squares regression line always passes through the point , the point of averages.  "
},
{
  "id": "def-r-squared",
  "level": "2",
  "url": "sec-least-squares-regression.html#def-r-squared",
  "type": "Definition",
  "number": "8.2.3",
  "title": "<span class=\"process-math\">\\(R^2\\)<\/span> (R-squared).",
  "body": " (R-squared)   The coefficient of determination , denoted , describes the proportion of variation in the response variable that is explained by the least squares line with predictor : where is the correlation between and .  Interpretation: represents the percentage of the variability in that can be explained by the linear relationship with . Values range from 0 to 1 (or 0% to 100%).   "
},
{
  "id": "sec-outliers-in-regression",
  "level": "1",
  "url": "sec-outliers-in-regression.html",
  "type": "Section",
  "number": "8.3",
  "title": "Types of outliers in linear regression",
  "body": " Types of outliers in linear regression  In linear regression, we need to be aware of unusual observations that may influence the regression line or our interpretation of it.   Outlier   An outlier in regression is a point that does not fit the overall pattern of the data. It has a large residual.     High Leverage Point   A point is said to have high leverage if it is extreme in the direction. Points with high leverage have the potential to influence the slope of the regression line.     Influential Point   An influential point is a point that, if removed, would substantially change the slope of the regression line. Influential points typically have both high leverage and are outliers.     Dealing with Unusual Observations  When encountering unusual observations:  Investigate whether there is an error in data entry or measurement  Consider whether the observation belongs to a different population  Assess the impact on the regression by fitting the model with and without the point  Report findings both with and without influential points when appropriate     "
},
{
  "id": "def-outlier-in-regression",
  "level": "2",
  "url": "sec-outliers-in-regression.html#def-outlier-in-regression",
  "type": "Definition",
  "number": "8.3.1",
  "title": "Outlier.",
  "body": " Outlier   An outlier in regression is a point that does not fit the overall pattern of the data. It has a large residual.   "
},
{
  "id": "def-leverage",
  "level": "2",
  "url": "sec-outliers-in-regression.html#def-leverage",
  "type": "Definition",
  "number": "8.3.2",
  "title": "High Leverage Point.",
  "body": " High Leverage Point   A point is said to have high leverage if it is extreme in the direction. Points with high leverage have the potential to influence the slope of the regression line.   "
},
{
  "id": "def-influential-point",
  "level": "2",
  "url": "sec-outliers-in-regression.html#def-influential-point",
  "type": "Definition",
  "number": "8.3.3",
  "title": "Influential Point.",
  "body": " Influential Point   An influential point is a point that, if removed, would substantially change the slope of the regression line. Influential points typically have both high leverage and are outliers.   "
},
{
  "id": "sec-outliers-in-regression-6",
  "level": "2",
  "url": "sec-outliers-in-regression.html#sec-outliers-in-regression-6",
  "type": "Note",
  "number": "8.3.4",
  "title": "Dealing with Unusual Observations.",
  "body": " Dealing with Unusual Observations  When encountering unusual observations:  Investigate whether there is an error in data entry or measurement  Consider whether the observation belongs to a different population  Assess the impact on the regression by fitting the model with and without the point  Report findings both with and without influential points when appropriate    "
},
{
  "id": "sec-inference-for-regression",
  "level": "1",
  "url": "sec-inference-for-regression.html",
  "type": "Section",
  "number": "8.4",
  "title": "Inference for linear regression",
  "body": " Inference for linear regression   Just as we performed inference for means and proportions, we can perform inference for the slope and intercept of a regression line.    Understanding the regression model  When we fit a regression line to data, we are estimating the true population regression line: where . Our estimates and are point estimates of the true parameters and .    Standard error of the slope   Standard Error of the Slope   The standard error of the slope  is given by: where is the residual standard error :       Hypothesis test for the slope   Hypothesis Test for  To test whether there is a linear relationship between and :  (no linear relationship)  (linear relationship exists)  Test statistic: with degrees of freedom , where is the number of observations.     Confidence interval for the slope   Confidence Interval for  A confidence interval for the true slope can be constructed as: where is the critical value from the -distribution with degrees of freedom.     Prediction intervals  A confidence interval for the average response differs from a prediction interval for an individual response.   Prediction Interval vs Confidence Interval    Confidence interval for the mean response: An interval estimate for the average value of at a particular value . This interval is narrower.  Prediction interval for an individual response: An interval estimate for a single new observation's value of at . This interval is wider because it accounts for both the uncertainty in estimating the mean and the variability of individual observations.      "
},
{
  "id": "def-se-slope",
  "level": "2",
  "url": "sec-inference-for-regression.html#def-se-slope",
  "type": "Definition",
  "number": "8.4.1",
  "title": "Standard Error of the Slope.",
  "body": " Standard Error of the Slope   The standard error of the slope  is given by: where is the residual standard error :    "
},
{
  "id": "sec-ch08-review",
  "level": "1",
  "url": "sec-ch08-review.html",
  "type": "Section",
  "number": "8.5",
  "title": "Chapter 8 Review",
  "body": " Chapter 8 Review   This chapter introduced simple linear regression, a powerful tool for modeling the relationship between two numerical variables. Key concepts include:    The linear model:  Residuals and residual plots for assessing model fit  Correlation as a measure of linear association  Least squares method for finding the best-fitting line  Coefficient of determination ( ) for quantifying model performance  Conditions for regression: linearity, normal residuals, constant variance, independence  Outliers, leverage points, and influential observations  Inference for the slope: hypothesis tests and confidence intervals  Prediction intervals for future observations      Practice Exercises    Describe what the correlation coefficient measures and list three important properties of correlation.      Explain the difference between an outlier, a high leverage point, and an influential point in regression analysis.      What are the four conditions that should be checked before performing inference in linear regression?      If the correlation between two variables is , what proportion of the variation in is explained by the linear relationship with ?     "
},
{
  "id": "sec-ch08-review-3-2",
  "level": "2",
  "url": "sec-ch08-review.html#sec-ch08-review-3-2",
  "type": "Exercise",
  "number": "8.5.1",
  "title": "",
  "body": "  Describe what the correlation coefficient measures and list three important properties of correlation.   "
},
{
  "id": "sec-ch08-review-3-3",
  "level": "2",
  "url": "sec-ch08-review.html#sec-ch08-review-3-3",
  "type": "Exercise",
  "number": "8.5.2",
  "title": "",
  "body": "  Explain the difference between an outlier, a high leverage point, and an influential point in regression analysis.   "
},
{
  "id": "sec-ch08-review-3-4",
  "level": "2",
  "url": "sec-ch08-review.html#sec-ch08-review-3-4",
  "type": "Exercise",
  "number": "8.5.3",
  "title": "",
  "body": "  What are the four conditions that should be checked before performing inference in linear regression?   "
},
{
  "id": "sec-ch08-review-3-5",
  "level": "2",
  "url": "sec-ch08-review.html#sec-ch08-review-3-5",
  "type": "Exercise",
  "number": "8.5.4",
  "title": "",
  "body": "  If the correlation between two variables is , what proportion of the variation in is explained by the linear relationship with ?   "
},
{
  "id": "sec-multiple-regression-intro",
  "level": "1",
  "url": "sec-multiple-regression-intro.html",
  "type": "Section",
  "number": "9.1",
  "title": "Introduction to Multiple Regression",
  "body": " Introduction to Multiple Regression   Multiple regression extends simple two-variable regression to the case that still has one response but many predictors (denoted ). The method is motivated by scenarios where many variables may be simultaneously connected to an output.    Indicator and Categorical Variables as Predictors  In multiple regression, we can include both quantitative and categorical variables as predictors. Indicator variables (also called dummy variables) allow us to include categorical information in a linear regression model.  An indicator variable takes a value of 1 when the condition is true and 0 when it is false. For a categorical variable with more than two levels, we create multiple indicator variables, one for each level except one. The omitted level is called the reference level .    Consider a categorical variable such as income verification status with three levels: verified, source only, and not verified. In a regression model, we would create two indicator variables, leaving one level as the reference.      Multiple Regression Equation  The multiple regression model with predictors is: where is the intercept and are the slopes for each predictor.  The interpretation of is: for each one-unit increase in , we expect to increase by units, holding all other predictors constant.    Interpreting Coefficients  The key to interpreting multiple regression coefficients is the phrase holding all other variables constant. This is important because in the real world, variables are often correlated, but multiple regression allows us to isolate the effect of each variable.    In multiple regression, the coefficient for predictor represents the expected change in the response variable for a one-unit increase in , while holding all other predictors constant.     "
},
{
  "id": "subsec-indicator-categorical-predictors-3",
  "level": "2",
  "url": "sec-multiple-regression-intro.html#subsec-indicator-categorical-predictors-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "indicator variable reference level "
},
{
  "id": "ex-indicator-variable",
  "level": "2",
  "url": "sec-multiple-regression-intro.html#ex-indicator-variable",
  "type": "Example",
  "number": "9.1.1",
  "title": "",
  "body": "  Consider a categorical variable such as income verification status with three levels: verified, source only, and not verified. In a regression model, we would create two indicator variables, leaving one level as the reference.   "
},
{
  "id": "def-coefficient-interpretation",
  "level": "2",
  "url": "sec-multiple-regression-intro.html#def-coefficient-interpretation",
  "type": "Definition",
  "number": "9.1.2",
  "title": "",
  "body": "  In multiple regression, the coefficient for predictor represents the expected change in the response variable for a one-unit increase in , while holding all other predictors constant.   "
},
{
  "id": "sec-model-selection",
  "level": "1",
  "url": "sec-model-selection.html",
  "type": "Section",
  "number": "9.2",
  "title": "Model Selection",
  "body": " Model Selection   With multiple regression, we have the flexibility to include many predictors, but we must decide which variables to include in our model. Including too many variables can lead to overfitting, while including too few may leave out important information.    R-squared and Adjusted R-squared  Recall that represents the proportion of variation in the response variable that is explained by the predictors. However, increases whenever we add a new variable, even if that variable is not truly helpful.     Adjusted R-squared is a modified version of that accounts for the number of predictors in the model: where is the number of observations and is the number of predictors.    Adjusted can decrease if we add a variable that does not improve the model sufficiently to offset the penalty for adding parameters.    Variable Selection Strategies  Several approaches exist for selecting which variables to include in a multiple regression model:     Backward elimination: Start with all variables and remove the least significant one at each step.     Forward selection: Start with no variables and add the most significant one at each step.     Stepwise selection: A combination of forward and backward approaches.     Best subset selection: Evaluate all possible combinations of predictors.     "
},
{
  "id": "def-adjusted-r-squared",
  "level": "2",
  "url": "sec-model-selection.html#def-adjusted-r-squared",
  "type": "Definition",
  "number": "9.2.1",
  "title": "",
  "body": "   Adjusted R-squared is a modified version of that accounts for the number of predictors in the model: where is the number of observations and is the number of predictors.   "
},
{
  "id": "subsec-variable-selection-3-1-1",
  "level": "2",
  "url": "sec-model-selection.html#subsec-variable-selection-3-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Backward elimination: "
},
{
  "id": "subsec-variable-selection-3-2-1",
  "level": "2",
  "url": "sec-model-selection.html#subsec-variable-selection-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Forward selection: "
},
{
  "id": "subsec-variable-selection-3-3-1",
  "level": "2",
  "url": "sec-model-selection.html#subsec-variable-selection-3-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Stepwise selection: "
},
{
  "id": "subsec-variable-selection-3-4-1",
  "level": "2",
  "url": "sec-model-selection.html#subsec-variable-selection-3-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Best subset selection: "
},
{
  "id": "sec-model-assumptions",
  "level": "1",
  "url": "sec-model-assumptions.html",
  "type": "Section",
  "number": "9.3",
  "title": "Checking Model Assumptions",
  "body": " Checking Model Assumptions   Like simple linear regression, multiple regression relies on several key assumptions. We can check these assumptions using residual plots and other diagnostic tools.    Residual Diagnostics  The residuals (observed values minus predicted values) should:    Be approximately normally distributed    Have constant variance (homoscedasticity)    Show no patterns when plotted against fitted values    Be independent of each other    We can assess these assumptions using:    Scatter plots of residuals vs. fitted values    Q-Q plots for normality    Histograms of residuals    Scale-location plots for constant variance     "
},
{
  "id": "sec-regression-case-study",
  "level": "1",
  "url": "sec-regression-case-study.html",
  "type": "Section",
  "number": "9.4",
  "title": "Case Study: Mario Kart",
  "body": " Case Study: Mario Kart  A case study on the relationship between various characteristics of Mario Kart video game items and their prices on the auction website eBay demonstrates the principles of multiple regression in practice.   The Data  The dataset includes information about completed eBay auctions of Mario Kart games, with variables such as:   Price (response variable)  Condition of the item (new vs. used)  Game system (Wii, Nintendo 64, etc.)  Number of wheels\/characters included  Auction duration     Model Development  We can build a multiple regression model to predict Mario Kart prices, starting with all reasonable predictors and using model selection techniques to arrive at a final model.   "
},
{
  "id": "sec-logistic-regression",
  "level": "1",
  "url": "sec-logistic-regression.html",
  "type": "Section",
  "number": "9.5",
  "title": "Introduction to Logistic Regression",
  "body": " Introduction to Logistic Regression   When the response variable is binary (two categories), linear regression is not appropriate because it can produce predicted values outside the range [0, 1]. Logistic regression is designed specifically for binary response variables.    The Logistic Function  The logistic function provides a smooth curve that constrains predictions to be between 0 and 1:   This ensures that predicted probabilities are always between 0 and 1, which is crucial for modeling probabilities.    Odds and Log-Odds    The odds of an event occurring are defined as: where is the probability of the event.    The log-odds (also called the logit) is the natural logarithm of the odds:   The relationship between and the log-odds is linear, which makes logistic regression a natural extension of multiple linear regression.    Interpreting Logistic Regression Coefficients  The coefficient in logistic regression represents the change in log-odds for a one-unit increase in . We can interpret this more intuitively by exponentiating:    The odds ratio is , which represents the multiplicative change in odds for a one-unit increase in .      Inference in Logistic Regression  We can perform hypothesis tests and construct confidence intervals for logistic regression coefficients using the standard error of the estimate. The test statistic follows a normal distribution for large samples.   "
},
{
  "id": "def-odds",
  "level": "2",
  "url": "sec-logistic-regression.html#def-odds",
  "type": "Definition",
  "number": "9.5.1",
  "title": "",
  "body": "  The odds of an event occurring are defined as: where is the probability of the event.   "
},
{
  "id": "subsec-odds-log-odds-3",
  "level": "2",
  "url": "sec-logistic-regression.html#subsec-odds-log-odds-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "log-odds "
},
{
  "id": "def-odds-ratio",
  "level": "2",
  "url": "sec-logistic-regression.html#def-odds-ratio",
  "type": "Definition",
  "number": "9.5.2",
  "title": "",
  "body": "  The odds ratio is , which represents the multiplicative change in odds for a one-unit increase in .   "
},
{
  "id": "sec-ch09-review",
  "level": "1",
  "url": "sec-ch09-review.html",
  "type": "Section",
  "number": "9.6",
  "title": "Chapter Review",
  "body": " Chapter Review   Summary  In this chapter, we extended regression methods to handle multiple predictors and binary response variables. Key concepts include:    Multiple regression allows us to model relationships with multiple predictors    Adjusted R-squared helps balance model complexity with explanatory power    Residual diagnostics are essential for checking model assumptions    Logistic regression is appropriate when the response is binary    Odds ratios provide an intuitive way to interpret logistic regression coefficients      Terms  Adjusted R-squared, Backward elimination, Forward selection, Indicator variable, Logistic function, Logistic regression, Log-odds, Multiple regression, Odds ratio, Reference level, Residual diagnostics, Stepwise selection, Variable selection   "
},
{
  "id": "solutions-ch01",
  "level": "1",
  "url": "solutions-ch01.html",
  "type": "Section",
  "number": "A.1",
  "title": "Introduction to Data",
  "body": " Introduction to Data   Exercise 1    Treatment: .  Control: .  A higher percentage of patients in the treatment group were pain free 24 hours after receiving acupuncture.  It is possible that the observed difference between the two group percentages is due to chance.      Exercise 3    Is there an association between air pollution exposure and preterm births?  143,196 births in Southern California between 1989 and 1993.  Measurements of carbon monoxide, nitrogen dioxide, ozone, and particulate matter less than (PM ) collected at air-quality-monitoring stations as well as length of gestation. Continuous numerical variables.      Exercise 5    Does explicitly telling children not to cheat affect their likelihood to cheat?  160 children between the ages of 5 and 15.  Four variables: (1) age (numerical, continuous), (2) sex (categorical), (3) whether they were an only child or not (categorical), (4) whether they cheated or not (categorical).      Exercise 7  Explanatory: acupuncture or not. Response: if the patient was pain free or not.    Exercise 9    .  Four continuous numerical variables: sepal length, sepal width, petal length, and petal width.  One categorical variable, species, with three levels: setosa , versicolor , and virginica .      Exercise 11    Airport ownership status (public\/private), airport usage status (public\/private), latitude, and longitude.  Airport ownership status: categorical, not ordinal. Airport usage status: categorical, not ordinal. Latitude: numerical, continuous. Longitude: numerical, continuous.      Exercise 13    Population: all births, sample: 143,196 births between 1989 and 1993 in Southern California.  If births in this time span at the geography can be considered to be representative of all births, then the results are generalizable to the population of Southern California. However, since the study is observational the findings cannot be used to establish causal relationships.      Exercise 15    Population: all asthma patients aged 18-69 who rely on medication for asthma treatment. Sample: 600 such patients.  If the patients in this sample, who are likely not randomly sampled, can be considered to be representative of all asthma patients aged 18-69 who rely on medication for asthma treatment, then the results are generalizable to the population defined above. Additionally, since the study is experimental, the findings can be used to establish causal relationships.      Exercise 17    Observation.  Variable.  Sample statistic (mean).  Population parameter (mean).      Exercise 19    Observational.  Use stratified sampling to randomly sample a fixed number of students, say 10, from each section for a total sample size of 40 students.      Note: Additional solutions for Chapter 1 exercises 21-43 would continue here in the complete version.   "
},
{
  "id": "solutions-ch02",
  "level": "1",
  "url": "solutions-ch02.html",
  "type": "Section",
  "number": "A.2",
  "title": "Summarizing Data",
  "body": " Summarizing Data   Exercise 1    Positive association: mammals with longer gestation periods tend to live longer as well.  Association would still be positive.  No, they are not independent. See part (a).      Exercise 5    Population mean, ; sample mean, .  Population mean, ; sample mean, .      Exercise 7  Any 10 employees whose average number of days off is between the minimum and the mean number of days off for the entire workforce at this plant.    Exercise 9    Dist 2 has a higher mean since , and a higher standard deviation since 20 is further from the rest of the data than 13.  Dist 1 has a higher mean since , and Dist 2 has a higher standard deviation since -40 is farther away from the rest of the data than -20.  Dist 2 has a higher mean since all values in this distribution are higher than those in Dist 1, but both distributions have the same standard deviation since they are equally variable around their respective means.  Both distributions have the same mean since they're both centered at 300, but Dist 2 has a higher standard deviation since the observations are farther from the mean than in Dist 1.      Exercise 11    About 30.  Since the distribution is right skewed the mean is higher than the median.  Q1: between 15 and 20, Q3: between 35 and 40, IQR: about 20.  Values that are considered to be unusually low or high lie more than away from the quartiles. Upper fence: ; Lower fence: ; The lowest AQI recorded is not lower than 5 and the highest AQI recorded is not higher than 65, which are both within the fences. Therefore none of the days in this sample would be considered to have an unusually low or high AQI.      Note: Additional solutions for Chapter 2 exercises 13-33 would continue here in the complete version.   "
},
{
  "id": "solutions-ch03",
  "level": "1",
  "url": "solutions-ch03.html",
  "type": "Section",
  "number": "A.3",
  "title": "Probability",
  "body": " Probability   Exercise 1    False. These are independent trials.  False. There are red face cards.  True. A card cannot be both a face card and an ace.      Exercise 3    10 tosses. Fewer tosses mean more variability in the sample fraction of heads, meaning there's a better chance of getting at least 60% heads.  100 tosses. More flips means the observed proportion of heads would often be closer to the average, 0.50, and therefore also above 0.40.  100 tosses. With more flips, the observed proportion of heads would often be closer to the average, 0.50.  10 tosses. Fewer flips would increase variability in the fraction of tosses that are heads.      Exercise 5    = 0.00098.  = 0.00098.  .      Exercise 7    No, there are voters who are both independent and swing voters.  Venn diagram would show two overlapping circles for \"Independent\" and \"Swing\" voters, with 24% only Independent, 12% only Swing, and 11% both.  Each Independent voter is either a swing voter or not. Since 35% of voters are Independents and 11% are both Independent and swing voters, the other 24% must not be swing voters.  0.47.      Note: Additional solutions for Chapter 3 exercises 9-41 would continue here in the complete version.   "
},
{
  "id": "solutions-ch04",
  "level": "1",
  "url": "solutions-ch04.html",
  "type": "Section",
  "number": "A.4",
  "title": "Distributions of Random Variables",
  "body": " Distributions of Random Variables   Note: Solutions for Chapter 4 exercises would be included here in the complete version.   "
},
{
  "id": "solutions-ch05",
  "level": "1",
  "url": "solutions-ch05.html",
  "type": "Section",
  "number": "A.5",
  "title": "Foundations for Inference",
  "body": " Foundations for Inference   Note: Solutions for Chapter 5 exercises would be included here in the complete version.   "
},
{
  "id": "solutions-ch06",
  "level": "1",
  "url": "solutions-ch06.html",
  "type": "Section",
  "number": "A.6",
  "title": "Inference for Categorical Data",
  "body": " Inference for Categorical Data   Note: Solutions for Chapter 6 exercises would be included here in the complete version.   "
},
{
  "id": "solutions-ch07",
  "level": "1",
  "url": "solutions-ch07.html",
  "type": "Section",
  "number": "A.7",
  "title": "Inference for Numerical Data",
  "body": " Inference for Numerical Data   Note: Solutions for Chapter 7 exercises would be included here in the complete version.   "
},
{
  "id": "solutions-ch08",
  "level": "1",
  "url": "solutions-ch08.html",
  "type": "Section",
  "number": "A.8",
  "title": "Introduction to Linear Regression",
  "body": " Introduction to Linear Regression   Note: Solutions for Chapter 8 exercises would be included here in the complete version.   "
},
{
  "id": "solutions-ch09",
  "level": "1",
  "url": "solutions-ch09.html",
  "type": "Section",
  "number": "A.9",
  "title": "Multiple and Logistic Regression",
  "body": " Multiple and Logistic Regression   Note: Solutions for Chapter 9 exercises would be included here in the complete version.   "
},
{
  "id": "data-ch01",
  "level": "1",
  "url": "data-ch01.html",
  "type": "Section",
  "number": "B.1",
  "title": "Introduction to Data",
  "body": " Introduction to Data    stent30, stent365  The stent data is split across two data sets, one for days 0-30 results and one for days 0-365 results.  Chimowitz MI, Lynn MJ, Derdeyn CP, et al. 2011. Stenting versus Aggressive Medical Therapy for Intracranial Arterial Stenosis. New England Journal of Medicine 365:993-1003. Article . NY Times article: Coverage .    loan50, loans_full_schema  This data comes from Lending Club ( lendingclub.com ), which provides a large set of data on the people who received loans through their platform. The data used in the textbook comes from a sample of the loans made in Q1 (Jan, Feb, March) 2018.    county, county_complete  These data come from several government sources. For those variables included in the county data set, only the most recent data is reported, as of what was available in late 2018. Data prior to 2011 is all from census.gov , where the specific Quick Facts page providing the data is no longer available. The more recent data comes from USDA (ers.usda.gov) , Bureau of Labor Statistics (bls.gov\/lau) , SAIPE (census.gov\/did\/www\/saipe) , and American Community Survey (census.gov\/programs-surveys\/acs) .    Nurses' Health Study  For more information on this data set, see www.channing.harvard.edu\/nhs     Anturane Reinfarction Trial  The study we had in mind when discussing the simple randomization (no blocking) study was Anturane Reinfarction Trial Research Group. 1980. Sulfinpyrazone in the prevention of sudden death after myocardial infarction. New England Journal of Medicine 302(5):250-256.    "
},
{
  "id": "data-ch02",
  "level": "1",
  "url": "data-ch02.html",
  "type": "Section",
  "number": "B.2",
  "title": "Summarizing Data",
  "body": " Summarizing Data    loan50, county  These data sets are described in the Introduction to Data section .    malaria  Lyke et al. 2017. PfSPZ vaccine induces strain-transcending T cells and durable protection against heterologous controlled human malaria infection. PNAS 114(10):2711-2716. Article     "
},
{
  "id": "data-ch03",
  "level": "1",
  "url": "data-ch03.html",
  "type": "Section",
  "number": "B.3",
  "title": "Probability",
  "body": " Probability    loan50, county  These data sets are described in the Introduction to Data section .    playing_cards  Data set describing the 52 cards in a standard deck.    family_college  Simulated data based on real population summaries at nces.ed.gov\/pubs2001\/2001126.pdf .    smallpox  Fenner F. 1988. Smallpox and Its Eradication (History of International Public Health, No. 6). Geneva: World Health Organization. ISBN 92-4-156110-6.    Mammogram screening, probabilities  The probabilities reported were obtained using studies reported at www.breastcancer.org and www.ncbi.nlm.nih.gov\/pmc\/articles\/PMC1173421 .    Jose campus visits, probabilities  This example was made up.    Course material purchases and probabilities  This example was made up.    Auctions for TV and toaster  This example was made up.    stocks_18  Monthly returns for Caterpillar, Exxon Mobil Corp, and Google for November 2015 to October 2018.    fcid  This sample can be considered a simple random sample from the US population. It relies on the USDA Food Commodity Intake Database.    "
},
{
  "id": "data-ch04",
  "level": "1",
  "url": "data-ch04.html",
  "type": "Section",
  "number": "B.4",
  "title": "Distributions",
  "body": " Distributions    SAT and ACT score distributions  The SAT score data comes from the 2018 distribution, which is provided at College Board Report . The ACT score data is available at ACT Report . We also acknowledge that the actual ACT score distribution is not nearly normal. However, since the topic is very accessible, we decided to keep the context and examples.    Male heights  The distribution is based on the USDA Food Commodity Intake Database.    possum  The distribution parameters are based on a sample of possums from Australia and New Guinea. The original source of this data is as follows. Lindenmayer DB, et al. 1995. Morphological variation among colonies of the mountain brushtail possum, Trichosurus caninus Ogilby (Phalangeridae: Marsupiala) . Australian Journal of Zoology 43: 449-458.    Exceeding insurance deductible  These statistics were made up but are possible values one might observe for low-deductible plans.    Smoking friends  Unfortunately, we don't currently have additional information on the source for the 30% statistic, so don't consider this one as fact since we cannot verify it was from a reputable source.    US smoking rate  The 15% smoking rate in the US figure is close to the value from the Centers for Disease Control and Prevention website, which reports a value of 14% as of the 2017 estimate: CDC Report     Football kicker  This example was made up.    Heart attack admissions  This example was made up, though the heart attack admissions are realistic for some hospitals.    ami_occurrences  This is a simulated data set but resembles actual AMI data for New York City based on typical AMI incidence rates.    "
},
{
  "id": "data-ch05",
  "level": "1",
  "url": "data-ch05.html",
  "type": "Section",
  "number": "B.5",
  "title": "Foundations for Inference",
  "body": " Foundations for Inference    pew_energy_2018  The actual data has more observations than were referenced in this chapter. That is, we used a subsample since it helped smooth some of the examples to have a bit more variability. The pew_energy_2018 data set represents the full data set for each of the different energy source questions, which covers solar, wind, offshore drilling, hydraulic fracturing, and nuclear energy. The statistics used to construct the data are from the following page: Pew Research Report     ebola_survey  In New York City on October 23rd, 2014, a doctor who had recently been treating Ebola patients in Guinea went to the hospital with a slight fever and was subsequently diagnosed with Ebola. Soon thereafter, an NBC 4 New York\/The Wall Street Journal\/Marist Poll found that 82% of New Yorkers favored a \"mandatory 21-day quarantine for anyone who has come in contact with an Ebola patient\". This poll included responses of 1,042 New York adults between Oct 26th and 28th, 2014. Poll ID NY141026 on maristpoll.marist.edu.    Rosling questions  We noted much smaller samples than the Roslings' describe in their book, Factfulness . The samples we describe are similar but not the same as the actual rates. For more information, check out the book, Factfulness .    nuclear_survey  A simple random sample of 1,028 US adults in March 2013 found that 56% of US adults support nuclear arms reduction. Gallup Poll     Car manufacturing  This example was made up.    stent30, stent365  These data sets are described in the Introduction to Data section .    "
},
{
  "id": "data-ch06",
  "level": "1",
  "url": "data-ch06.html",
  "type": "Section",
  "number": "B.6",
  "title": "Inference for Proportions",
  "body": " Inference for Proportions    Payday loans  The statistics come from the following source: Pew Trusts Report     Tire factory  This example was made up.    cpr  Böttiger et al. Efficacy and safety of thrombolytic therapy after initially unsuccessful cardiopulmonary resuscitation: a prospective clinical trial . The Lancet, 2001.    fish_oil_18  Manson JE, et al. 2018. Marine n-3 Fatty Acids and Prevention of Cardiovascular Disease and Cancer. NEJMoa1811403.    mammogram  Miller AB. 2014. Twenty five year follow-up for breast cancer incidence and mortality of the Canadian National Breast Screening Study: randomised screening trial . BMJ 2014;348:g366.    drone_blades  The quality control data set for quadcopter drone blades is a made-up data set for an example. We provide the simulated data in the drone_blades data set.    jury  The jury data set for examining discrimination is a made-up data set for an example. We provide the simulated data in the jury data set.    sp500_1950_2018  Data is sourced from finance.yahoo.com .    ask  Minson JA, Ruedy NE, Schweitzer ME. There is such a thing as a stupid question: Question disclosure in strategic communication . Available at opim.wharton.upenn.edu\/DPlab\/papers\/workingPapers.    diabetes2  Zeitler P, et al. 2012. A Clinical Trial to Maintain Glycemic Control in Youth with Type 2 Diabetes . N Engl J Med.    "
},
{
  "id": "data-ch07",
  "level": "1",
  "url": "data-ch07.html",
  "type": "Section",
  "number": "B.7",
  "title": "Inference for Means",
  "body": " Inference for Means    Risso's dolphins  Endo T and Haraguchi K. 2009. High mercury levels in hair samples from residents of Taiji, a Japanese whaling town . Marine Pollution Bulletin 60(5):743-747.  Taiji was featured in the movie The Cove , and it is a significant source of dolphin and whale meat in Japan. Thousands of dolphins pass through the Taiji area annually, and we assume these 19 dolphins reasonably represent a simple random sample from those dolphins.    Croaker white fish  Source: FDA Mercury in Fish     run17  Source: www.cherryblossom.org     textbooks, ucla_textbooks_f18  Data were collected by OpenIntro staff in 2010 and again in 2018. For the 2018 sample, we sampled 201 UCLA courses. Of those, 68 required books that could be found on Amazon.    stem_cells  Menard C, et al. 2005. Transplantation of cardiac-committed mouse embryonic stem cells to infarcted sheep myocardium: a preclinical study. The Lancet: 366:9490, p1005-1012.    ncbirths  Birth records released by North Carolina in 2004. Unfortunately, we don't currently have additional information on the source for this data set.    Exam versions  This example was made up.    Blood pressure statistics  The blood pressure standard deviation for patients with blood pressure ranging from 140 to 180 mmHg is guessed and may be a little (but likely not dramatically) imprecise from what we'd observe in actual data.    toy_anova  Data used for toy ANOVA example, where this data was made up.    mlb_players_18  Data were retrieved from mlb.mlb.com\/stats . Only players with at least 100 at bats were considered during the analysis.    classdata  This example was made up.    "
},
{
  "id": "data-ch08",
  "level": "1",
  "url": "data-ch08.html",
  "type": "Section",
  "number": "B.8",
  "title": "Simple Linear Regression",
  "body": " Simple Linear Regression    simulated_scatter  Fake data used for various plots and examples throughout the chapter.    possum  This data set is described in the Distributions section .    elmhurst  These data were sampled from a table of data for all freshman from the 2011 class at Elmhurst College that accompanied an article titled What Students Really Pay to Go to College published online by The Chronicle of Higher Education : Article Link .    mariokart  Auction data from Ebay (ebay.com) for the game Mario Kart for the Nintendo Wii. This data set was collected in early October, 2009.    midterms_house  Data was retrieved from Wikipedia.    "
},
{
  "id": "data-ch09",
  "level": "1",
  "url": "data-ch09.html",
  "type": "Section",
  "number": "B.9",
  "title": "Multiple and Logistic Regression",
  "body": " Multiple and Logistic Regression    loans_full_schema  This data set is described in the Introduction to Data section .    mariokart  This data set is described in the Simple Linear Regression section .    resume  Bertrand M, Mullainathan S. 2004. Are Emily and Greg More Employable than Lakisha and Jamal? A Field Experiment on Labor Market Discrimination . The American Economic Review 94:4 (991-1013). www.nber.org\/papers\/w9873   We did omit discussion of some structure in the data for the analysis presented: the experiment design included blocking, where typically four resumes were sent to each job: one for each inferred race\/sex combination (as inferred based on the first name). We did not worry about this blocking aspect, since accounting for the blocking would reduce the standard error without notably changing the point estimates for the race and sex variables versus the analysis performed in the section. That is, the most interesting conclusions in the study are unaffected even when completing a more sophisticated analysis.    "
},
{
  "id": "normal-probability-table",
  "level": "1",
  "url": "normal-probability-table.html",
  "type": "Section",
  "number": "C.1",
  "title": "Normal Probability Table",
  "body": " Normal Probability Table  A normal probability table may be used to find percentiles of a normal distribution using a Z-score, or vice-versa. Such a table lists Z-scores and the corresponding percentiles.  When using a normal probability table to find a percentile for (rounded to two decimals), identify the proper row in the normal probability table up through the first decimal, and then determine the column representing the second decimal value. The intersection of this row and column is the percentile of the observation. For instance, the percentile of is shown in row and column : 0.6736, or the percentile.   Normal Probability Table for Positive Z-scores    Z  0.00  0.01  0.02  0.03  0.04  0.05  0.06  0.07  0.08  0.09    0.0  0.5000  0.5040  0.5080  0.5120  0.5160  0.5199  0.5239  0.5279  0.5319  0.5359    0.1  0.5398  0.5438  0.5478  0.5517  0.5557  0.5596  0.5636  0.5675  0.5714  0.5753    0.2  0.5793  0.5832  0.5871  0.5910  0.5948  0.5987  0.6026  0.6064  0.6103  0.6141    0.3  0.6179  0.6217  0.6255  0.6293  0.6331  0.6368  0.6406  0.6443  0.6480  0.6517    0.4  0.6554  0.6591  0.6628  0.6664  0.6700  0.6736  0.6772  0.6808  0.6844  0.6879    0.5  0.6915  0.6950  0.6985  0.7019  0.7054  0.7088  0.7123  0.7157  0.7190  0.7224    0.6  0.7257  0.7291  0.7324  0.7357  0.7389  0.7422  0.7454  0.7486  0.7517  0.7549    0.7  0.7580  0.7611  0.7642  0.7673  0.7704  0.7734  0.7764  0.7794  0.7823  0.7852    0.8  0.7881  0.7910  0.7939  0.7967  0.7995  0.8023  0.8051  0.8078  0.8106  0.8133    0.9  0.8159  0.8186  0.8212  0.8238  0.8264  0.8289  0.8315  0.8340  0.8365  0.8389    1.0  0.8413  0.8438  0.8461  0.8485  0.8508  0.8531  0.8554  0.8577  0.8599  0.8621    1.1  0.8643  0.8665  0.8686  0.8708  0.8729  0.8749  0.8770  0.8790  0.8810  0.8830    1.2  0.8849  0.8869  0.8888  0.8907  0.8925  0.8944  0.8962  0.8980  0.8997  0.9015    1.3  0.9032  0.9049  0.9066  0.9082  0.9099  0.9115  0.9131  0.9147  0.9162  0.9177    1.4  0.9192  0.9207  0.9222  0.9236  0.9251  0.9265  0.9279  0.9292  0.9306  0.9319    1.5  0.9332  0.9345  0.9357  0.9370  0.9382  0.9394  0.9406  0.9418  0.9429  0.9441    1.6  0.9452  0.9463  0.9474  0.9484  0.9495  0.9505  0.9515  0.9525  0.9535  0.9545    1.7  0.9554  0.9564  0.9573  0.9582  0.9591  0.9599  0.9608  0.9616  0.9625  0.9633    1.8  0.9641  0.9649  0.9656  0.9664  0.9671  0.9678  0.9686  0.9693  0.9699  0.9706    1.9  0.9713  0.9719  0.9726  0.9732  0.9738  0.9744  0.9750  0.9756  0.9761  0.9767    2.0  0.9772  0.9778  0.9783  0.9788  0.9793  0.9798  0.9803  0.9808  0.9812  0.9817    2.1  0.9821  0.9826  0.9830  0.9834  0.9838  0.9842  0.9846  0.9850  0.9854  0.9857    2.2  0.9861  0.9864  0.9868  0.9871  0.9875  0.9878  0.9881  0.9884  0.9887  0.9890    2.3  0.9893  0.9896  0.9898  0.9901  0.9904  0.9906  0.9909  0.9911  0.9913  0.9916    2.4  0.9918  0.9920  0.9922  0.9925  0.9927  0.9929  0.9931  0.9932  0.9934  0.9936    2.5  0.9938  0.9940  0.9941  0.9943  0.9945  0.9946  0.9948  0.9949  0.9951  0.9952    2.6  0.9953  0.9955  0.9956  0.9957  0.9959  0.9960  0.9961  0.9962  0.9963  0.9964    2.7  0.9965  0.9966  0.9967  0.9968  0.9969  0.9970  0.9971  0.9972  0.9973  0.9974    2.8  0.9974  0.9975  0.9976  0.9977  0.9977  0.9978  0.9979  0.9979  0.9980  0.9981    2.9  0.9981  0.9982  0.9982  0.9983  0.9984  0.9984  0.9985  0.9985  0.9986  0.9986    3.0  0.9987  0.9987  0.9987  0.9988  0.9988  0.9989  0.9989  0.9989  0.9990  0.9990    3.1  0.9990  0.9991  0.9991  0.9991  0.9992  0.9992  0.9992  0.9992  0.9993  0.9993    3.2  0.9993  0.9993  0.9994  0.9994  0.9994  0.9994  0.9994  0.9995  0.9995  0.9995    3.3  0.9995  0.9995  0.9995  0.9996  0.9996  0.9996  0.9996  0.9996  0.9996  0.9997    3.4  0.9997  0.9997  0.9997  0.9997  0.9997  0.9997  0.9997  0.9997  0.9997  0.9998      Note: For , the probability is greater than or equal to . For negative Z-scores, use the symmetry of the normal distribution: .  "
},
{
  "id": "normal-probability-table-2",
  "level": "2",
  "url": "normal-probability-table.html#normal-probability-table-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "normal probability table "
},
{
  "id": "z-table-positive",
  "level": "2",
  "url": "normal-probability-table.html#z-table-positive",
  "type": "Figure",
  "number": "C.1.1",
  "title": "",
  "body": " Normal Probability Table for Positive Z-scores    Z  0.00  0.01  0.02  0.03  0.04  0.05  0.06  0.07  0.08  0.09    0.0  0.5000  0.5040  0.5080  0.5120  0.5160  0.5199  0.5239  0.5279  0.5319  0.5359    0.1  0.5398  0.5438  0.5478  0.5517  0.5557  0.5596  0.5636  0.5675  0.5714  0.5753    0.2  0.5793  0.5832  0.5871  0.5910  0.5948  0.5987  0.6026  0.6064  0.6103  0.6141    0.3  0.6179  0.6217  0.6255  0.6293  0.6331  0.6368  0.6406  0.6443  0.6480  0.6517    0.4  0.6554  0.6591  0.6628  0.6664  0.6700  0.6736  0.6772  0.6808  0.6844  0.6879    0.5  0.6915  0.6950  0.6985  0.7019  0.7054  0.7088  0.7123  0.7157  0.7190  0.7224    0.6  0.7257  0.7291  0.7324  0.7357  0.7389  0.7422  0.7454  0.7486  0.7517  0.7549    0.7  0.7580  0.7611  0.7642  0.7673  0.7704  0.7734  0.7764  0.7794  0.7823  0.7852    0.8  0.7881  0.7910  0.7939  0.7967  0.7995  0.8023  0.8051  0.8078  0.8106  0.8133    0.9  0.8159  0.8186  0.8212  0.8238  0.8264  0.8289  0.8315  0.8340  0.8365  0.8389    1.0  0.8413  0.8438  0.8461  0.8485  0.8508  0.8531  0.8554  0.8577  0.8599  0.8621    1.1  0.8643  0.8665  0.8686  0.8708  0.8729  0.8749  0.8770  0.8790  0.8810  0.8830    1.2  0.8849  0.8869  0.8888  0.8907  0.8925  0.8944  0.8962  0.8980  0.8997  0.9015    1.3  0.9032  0.9049  0.9066  0.9082  0.9099  0.9115  0.9131  0.9147  0.9162  0.9177    1.4  0.9192  0.9207  0.9222  0.9236  0.9251  0.9265  0.9279  0.9292  0.9306  0.9319    1.5  0.9332  0.9345  0.9357  0.9370  0.9382  0.9394  0.9406  0.9418  0.9429  0.9441    1.6  0.9452  0.9463  0.9474  0.9484  0.9495  0.9505  0.9515  0.9525  0.9535  0.9545    1.7  0.9554  0.9564  0.9573  0.9582  0.9591  0.9599  0.9608  0.9616  0.9625  0.9633    1.8  0.9641  0.9649  0.9656  0.9664  0.9671  0.9678  0.9686  0.9693  0.9699  0.9706    1.9  0.9713  0.9719  0.9726  0.9732  0.9738  0.9744  0.9750  0.9756  0.9761  0.9767    2.0  0.9772  0.9778  0.9783  0.9788  0.9793  0.9798  0.9803  0.9808  0.9812  0.9817    2.1  0.9821  0.9826  0.9830  0.9834  0.9838  0.9842  0.9846  0.9850  0.9854  0.9857    2.2  0.9861  0.9864  0.9868  0.9871  0.9875  0.9878  0.9881  0.9884  0.9887  0.9890    2.3  0.9893  0.9896  0.9898  0.9901  0.9904  0.9906  0.9909  0.9911  0.9913  0.9916    2.4  0.9918  0.9920  0.9922  0.9925  0.9927  0.9929  0.9931  0.9932  0.9934  0.9936    2.5  0.9938  0.9940  0.9941  0.9943  0.9945  0.9946  0.9948  0.9949  0.9951  0.9952    2.6  0.9953  0.9955  0.9956  0.9957  0.9959  0.9960  0.9961  0.9962  0.9963  0.9964    2.7  0.9965  0.9966  0.9967  0.9968  0.9969  0.9970  0.9971  0.9972  0.9973  0.9974    2.8  0.9974  0.9975  0.9976  0.9977  0.9977  0.9978  0.9979  0.9979  0.9980  0.9981    2.9  0.9981  0.9982  0.9982  0.9983  0.9984  0.9984  0.9985  0.9985  0.9986  0.9986    3.0  0.9987  0.9987  0.9987  0.9988  0.9988  0.9989  0.9989  0.9989  0.9990  0.9990    3.1  0.9990  0.9991  0.9991  0.9991  0.9992  0.9992  0.9992  0.9992  0.9993  0.9993    3.2  0.9993  0.9993  0.9994  0.9994  0.9994  0.9994  0.9994  0.9995  0.9995  0.9995    3.3  0.9995  0.9995  0.9995  0.9996  0.9996  0.9996  0.9996  0.9996  0.9996  0.9997    3.4  0.9997  0.9997  0.9997  0.9997  0.9997  0.9997  0.9997  0.9997  0.9997  0.9998    "
},
{
  "id": "t-probability-table",
  "level": "1",
  "url": "t-probability-table.html",
  "type": "Section",
  "number": "C.2",
  "title": "<span class=\"process-math\">\\(t\\)<\/span>-Probability Table",
  "body": " -Probability Table  A -probability table may be used to find tail areas of a -distribution using a T-score, or vice-versa. Such a table lists T-scores and the corresponding percentiles. Each row in the -table represents a -distribution with different degrees of freedom. The columns correspond to tail probabilities.   -Distribution Table    one tail  0.100  0.050  0.025  0.010  0.005    two tails  0.200  0.100  0.050  0.020  0.010    df 1  3.08  6.31  12.71  31.82  63.66    2  1.89  2.92  4.30  6.96  9.92    3  1.64  2.35  3.18  4.54  5.84    4  1.53  2.13  2.78  3.75  4.60    5  1.48  2.02  2.57  3.36  4.03    6  1.44  1.94  2.45  3.14  3.71    7  1.41  1.89  2.36  3.00  3.50    8  1.40  1.86  2.31  2.90  3.36    9  1.38  1.83  2.26  2.82  3.25    10  1.37  1.81  2.23  2.76  3.17    15  1.34  1.75  2.13  2.60  2.95    20  1.33  1.72  2.09  2.53  2.85    25  1.32  1.71  2.06  2.49  2.79    30  1.31  1.70  2.04  2.46  2.75    40  1.30  1.68  2.02  2.42  2.70    50  1.30  1.68  2.01  2.40  2.68    60  1.30  1.67  2.00  2.39  2.66    80  1.29  1.66  1.99  2.37  2.64    100  1.29  1.66  1.98  2.36  2.63    200  1.29  1.65  1.97  2.35  2.60    500  1.28  1.65  1.96  2.33  2.59     1.28  1.64  1.96  2.33  2.58     "
},
{
  "id": "t-probability-table-2",
  "level": "2",
  "url": "t-probability-table.html#t-probability-table-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "-probability table "
},
{
  "id": "t-table",
  "level": "2",
  "url": "t-probability-table.html#t-table",
  "type": "Figure",
  "number": "C.2.1",
  "title": "",
  "body": " -Distribution Table    one tail  0.100  0.050  0.025  0.010  0.005    two tails  0.200  0.100  0.050  0.020  0.010    df 1  3.08  6.31  12.71  31.82  63.66    2  1.89  2.92  4.30  6.96  9.92    3  1.64  2.35  3.18  4.54  5.84    4  1.53  2.13  2.78  3.75  4.60    5  1.48  2.02  2.57  3.36  4.03    6  1.44  1.94  2.45  3.14  3.71    7  1.41  1.89  2.36  3.00  3.50    8  1.40  1.86  2.31  2.90  3.36    9  1.38  1.83  2.26  2.82  3.25    10  1.37  1.81  2.23  2.76  3.17    15  1.34  1.75  2.13  2.60  2.95    20  1.33  1.72  2.09  2.53  2.85    25  1.32  1.71  2.06  2.49  2.79    30  1.31  1.70  2.04  2.46  2.75    40  1.30  1.68  2.02  2.42  2.70    50  1.30  1.68  2.01  2.40  2.68    60  1.30  1.67  2.00  2.39  2.66    80  1.29  1.66  1.99  2.37  2.64    100  1.29  1.66  1.98  2.36  2.63    200  1.29  1.65  1.97  2.35  2.60    500  1.28  1.65  1.96  2.33  2.59     1.28  1.64  1.96  2.33  2.58    "
},
{
  "id": "chi-square-probability-table",
  "level": "1",
  "url": "chi-square-probability-table.html",
  "type": "Section",
  "number": "C.3",
  "title": "Chi-Square Probability Table",
  "body": " Chi-Square Probability Table  A chi-square probability table may be used to find tail areas of a chi-square distribution. When using a chi-square table, we examine a particular row for distributions with different degrees of freedom, and we identify a range for the area (e.g. 0.025 to 0.05). Note that the chi-square table provides upper tail values, which is different than the normal and -distribution tables.   Chi-Square Probability Table    Upper tail  0.3  0.2  0.1  0.05  0.02  0.01  0.005  0.001    df 1  1.07  1.64  2.71  3.84  5.41  6.63  7.88  10.83    2  2.41  3.22  4.61  5.99  7.82  9.21  10.60  13.82    3  3.66  4.64  6.25  7.81  9.84  11.34  12.84  16.27    4  4.88  5.99  7.78  9.49  11.67  13.28  14.86  18.47    5  6.06  7.29  9.24  11.07  13.39  15.09  16.75  20.52    6  7.23  8.56  10.64  12.59  15.03  16.81  18.55  22.46    7  8.38  9.80  12.02  14.07  16.62  18.48  20.28  24.32    8  9.52  11.03  13.36  15.51  18.17  20.09  21.95  26.12    9  10.66  12.24  14.68  16.92  19.68  21.67  23.59  27.88    10  11.78  13.44  15.99  18.31  21.16  23.21  25.19  29.59    15  17.32  19.31  22.31  25.00  28.26  30.58  32.80  37.70    20  22.77  25.04  28.41  31.41  35.02  37.57  39.99  45.31    25  28.17  30.68  34.38  37.65  41.57  44.31  46.93  52.62    30  33.53  36.25  40.26  43.77  47.96  50.89  53.67  59.70    40  44.16  47.27  51.81  55.76  60.44  63.69  66.77  73.40    50  54.72  58.16  63.17  67.50  72.61  76.15  79.49  86.66    60  65.23  68.97  74.40  79.08  84.58  88.38  91.95  99.61    80  86.12  90.41  96.58  101.88  108.07  112.33  116.32  124.84    100  106.91  111.67  118.50  124.34  131.14  135.81  140.17  149.45     "
},
{
  "id": "chi-square-probability-table-2",
  "level": "2",
  "url": "chi-square-probability-table.html#chi-square-probability-table-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "chi-square probability table "
},
{
  "id": "chi-square-table",
  "level": "2",
  "url": "chi-square-probability-table.html#chi-square-table",
  "type": "Figure",
  "number": "C.3.1",
  "title": "",
  "body": " Chi-Square Probability Table    Upper tail  0.3  0.2  0.1  0.05  0.02  0.01  0.005  0.001    df 1  1.07  1.64  2.71  3.84  5.41  6.63  7.88  10.83    2  2.41  3.22  4.61  5.99  7.82  9.21  10.60  13.82    3  3.66  4.64  6.25  7.81  9.84  11.34  12.84  16.27    4  4.88  5.99  7.78  9.49  11.67  13.28  14.86  18.47    5  6.06  7.29  9.24  11.07  13.39  15.09  16.75  20.52    6  7.23  8.56  10.64  12.59  15.03  16.81  18.55  22.46    7  8.38  9.80  12.02  14.07  16.62  18.48  20.28  24.32    8  9.52  11.03  13.36  15.51  18.17  20.09  21.95  26.12    9  10.66  12.24  14.68  16.92  19.68  21.67  23.59  27.88    10  11.78  13.44  15.99  18.31  21.16  23.21  25.19  29.59    15  17.32  19.31  22.31  25.00  28.26  30.58  32.80  37.70    20  22.77  25.04  28.41  31.41  35.02  37.57  39.99  45.31    25  28.17  30.68  34.38  37.65  41.57  44.31  46.93  52.62    30  33.53  36.25  40.26  43.77  47.96  50.89  53.67  59.70    40  44.16  47.27  51.81  55.76  60.44  63.69  66.77  73.40    50  54.72  58.16  63.17  67.50  72.61  76.15  79.49  86.66    60  65.23  68.97  74.40  79.08  84.58  88.38  91.95  99.61    80  86.12  90.41  96.58  101.88  108.07  112.33  116.32  124.84    100  106.91  111.67  118.50  124.34  131.14  135.81  140.17  149.45    "
},
{
  "id": "backmatter-5",
  "level": "1",
  "url": "backmatter-5.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-6",
  "level": "1",
  "url": "backmatter-6.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt. Converted from LaTeX source in 2026.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
