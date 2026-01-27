var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " copyright  "
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
  "body": " Case study: using stents to prevent strokes  stroke   This section introduces a classic challenge in statistics: evaluating the efficacy of a medical treatment. Terms in this section, and indeed much of this chapter, will all be revisited later in the text. The plan for now is simply to get a sense of the role statistics can play in practice.  In this section we will consider an experiment that studies effectiveness of stents in treating patients at risk of stroke. Stents are devices put inside blood vessels that assist in patient recovery after cardiac events and reduce the risk of an additional heart attack or death. Many doctors have hoped that there would be similar benefits for patients at risk of stroke. We start by writing the principal question the researchers hope to answer:   Does the use of stents reduce the risk of stroke?   The researchers who asked this question conducted an experiment with 451 at-risk patients. Each volunteer patient was randomly assigned to one of two groups:      Treatment group . Patients in the treatment group received a stent and medical management. The medical management included medications, management of risk factors, and help in lifestyle modification.     Control group . Patients in the control group received the same medical management as the treatment group, but they did not receive stents.     Researchers randomly assigned 224 patients to the treatment group and 227 to the control group. In this study, the control group provides a reference point against which we can measure the medical impact of stents in the treatment group.  Researchers studied the effect of stents at two time points: 30 days after enrollment and 365 days after enrollment. The results of 5 patients are summarized in . Patient outcomes are recorded as stroke or no event , representing whether or not the patient had a stroke at the end of a time period.    Results for five patients from the stent study    Patient  group  0-30 days  0-365 days    1  treatment  no event  no event    2  treatment  stroke  stroke    3  treatment  no event  no event          450  control  no event  no event    451  control  no event  no event     Considering data from each patient individually would be a long, cumbersome path towards answering the original research question. Instead, performing a statistical data analysis allows us to consider all of the data at once. summarizes the raw data in a more helpful way. In this table, we can quickly see what happened over the entire study. For instance, to identify the number of patients in the treatment group who had a stroke within 30 days, we look on the left-side of the table at the intersection of the treatment and stroke: 33.   Descriptive statistics for the stent study     0-30 days   0-365 days     stroke  no event   stroke  no event    treatment  33  191   45  179    control  13  214   28  199    Total  46  405   73  378     Computing proportions from the stent study  Of the 224 patients in the treatment group, 45 had a stroke by the end of the first year. Using these two numbers, compute the proportion of patients in the treatment group who had a stroke by the end of their first year.   The proportion of the 224 patients who had a stroke within 365 days: .   We can compute summary statistics from the table. A summary statistic is a single number summarizing a large amount of data. For instance, the primary results of the study after 1 year could be described by two summary statistics: the proportion of people who had a stroke in the treatment and control groups.     Proportion who had a stroke in the treatment (stent) group: .    Proportion who had a stroke in the control group: .     These two summary statistics are useful in looking for differences in the groups, and we are in for a surprise: an additional 8% of patients in the treatment group had a stroke! This is important for two reasons. First, it is contrary to what doctors expected, which was that stents would reduce the rate of strokes. Second, it leads to a statistical question: do the data show a real difference between the groups?  This second question is subtle. Suppose you flip a coin 100 times. While the chance a coin lands heads in any given coin flip is 50%, we probably won't observe exactly 50 heads. This type of fluctuation is part of almost any type of data generating process. It is possible that the 8% difference in the stent study is due to this natural variation. However, the larger the difference we observe (for a particular sample size), the less believable it is that the difference is due to chance. So what we are really asking is the following: is the difference so large that we should reject the notion that it was due to chance?  While we don't yet have our statistical tools to fully address this question on our own, we can comprehend the conclusions of the published analysis: there was compelling evidence of harm by stents in this study of stroke patients.   Be careful  Do not generalize the results of this study to all patients and all stents. This study looked at patients with very specific characteristics who volunteered to be a part of this study and who may not be representative of all stroke patients. In addition, there are many types of stents and this study only considered the self-expanding Wingspan stent (Boston Scientific). However, this study does leave us with an important lesson: we should keep our eyes open for surprises.    Exercises  Migraine and acupuncture, Part I  A migraine is a particularly painful type of headache, which patients sometimes wish to treat with acupuncture. To determine whether acupuncture relieves migraine pain, researchers conducted a randomized controlled study where 89 females diagnosed with migraine headaches were randomly assigned to one of two groups: treatment or control. 43 patients in the treatment group received acupuncture that is specifically designed to treat migraines. 46 patients in the control group received placebo acupuncture (needle insertion at non-acupoint locations). 24 hours after patients received acupuncture, they were asked if they were pain free. Results are summarized in the contingency table below.   Migraine and acupuncture study results      Pain free       Yes  No  Total     Treatment  10  33  43    Group  Control  2  44  46     Total  12  77  89        What percent of patients in the treatment group were pain free 24 hours after receiving acupuncture?    What percent were pain free in the control group?    In which group did a higher percent of patients become pain free 24 hours after receiving acupuncture?    Your findings so far might suggest that acupuncture is an effective treatment for migraines for all people who suffer from migraines. However, this is not the only possible conclusion that can be drawn based on your findings so far. What is one other possible explanation for the observed difference between the percentages of patients that are pain free 24 hours after receiving acupuncture in the two groups?      Sinusitis and antibiotics, Part I  Researchers studying the effect of antibiotic treatment for acute sinusitis compared to symptomatic treatments randomly assigned 166 adults diagnosed with acute sinusitis to one of two groups: treatment or control. Study participants received either a 10-day course of amoxicillin (an antibiotic) or a placebo similar in appearance and taste. The placebo consisted of symptomatic treatments such as acetaminophen, nasal decongestants, etc. At the end of the 10-day period, patients were asked if they experienced improvement in symptoms. The distribution of responses is summarized below.   Sinusitis and antibiotics study results      Self-reported improvement       in symptoms       Yes  No  Total     Treatment  66  19  85    Group  Control  65  16  81     Total  131  35  166        What percent of patients in the treatment group experienced improvement in symptoms?    What percent experienced improvement in symptoms in the control group?    In which group did a higher percentage of patients experience improvement in symptoms?    Your findings so far might suggest a real difference in effectiveness of antibiotic and placebo treatments for improving symptoms of sinusitis. However, this is not the only possible conclusion that can be drawn based on your findings so far. What is one other possible explanation for the observed difference between the percentages of patients in the antibiotic and placebo treatment groups that experience improvement in symptoms of sinusitis?       "
},
{
  "id": "p-9",
  "level": "2",
  "url": "sec-stents-strokes.html#p-9",
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
  "body": "Computing proportions from the stent study  Of the 224 patients in the treatment group, 45 had a stroke by the end of the first year. Using these two numbers, compute the proportion of patients in the treatment group who had a stroke by the end of their first year.   The proportion of the 224 patients who had a stroke within 365 days: .  "
},
{
  "id": "p-17",
  "level": "2",
  "url": "sec-stents-strokes.html#p-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "summary statistic "
},
{
  "id": "warning-1",
  "level": "2",
  "url": "sec-stents-strokes.html#warning-1",
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
  "body": "Migraine and acupuncture, Part I  A migraine is a particularly painful type of headache, which patients sometimes wish to treat with acupuncture. To determine whether acupuncture relieves migraine pain, researchers conducted a randomized controlled study where 89 females diagnosed with migraine headaches were randomly assigned to one of two groups: treatment or control. 43 patients in the treatment group received acupuncture that is specifically designed to treat migraines. 46 patients in the control group received placebo acupuncture (needle insertion at non-acupoint locations). 24 hours after patients received acupuncture, they were asked if they were pain free. Results are summarized in the contingency table below.   Migraine and acupuncture study results      Pain free       Yes  No  Total     Treatment  10  33  43    Group  Control  2  44  46     Total  12  77  89        What percent of patients in the treatment group were pain free 24 hours after receiving acupuncture?    What percent were pain free in the control group?    In which group did a higher percent of patients become pain free 24 hours after receiving acupuncture?    Your findings so far might suggest that acupuncture is an effective treatment for migraines for all people who suffer from migraines. However, this is not the only possible conclusion that can be drawn based on your findings so far. What is one other possible explanation for the observed difference between the percentages of patients that are pain free 24 hours after receiving acupuncture in the two groups?     "
},
{
  "id": "ex-sinusitis-antibiotics",
  "level": "2",
  "url": "sec-stents-strokes.html#ex-sinusitis-antibiotics",
  "type": "Exercise",
  "number": "1.1.2",
  "title": "Sinusitis and antibiotics, Part I.",
  "body": "Sinusitis and antibiotics, Part I  Researchers studying the effect of antibiotic treatment for acute sinusitis compared to symptomatic treatments randomly assigned 166 adults diagnosed with acute sinusitis to one of two groups: treatment or control. Study participants received either a 10-day course of amoxicillin (an antibiotic) or a placebo similar in appearance and taste. The placebo consisted of symptomatic treatments such as acetaminophen, nasal decongestants, etc. At the end of the 10-day period, patients were asked if they experienced improvement in symptoms. The distribution of responses is summarized below.   Sinusitis and antibiotics study results      Self-reported improvement       in symptoms       Yes  No  Total     Treatment  66  19  85    Group  Control  65  16  81     Total  131  35  166        What percent of patients in the treatment group experienced improvement in symptoms?    What percent experienced improvement in symptoms in the control group?    In which group did a higher percentage of patients experience improvement in symptoms?    Your findings so far might suggest a real difference in effectiveness of antibiotic and placebo treatments for improving symptoms of sinusitis. However, this is not the only possible conclusion that can be drawn based on your findings so far. What is one other possible explanation for the observed difference between the percentages of patients in the antibiotic and placebo treatment groups that experience improvement in symptoms of sinusitis?     "
},
{
  "id": "sec-data-basics",
  "level": "1",
  "url": "sec-data-basics.html",
  "type": "Section",
  "number": "1.2",
  "title": "Data basics",
  "body": " Data basics   Effective organization and description of data is a first step in most analyses. This section introduces the data matrix for organizing data as well as some terminology about different forms of data that will be used throughout this book.    Observations, variables, and data matrices  loan50 data   displays rows 1, 2, 3, and 50 of a data set for 50 randomly sampled loans offered through Lending Club, which is a peer-to-peer lending company. These observations will be referred to as the loan50 data set.  Each row in the table represents a single loan. The formal name for a row is a case or observational unit . The columns represent characteristics, called variables , for each of the loans. For example, the first row represents a loan of $22,000 with an interest rate of 10.90%, where the borrower is based in New Jersey (NJ) and has an income of $59,000.   Four rows from the loan50 data matrix     loan_amount  interest_rate  term  grade  state  total_income  homeownership    1  22000  10.90  60.00  B  NJ  59000.00  rent    2  6000  9.92  36.00  B  CA  60000.00  rent    3  25000  26.30  36.00  E  SC  75000.00  mortgage              50  15000  6.08  36.00  A  TX  77500.00  mortgage     Reading data from a data matrix  What is the grade of the first loan in ? And what is the home ownership status of the borrower for that first loan?   The loan's grade is B, and the borrower rents their residence.   In practice, it is especially important to ask clarifying questions to ensure important aspects of the data are understood. For instance, it is always important to be sure we know what each variable means and the units of measurement. Descriptions of the loan50 variables are given in .   Variables and their descriptions for the loan50 data set      variable  description    loan_amount  Amount of the loan received, in US dollars.    interest_rate  Interest rate on the loan, in an annual percentage.    term  The length of the loan, which is always set as a whole number of months.    grade  Loan grade, which takes values A through G and represents the quality of the loan and its likelihood of being repaid.    state  US state where the borrower resides.    total_income  Borrower's total income, including any second income, in US dollars.    homeownership  Indicates whether the person owns, owns but has a mortgage, or rents.     The data in represent a data matrix , which is a convenient and common way to organize data, especially if collecting data in a spreadsheet. Each row of a data matrix corresponds to a unique case (observational unit), and each column corresponds to a variable.  When recording data, use a data matrix unless you have a very good reason to use a different structure. This structure allows new cases to be added as rows or new variables as new columns.  Organizing a gradebook  The grades for assignments, quizzes, and exams in a course are often recorded in a gradebook that takes the form of a data matrix. How might you organize grade data using a data matrix?   There are multiple strategies that can be followed. One common strategy is to have each student represented by a row, and then add a column for each assignment, quiz, or exam. Under this setup, it is easy to review a single line to understand a student's grade history. There should also be columns to include student information, such as one column to list student names.    county data We consider data for 3,142 counties in the United States. The data includes each county's name, the state where it resides, its population in 2017, how its population changed from 2010 to 2017, poverty rate, and six additional characteristics.  Organizing county data  How might the county data described above be organized in a data matrix?   Each county may be viewed as a case, and there are eleven pieces of information recorded for each case. A table with 3,142 rows and 11 columns could hold these data, where each row represents a county and each column represents a particular piece of information.     Types of variables  Examine the unemp_rate , pop , state , and median_edu variables in the county data set. Each of these variables is inherently different from the other three, yet some share certain characteristics.  First consider unemp_rate , which is said to be a numerical variable since it can take a wide range of numerical values, and it is sensible to add, subtract, or take averages with those values. On the other hand, we would not classify a variable reporting telephone area codes as numerical since the average, sum, and difference of area codes doesn't have any clear meaning.  The pop variable is also numerical, although it seems to be a little different than unemp_rate . This variable of the population count can only take whole non-negative numbers (0, 1, 2, ). For this reason, the population variable is said to be discrete since it can only take numerical values with jumps. On the other hand, the unemployment rate variable is said to be continuous .  The variable state can take up to 51 values after accounting for Washington, DC: AL, AK, , and WY. Because the responses themselves are categories, state is called a categorical variable, and the possible values are called the variable's levels .  Finally, consider the median_edu variable, which describes the median education level of county residents and takes values below_hs , hs_diploma , some_college , or bachelors in each county. This variable seems to be a hybrid: it is a categorical variable but the levels have a natural ordering. A variable with these properties is called an ordinal variable, while a regular categorical variable without this type of special ordering is called a nominal variable. To simplify analyses, any ordinal variable in this book will be treated as a nominal (unordered) categorical variable.   Breakdown of variables into their respective types   A tree diagram showing \"all variables\" at the top, branching into \"numeric\" and \"categorical\". The \"numeric\" branch splits into \"continuous\" and \"discrete\", while the \"categorical\" branch splits into \"nominal (unordered categorical)\" and \"ordinal (ordered categorical)\".     Classifying variables by type   Data were collected about students in a statistics course. Three variables were recorded for each student: number of siblings, student height, and whether the student had previously taken a statistics course. Classify each of the variables as continuous numerical, discrete numerical, or categorical.    The number of siblings and student height represent numerical variables. Because the number of siblings is a count, it is discrete. Height varies continuously, so it is a continuous numerical variable. The last variable classifies students into two categories those who have and those who have not taken a statistics course which makes this variable categorical.    Classifying experiment variables  An experiment is evaluating the effectiveness of a new drug in treating migraines. A group variable is used to indicate the experiment group for each patient: treatment or control. The num_migraines variable represents the number of migraines the patient experienced during a 3-month period. Classify each variable as either numerical or categorical.   The group variable can take just one of two group names, making it categorical. The num_migraines variable describes a count of the number of migraines, which is an outcome where basic arithmetic is sensible, which means this is numerical outcome; more specifically, since it represents a count, num_migraines is a discrete numerical variable.     Relationships between variables  Many analyses are motivated by a researcher looking for a relationship between two or more variables. A social scientist may like to answer some of the following questions:     If homeownership is lower than the national average in one county, will the percent of multi-unit structures in that county tend to be above or below the national average?    Does a higher than average increase in county population tend to correspond to counties with higher or lower median household incomes?    How useful a predictor is median education level for the median household income for US counties?     To answer these questions, data must be collected, such as the county data set. Examining summary statistics could provide insights for each of the three questions about counties. Additionally, graphs can be used to visually explore data.   Scatterplots are one type of graph used to study the relationship between two numerical variables. A scatterplot comparing the variables homeownership and multi_unit (the percent of units in multi-unit structures such as apartments and condos) shows that counties with a higher rate of multi-units tend to have lower homeownership rates. We might brainstorm as to why this relationship exists and investigate each idea to determine which are the most reasonable explanations.  The multi-unit and homeownership rates are said to be associated because the plot shows a discernible pattern. When two variables show some connection with one another, they are called associated variables. Associated variables can also be called dependent variables and vice-versa.    Exercises  Air pollution and birth outcomes, study components  Researchers collected data to examine the relationship between air pollutants and preterm births in Southern California. During the study air pollution levels were measured by air quality monitoring stations. Length of gestation data were collected on 143,196 births between the years 1989 and 1993, and air pollution exposure during gestation was calculated for each birth. The analysis suggested that increased ambient PM 10 and, to a lesser degree, CO concentrations may be associated with the occurrence of preterm births.   Identify the main research question of the study.  Who are the subjects in this study, and how many are included?  What are the variables in the study? Identify each variable as numerical or categorical. If numerical, state whether the variable is discrete or continuous. If categorical, state whether the variable is ordinal.    Buteyko method, study components  The Buteyko method is a shallow breathing technique developed by Konstantin Buteyko, a Russian doctor, in 1952. Anecdotal evidence suggests that the Buteyko method can reduce asthma symptoms and improve quality of life. In a scientific study to determine the effectiveness of this method, researchers recruited 600 asthma patients aged 18-69 who relied on medication for asthma treatment. These patients were randomly split into two research groups: one practiced the Buteyko method and the other did not. Patients were scored on quality of life, activity, asthma symptoms, and medication reduction on a scale from 0 to 10. On average, the participants in the Buteyko group experienced a significant reduction in asthma symptoms and an improvement in quality of life.   Identify the main research question of the study.  Who are the subjects in this study, and how many are included?  What are the variables in the study? Identify each variable as numerical or categorical. If numerical, state whether the variable is discrete or continuous. If categorical, state whether the variable is ordinal.    Cheaters, study components  Researchers studying the relationship between honesty, age and self-control conducted an experiment on 160 children between the ages of 5 and 15. Participants reported their age, sex, and whether they were an only child or not. The researchers asked each child to toss a fair coin in private and to record the outcome (white or black) on a paper sheet, and said they would only reward children who report white. The study found differences in cheating rates based on instructions and characteristics.   Identify the main research question of the study.  Who are the subjects in this study, and how many are included?  How many variables were recorded for each subject in the study in order to conclude these findings? State the variables and their types.    Stealers, study components  In a study of the relationship between socio-economic class and unethical behavior, 129 University of California undergraduates at Berkeley were asked to identify themselves as having low or high social-class by comparing themselves to others with the most (least) money, most (least) education, and most (least) respected jobs. They were also presented with a jar of individually wrapped candies and informed that the candies were for children in a nearby laboratory, but that they could take some if they wanted. After completing some unrelated tasks, participants reported the number of candies they had taken. It was found that those who were identified as upper-class took more candy than others.   Identify the main research question of the study.  Who are the subjects in this study, and how many are included?  The study found that students who were identified as upper-class took more candy than others. How many variables were recorded for each subject in the study in order to conclude these findings? State the variables and their types.    Relaxing after work  The General Social Survey asked the question, “After an average work day, about how many hours do you have to relax or pursue activities that you enjoy?” to a random sample of 1,155 Americans. The average relaxing time was found to be 1.65 hours. Determine which of the following is an observation, a variable, a sample statistic, or a population parameter.   An American in the sample.  Number of hours spent relaxing after an average work day.  1.65.  Average number of hours all Americans spend relaxing after an average work day.    Cats on YouTube  Suppose you want to estimate the percentage of videos on YouTube that are cat videos. It is impossible for you to watch all videos on YouTube so you use a random video picker to select 1000 videos for you. You find that 2% of these videos are cat videos. Determine which of the following is an observation, a variable, a sample statistic, or a population parameter.   Percentage of all videos on YouTube that are cat videos.  2%.  A video in your sample.  Whether or not a video is a cat video.    Course satisfaction across sections  A large college class has 160 students. All 160 students attend the lectures together, but the students are divided into 4 groups, each of 40 students, for lab sections administered by different teaching assistants. The professor wants to conduct a survey about how satisfied the students are with the course, and he believes that the lab section a student is in might affect the student's overall satisfaction with the course.   What type of study is this?  Suggest a sampling strategy for carrying out this study.    Housing proposal across dorms  On a large college campus first-year students and sophomores live in dorms located on the eastern part of the campus and juniors and seniors live in dorms located on the western part of the campus. Suppose you want to collect student opinions on a new housing structure the college administration is proposing and you want to make sure your survey equally represents opinions from students from all years.   What type of study is this?  Suggest a sampling strategy for carrying out this study.    Internet use and life expectancy  A study evaluated the relationship between estimated life expectancy at birth (as of 2014) and percentage of internet users (as of 2009) in 208 countries. A scatterplot shows life expectancy versus percent internet users.   Describe the relationship between life expectancy and percentage of internet users.  What type of study is this?  State a possible confounding variable that might explain this relationship and describe its potential effect.    Life expectancy versus internet use   Scatterplot of life expectancy at birth versus percent internet users for 208 countries.     Stressed out, Part I  A study surveyed a random sample of otherwise healthy high school students and found that they are more likely to get muscle cramps when they are stressed. The study also noted that students drink more coffee and sleep less when they are stressed.   What type of study is this?  Can this study be used to conclude a causal relationship between increased stress and muscle cramps?  State possible confounding variables that might explain the observed relationship between increased stress and muscle cramps.    Evaluate sampling methods  A university wants to determine what fraction of its undergraduate student body support a new $25 annual fee to improve the student union. For each proposed method below, indicate whether the method is reasonable or not.   Survey a simple random sample of 500 students.  Stratify students by their field of study, then sample 10% of students from each stratum.  Cluster students by their ages (e.g. 18 years old in one cluster, 19 years old in one cluster, etc.), then randomly sample three clusters and survey all students in those clusters.    Random digit dialing  The Gallup Poll uses a procedure called random digit dialing, which creates phone numbers based on a list of all area codes in America in conjunction with the associated number of residential households in each area code. Give a possible reason the Gallup Poll chooses to use random digit dialing instead of picking phone numbers from the phone book.   Haters are gonna hate, study confirms  A study asked a group of 200 randomly sampled men and women to evaluate how they felt about various subjects to measure their attitude towards mostly independent stimuli, then presented information about a fictitious microwave oven. People who reacted positively to the subjects also tended to react positively to the microwave oven, and those who reacted negatively tended to react negatively to it.   What are the cases?  What are the response variables?  What are the explanatory variables?  Does the study employ random sampling?  Is this an observational study or an experiment? Explain.  Can we establish a causal link between the explanatory and response variables?  Can the results of the study be generalized to the population at large?    Family size  Suppose we want to estimate household size. If we select students at random at an elementary school and ask them what their family size is, will this be a good measure of household size? Or will our average be biased? If so, will it overestimate or underestimate the true value?   Sampling strategies  A statistics student curious about the relationship between the amount of time students spend on social networking sites and their performance at school considers several sampling strategies. For each, name the sampling method proposed and any bias you might expect.   Randomly sample 40 students from the population, give them the survey, ask them to return it the next day.  Give out the survey only to friends, making sure each one fills it out.  Post a link to an online survey on Facebook and ask friends to fill it out.  Randomly sample 5 classes and ask a random sample of students from those classes to fill out the survey.    Reading the paper  Consider two news excerpts, one about smoking and dementia, and another about sleep disorders and bullying. For each, evaluate whether the conclusions are justified and what can actually be concluded from the studies described.   Researchers analyzed data on over 23,000 people aged 50-60 and found smokers were more likely to develop dementia. Can we conclude smoking causes dementia later in life? Explain.  A study collected survey data on children’s sleep habits and bullying behavior and found those with sleep problems were twice as likely to have disruptive behavior or bullying issues. Does this show sleep disorders lead to bullying? If not, how best to describe the conclusion?    Migraine and acupuncture, Part II  A randomized controlled study assigned migraine patients to acupuncture designed for migraines (treatment) or placebo acupuncture (control). Twenty-four hours later, patients reported whether they were pain free. Identify the explanatory and response variables.   Sinusitis and antibiotics, Part II  A study on acute sinusitis compared a 10-day antibiotic course (treatment) to a placebo (control), then asked patients if they experienced improvement in symptoms. Identify the explanatory and response variables.   Fisher’s irises  A data set contains sepal length and width, and petal length and width from three species of iris flowers (setosa, versicolor, virginica), with 50 flowers from each species.   How many cases are included?  How many numerical variables are included? Identify each and whether it is continuous or discrete.  How many categorical variables are included? List them and their levels.    Iris versicolor   Photo of a purple iris flower.     Smoking habits of UK residents  A survey was conducted to study the smoking habits of UK residents. A portion of the data matrix is shown with variables: sex, age, marital status, gross income, smoking status, and cigarettes per day on weekends and weekdays.   Subset of UK smoking survey    sex age marital grossIncome smoke amtWeekends amtWeekdays   1 Female 42 Single Under GBP 2,600 Yes 12 cig\/day 12 cig\/day  2 Male 44 Single GBP 10,400 to GBP 15,600 No N\/A N\/A  3 Male 53 Married Above GBP 36,400 Yes 6 cig\/day 6 cig\/day   1691 Male 40 Single GBP 2,600 to GBP 5,200 Yes 8 cig\/day 8 cig\/day     What does each row of the data matrix represent?  How many participants were included in the survey?  Indicate whether each variable is numerical or categorical. If numerical, state if continuous or discrete. If categorical, indicate if ordinal.    US Airports  A visualization shows the geographical distribution of airports in the contiguous United States, by ownership and usage type. Each observation is an airport.   Distribution of US airports by ownership and use   Maps showing public\/private ownership and use of airports across the US.     List the variables used in creating this visualization.  Indicate whether each variable is numerical or categorical. If numerical, state if continuous or discrete. If categorical, indicate if ordinal.    UN Votes  A visualization shows voting patterns in the United States, Canada, and Mexico in the UN General Assembly from 1946 to 2015, displaying the percentage of roll calls voting yes for various issues. Each observation is a country\/year pair.   UN General Assembly voting patterns   Trends of percent yes votes over time for several UN issues for three countries.     List the variables used in creating this visualization.  Indicate whether each variable is numerical or categorical. If numerical, state if continuous or discrete. If categorical, indicate if ordinal.     "
},
{
  "id": "p-39",
  "level": "2",
  "url": "sec-data-basics.html#p-39",
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
  "body": "Reading data from a data matrix  What is the grade of the first loan in ? And what is the home ownership status of the borrower for that first loan?   The loan's grade is B, and the borrower rents their residence.  "
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
  "id": "p-43",
  "level": "2",
  "url": "sec-data-basics.html#p-43",
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
  "body": "Organizing a gradebook  The grades for assignments, quizzes, and exams in a course are often recorded in a gradebook that takes the form of a data matrix. How might you organize grade data using a data matrix?   There are multiple strategies that can be followed. One common strategy is to have each student represented by a row, and then add a column for each assignment, quiz, or exam. Under this setup, it is easy to review a single line to understand a student's grade history. There should also be columns to include student information, such as one column to list student names.  "
},
{
  "id": "guided-practice-county-data-matrix",
  "level": "2",
  "url": "sec-data-basics.html#guided-practice-county-data-matrix",
  "type": "Checkpoint",
  "number": "1.2.5",
  "title": "Organizing county data.",
  "body": "Organizing county data  How might the county data described above be organized in a data matrix?   Each county may be viewed as a case, and there are eleven pieces of information recorded for each case. A table with 3,142 rows and 11 columns could hold these data, where each row represents a county and each column represents a particular piece of information.  "
},
{
  "id": "p-51",
  "level": "2",
  "url": "sec-data-basics.html#p-51",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "numerical "
},
{
  "id": "p-52",
  "level": "2",
  "url": "sec-data-basics.html#p-52",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "discrete continuous "
},
{
  "id": "p-53",
  "level": "2",
  "url": "sec-data-basics.html#p-53",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "categorical levels "
},
{
  "id": "p-54",
  "level": "2",
  "url": "sec-data-basics.html#p-54",
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
  "body": "Classifying experiment variables  An experiment is evaluating the effectiveness of a new drug in treating migraines. A group variable is used to indicate the experiment group for each patient: treatment or control. The num_migraines variable represents the number of migraines the patient experienced during a 3-month period. Classify each variable as either numerical or categorical.   The group variable can take just one of two group names, making it categorical. The num_migraines variable describes a count of the number of migraines, which is an outcome where basic arithmetic is sensible, which means this is numerical outcome; more specifically, since it represents a count, num_migraines is a discrete numerical variable.  "
},
{
  "id": "p-65",
  "level": "2",
  "url": "sec-data-basics.html#p-65",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Scatterplots "
},
{
  "id": "p-66",
  "level": "2",
  "url": "sec-data-basics.html#p-66",
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
  "body": "Air pollution and birth outcomes, study components  Researchers collected data to examine the relationship between air pollutants and preterm births in Southern California. During the study air pollution levels were measured by air quality monitoring stations. Length of gestation data were collected on 143,196 births between the years 1989 and 1993, and air pollution exposure during gestation was calculated for each birth. The analysis suggested that increased ambient PM 10 and, to a lesser degree, CO concentrations may be associated with the occurrence of preterm births.   Identify the main research question of the study.  Who are the subjects in this study, and how many are included?  What are the variables in the study? Identify each variable as numerical or categorical. If numerical, state whether the variable is discrete or continuous. If categorical, state whether the variable is ordinal.   "
},
{
  "id": "ex-buteyko-components",
  "level": "2",
  "url": "sec-data-basics.html#ex-buteyko-components",
  "type": "Exercise",
  "number": "1.2.4.2",
  "title": "Buteyko method, study components.",
  "body": "Buteyko method, study components  The Buteyko method is a shallow breathing technique developed by Konstantin Buteyko, a Russian doctor, in 1952. Anecdotal evidence suggests that the Buteyko method can reduce asthma symptoms and improve quality of life. In a scientific study to determine the effectiveness of this method, researchers recruited 600 asthma patients aged 18-69 who relied on medication for asthma treatment. These patients were randomly split into two research groups: one practiced the Buteyko method and the other did not. Patients were scored on quality of life, activity, asthma symptoms, and medication reduction on a scale from 0 to 10. On average, the participants in the Buteyko group experienced a significant reduction in asthma symptoms and an improvement in quality of life.   Identify the main research question of the study.  Who are the subjects in this study, and how many are included?  What are the variables in the study? Identify each variable as numerical or categorical. If numerical, state whether the variable is discrete or continuous. If categorical, state whether the variable is ordinal.   "
},
{
  "id": "ex-cheaters-components",
  "level": "2",
  "url": "sec-data-basics.html#ex-cheaters-components",
  "type": "Exercise",
  "number": "1.2.4.3",
  "title": "Cheaters, study components.",
  "body": "Cheaters, study components  Researchers studying the relationship between honesty, age and self-control conducted an experiment on 160 children between the ages of 5 and 15. Participants reported their age, sex, and whether they were an only child or not. The researchers asked each child to toss a fair coin in private and to record the outcome (white or black) on a paper sheet, and said they would only reward children who report white. The study found differences in cheating rates based on instructions and characteristics.   Identify the main research question of the study.  Who are the subjects in this study, and how many are included?  How many variables were recorded for each subject in the study in order to conclude these findings? State the variables and their types.   "
},
{
  "id": "ex-stealers-components",
  "level": "2",
  "url": "sec-data-basics.html#ex-stealers-components",
  "type": "Exercise",
  "number": "1.2.4.4",
  "title": "Stealers, study components.",
  "body": "Stealers, study components  In a study of the relationship between socio-economic class and unethical behavior, 129 University of California undergraduates at Berkeley were asked to identify themselves as having low or high social-class by comparing themselves to others with the most (least) money, most (least) education, and most (least) respected jobs. They were also presented with a jar of individually wrapped candies and informed that the candies were for children in a nearby laboratory, but that they could take some if they wanted. After completing some unrelated tasks, participants reported the number of candies they had taken. It was found that those who were identified as upper-class took more candy than others.   Identify the main research question of the study.  Who are the subjects in this study, and how many are included?  The study found that students who were identified as upper-class took more candy than others. How many variables were recorded for each subject in the study in order to conclude these findings? State the variables and their types.   "
},
{
  "id": "ex-relax-after-work",
  "level": "2",
  "url": "sec-data-basics.html#ex-relax-after-work",
  "type": "Exercise",
  "number": "1.2.4.5",
  "title": "Relaxing after work.",
  "body": "Relaxing after work  The General Social Survey asked the question, “After an average work day, about how many hours do you have to relax or pursue activities that you enjoy?” to a random sample of 1,155 Americans. The average relaxing time was found to be 1.65 hours. Determine which of the following is an observation, a variable, a sample statistic, or a population parameter.   An American in the sample.  Number of hours spent relaxing after an average work day.  1.65.  Average number of hours all Americans spend relaxing after an average work day.   "
},
{
  "id": "ex-cats-on-youtube",
  "level": "2",
  "url": "sec-data-basics.html#ex-cats-on-youtube",
  "type": "Exercise",
  "number": "1.2.4.6",
  "title": "Cats on YouTube.",
  "body": "Cats on YouTube  Suppose you want to estimate the percentage of videos on YouTube that are cat videos. It is impossible for you to watch all videos on YouTube so you use a random video picker to select 1000 videos for you. You find that 2% of these videos are cat videos. Determine which of the following is an observation, a variable, a sample statistic, or a population parameter.   Percentage of all videos on YouTube that are cat videos.  2%.  A video in your sample.  Whether or not a video is a cat video.   "
},
{
  "id": "ex-course-satisfaction",
  "level": "2",
  "url": "sec-data-basics.html#ex-course-satisfaction",
  "type": "Exercise",
  "number": "1.2.4.7",
  "title": "Course satisfaction across sections.",
  "body": "Course satisfaction across sections  A large college class has 160 students. All 160 students attend the lectures together, but the students are divided into 4 groups, each of 40 students, for lab sections administered by different teaching assistants. The professor wants to conduct a survey about how satisfied the students are with the course, and he believes that the lab section a student is in might affect the student's overall satisfaction with the course.   What type of study is this?  Suggest a sampling strategy for carrying out this study.   "
},
{
  "id": "ex-housing-proposal-dorms",
  "level": "2",
  "url": "sec-data-basics.html#ex-housing-proposal-dorms",
  "type": "Exercise",
  "number": "1.2.4.8",
  "title": "Housing proposal across dorms.",
  "body": "Housing proposal across dorms  On a large college campus first-year students and sophomores live in dorms located on the eastern part of the campus and juniors and seniors live in dorms located on the western part of the campus. Suppose you want to collect student opinions on a new housing structure the college administration is proposing and you want to make sure your survey equally represents opinions from students from all years.   What type of study is this?  Suggest a sampling strategy for carrying out this study.   "
},
{
  "id": "ex-internet-life-expectancy",
  "level": "2",
  "url": "sec-data-basics.html#ex-internet-life-expectancy",
  "type": "Exercise",
  "number": "1.2.4.9",
  "title": "Internet use and life expectancy.",
  "body": "Internet use and life expectancy  A study evaluated the relationship between estimated life expectancy at birth (as of 2014) and percentage of internet users (as of 2009) in 208 countries. A scatterplot shows life expectancy versus percent internet users.   Describe the relationship between life expectancy and percentage of internet users.  What type of study is this?  State a possible confounding variable that might explain this relationship and describe its potential effect.    Life expectancy versus internet use   Scatterplot of life expectancy at birth versus percent internet users for 208 countries.    "
},
{
  "id": "ex-stressed-out-part1",
  "level": "2",
  "url": "sec-data-basics.html#ex-stressed-out-part1",
  "type": "Exercise",
  "number": "1.2.4.10",
  "title": "Stressed out, Part I.",
  "body": "Stressed out, Part I  A study surveyed a random sample of otherwise healthy high school students and found that they are more likely to get muscle cramps when they are stressed. The study also noted that students drink more coffee and sleep less when they are stressed.   What type of study is this?  Can this study be used to conclude a causal relationship between increased stress and muscle cramps?  State possible confounding variables that might explain the observed relationship between increased stress and muscle cramps.   "
},
{
  "id": "ex-evaluate-sampling-methods",
  "level": "2",
  "url": "sec-data-basics.html#ex-evaluate-sampling-methods",
  "type": "Exercise",
  "number": "1.2.4.11",
  "title": "Evaluate sampling methods.",
  "body": "Evaluate sampling methods  A university wants to determine what fraction of its undergraduate student body support a new $25 annual fee to improve the student union. For each proposed method below, indicate whether the method is reasonable or not.   Survey a simple random sample of 500 students.  Stratify students by their field of study, then sample 10% of students from each stratum.  Cluster students by their ages (e.g. 18 years old in one cluster, 19 years old in one cluster, etc.), then randomly sample three clusters and survey all students in those clusters.   "
},
{
  "id": "ex-random-digit-dialing",
  "level": "2",
  "url": "sec-data-basics.html#ex-random-digit-dialing",
  "type": "Exercise",
  "number": "1.2.4.12",
  "title": "Random digit dialing.",
  "body": "Random digit dialing  The Gallup Poll uses a procedure called random digit dialing, which creates phone numbers based on a list of all area codes in America in conjunction with the associated number of residential households in each area code. Give a possible reason the Gallup Poll chooses to use random digit dialing instead of picking phone numbers from the phone book.  "
},
{
  "id": "ex-haters-gonna-hate",
  "level": "2",
  "url": "sec-data-basics.html#ex-haters-gonna-hate",
  "type": "Exercise",
  "number": "1.2.4.13",
  "title": "Haters are gonna hate, study confirms.",
  "body": "Haters are gonna hate, study confirms  A study asked a group of 200 randomly sampled men and women to evaluate how they felt about various subjects to measure their attitude towards mostly independent stimuli, then presented information about a fictitious microwave oven. People who reacted positively to the subjects also tended to react positively to the microwave oven, and those who reacted negatively tended to react negatively to it.   What are the cases?  What are the response variables?  What are the explanatory variables?  Does the study employ random sampling?  Is this an observational study or an experiment? Explain.  Can we establish a causal link between the explanatory and response variables?  Can the results of the study be generalized to the population at large?   "
},
{
  "id": "ex-family-size-bias",
  "level": "2",
  "url": "sec-data-basics.html#ex-family-size-bias",
  "type": "Exercise",
  "number": "1.2.4.14",
  "title": "Family size.",
  "body": "Family size  Suppose we want to estimate household size. If we select students at random at an elementary school and ask them what their family size is, will this be a good measure of household size? Or will our average be biased? If so, will it overestimate or underestimate the true value?  "
},
{
  "id": "ex-sampling-strategies-social-media",
  "level": "2",
  "url": "sec-data-basics.html#ex-sampling-strategies-social-media",
  "type": "Exercise",
  "number": "1.2.4.15",
  "title": "Sampling strategies.",
  "body": "Sampling strategies  A statistics student curious about the relationship between the amount of time students spend on social networking sites and their performance at school considers several sampling strategies. For each, name the sampling method proposed and any bias you might expect.   Randomly sample 40 students from the population, give them the survey, ask them to return it the next day.  Give out the survey only to friends, making sure each one fills it out.  Post a link to an online survey on Facebook and ask friends to fill it out.  Randomly sample 5 classes and ask a random sample of students from those classes to fill out the survey.   "
},
{
  "id": "ex-reading-the-paper",
  "level": "2",
  "url": "sec-data-basics.html#ex-reading-the-paper",
  "type": "Exercise",
  "number": "1.2.4.16",
  "title": "Reading the paper.",
  "body": "Reading the paper  Consider two news excerpts, one about smoking and dementia, and another about sleep disorders and bullying. For each, evaluate whether the conclusions are justified and what can actually be concluded from the studies described.   Researchers analyzed data on over 23,000 people aged 50-60 and found smokers were more likely to develop dementia. Can we conclude smoking causes dementia later in life? Explain.  A study collected survey data on children’s sleep habits and bullying behavior and found those with sleep problems were twice as likely to have disruptive behavior or bullying issues. Does this show sleep disorders lead to bullying? If not, how best to describe the conclusion?   "
},
{
  "id": "ex-migraine-exp-response",
  "level": "2",
  "url": "sec-data-basics.html#ex-migraine-exp-response",
  "type": "Exercise",
  "number": "1.2.4.17",
  "title": "Migraine and acupuncture, Part II.",
  "body": "Migraine and acupuncture, Part II  A randomized controlled study assigned migraine patients to acupuncture designed for migraines (treatment) or placebo acupuncture (control). Twenty-four hours later, patients reported whether they were pain free. Identify the explanatory and response variables.  "
},
{
  "id": "ex-sinusitis-exp-response",
  "level": "2",
  "url": "sec-data-basics.html#ex-sinusitis-exp-response",
  "type": "Exercise",
  "number": "1.2.4.18",
  "title": "Sinusitis and antibiotics, Part II.",
  "body": "Sinusitis and antibiotics, Part II  A study on acute sinusitis compared a 10-day antibiotic course (treatment) to a placebo (control), then asked patients if they experienced improvement in symptoms. Identify the explanatory and response variables.  "
},
{
  "id": "ex-fishers-irises",
  "level": "2",
  "url": "sec-data-basics.html#ex-fishers-irises",
  "type": "Exercise",
  "number": "1.2.4.19",
  "title": "Fisher’s irises.",
  "body": "Fisher’s irises  A data set contains sepal length and width, and petal length and width from three species of iris flowers (setosa, versicolor, virginica), with 50 flowers from each species.   How many cases are included?  How many numerical variables are included? Identify each and whether it is continuous or discrete.  How many categorical variables are included? List them and their levels.    Iris versicolor   Photo of a purple iris flower.    "
},
{
  "id": "ex-smoking-habits-uk",
  "level": "2",
  "url": "sec-data-basics.html#ex-smoking-habits-uk",
  "type": "Exercise",
  "number": "1.2.4.20",
  "title": "Smoking habits of UK residents.",
  "body": "Smoking habits of UK residents  A survey was conducted to study the smoking habits of UK residents. A portion of the data matrix is shown with variables: sex, age, marital status, gross income, smoking status, and cigarettes per day on weekends and weekdays.   Subset of UK smoking survey    sex age marital grossIncome smoke amtWeekends amtWeekdays   1 Female 42 Single Under GBP 2,600 Yes 12 cig\/day 12 cig\/day  2 Male 44 Single GBP 10,400 to GBP 15,600 No N\/A N\/A  3 Male 53 Married Above GBP 36,400 Yes 6 cig\/day 6 cig\/day   1691 Male 40 Single GBP 2,600 to GBP 5,200 Yes 8 cig\/day 8 cig\/day     What does each row of the data matrix represent?  How many participants were included in the survey?  Indicate whether each variable is numerical or categorical. If numerical, state if continuous or discrete. If categorical, indicate if ordinal.   "
},
{
  "id": "ex-us-airports",
  "level": "2",
  "url": "sec-data-basics.html#ex-us-airports",
  "type": "Exercise",
  "number": "1.2.4.21",
  "title": "US Airports.",
  "body": "US Airports  A visualization shows the geographical distribution of airports in the contiguous United States, by ownership and usage type. Each observation is an airport.   Distribution of US airports by ownership and use   Maps showing public\/private ownership and use of airports across the US.     List the variables used in creating this visualization.  Indicate whether each variable is numerical or categorical. If numerical, state if continuous or discrete. If categorical, indicate if ordinal.   "
},
{
  "id": "ex-un-votes",
  "level": "2",
  "url": "sec-data-basics.html#ex-un-votes",
  "type": "Exercise",
  "number": "1.2.4.22",
  "title": "UN Votes.",
  "body": "UN Votes  A visualization shows voting patterns in the United States, Canada, and Mexico in the UN General Assembly from 1946 to 2015, displaying the percentage of roll calls voting yes for various issues. Each observation is a country\/year pair.   UN General Assembly voting patterns   Trends of percent yes votes over time for several UN issues for three countries.     List the variables used in creating this visualization.  Indicate whether each variable is numerical or categorical. If numerical, state if continuous or discrete. If categorical, indicate if ordinal.   "
},
{
  "id": "sec-sampling-principles",
  "level": "1",
  "url": "sec-sampling-principles.html",
  "type": "Section",
  "number": "1.3",
  "title": "Sampling principles and strategies",
  "body": " Sampling principles and strategies   The first step in research is to pose a clear question, then decide what subjects to study and how to collect reliable data. Careful sampling is essential for trustworthy conclusions.    Populations and samples  Each research question targets a population. Often it is too expensive to measure every case, so we select a sample—a subset of the population—to estimate the quantity of interest.   Identifying populations   Consider: (1) the average mercury content in Atlantic swordfish, (2) the average time to degree for Duke undergrads in the last 5 years, (3) whether a new drug reduces deaths in patients with severe heart disease. Each has a population and cases; samples are used to estimate population features.    Identifying populations  For questions (2) and (3) above, identify the target population and what represents a single case.   Graduated Duke undergrads in the last five years; each graduate is a case. People with severe heart disease; each patient is a case.     Anecdotal evidence  Conclusions based on a few striking cases—anecdotal evidence—may not represent the population. Such cases are memorable but rarely typical.   Anecdotal evidence can mislead   Snowy trees after a storm; one storm in one region says little about global climate.     Be cautious with anecdotal evidence: it may be true but not representative.     Sampling from a population  We typically use a random sample to avoid bias. In a simple random sample each case has equal chance of selection and selection of one case gives no information about others.   Selecting a random sample   Randomly selecting cases from a population to form a sample.     Unintentional bias   Letting a nutrition major hand-pick graduates might overrepresent health-related fields. Hand selection risks bias even when unintended.     Biased selection   Sampling only from a subset (e.g., health-related majors) introduces bias.    Non-response can also bias results: if only a fraction respond, the sample may not represent the population.   Effect of non-response   Surveys may only capture a subset of the intended population.    Interpreting online reviews  Product ratings online come from those who choose to post. If 50% of reviews are negative, does that imply 50% of buyers are dissatisfied?   Likely not; reviewers are self-selected and may be more motivated when dissatisfied, creating negative bias.     Observational studies  Observational data arise without assigning treatments. They can show association but cannot alone establish causation due to possible confounding variables.  Sunscreen and skin cancer  Suppose an observational study finds sunscreen use associated with higher skin cancer. Does sunscreen cause cancer?   No. Sun exposure confounds: more sun leads to both more sunscreen and higher cancer risk.   Confounding variables affect both explanatory and response variables. Observational studies may be prospective (following subjects forward) or retrospective (using past records).    Four sampling methods  Randomness underlies most statistical methods. Common designs:   Simple random sample: every case equally likely, independent selection.  Stratified sample: divide into similar strata, then sample within each.  Cluster sample: divide into clusters, sample clusters, include all cases in chosen clusters.  Multistage sample: sample clusters, then sample within clusters.    Simple random vs. stratified sampling   Comparison of selecting individuals directly versus sampling within strata.     Cluster and multistage sampling   Sampling entire clusters or sampling within selected clusters.     Choosing a sampling design   Estimating malaria rate across 30 similar villages: cluster or multistage sampling (select villages, then people) is cost-effective and yields reliable estimates with appropriate analysis.      Exercises   Air pollution and birth outcomes, scope of inference  For the air pollution and preterm births study: identify population and sample; discuss generalizability and causality.   Cheaters, scope of inference  For the honesty study on 160 children: identify population and sample; discuss generalizability and causality.   Buteyko method, scope of inference  For the Buteyko asthma study: identify population and sample; discuss generalizability and causality.   Stealers, scope of inference  For the socio-economic class and candy study: identify population and sample; discuss generalizability and causality.   Relaxing after work  Classify observation, variable, statistic, parameter for the relaxing time survey (mean 1.65 hours).   Cats on YouTube  Classify observation, variable, statistic, parameter for estimating percent cat videos.   Course satisfaction across sections  Large class with four lab sections: identify study type and propose sampling strategy.   Housing proposal across dorms  Survey opinions across east\/west campus dorms ensuring equal year representation: identify study type and sampling plan.   Internet use and life expectancy  Interpret the life expectancy vs. internet use scatterplot; identify study type and a confounder.   Stressed out, Part I  Stress and muscle cramps observational study: study type, causality, possible confounders.   Evaluate sampling methods  Assess reasonableness of three proposed sampling designs for a student fee survey.   Random digit dialing  Why Gallup uses random digit dialing instead of the phone book.   Haters are gonna hate, study confirms  Dispositional attitude study with fake microwave reviews: identify cases, variables, sampling, design, causality, generalization.   Family size  Surveying elementary students about family size: is the estimate biased and in which direction?   Sampling strategies  Classify four proposed sampling methods for a social networking survey and discuss bias.   Reading the paper  Evaluate conclusions in two news articles: smoking and dementia; sleep disorders and bullying.    "
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
  "body": "Identifying populations  For questions (2) and (3) above, identify the target population and what represents a single case.   Graduated Duke undergrads in the last five years; each graduate is a case. People with severe heart disease; each patient is a case.  "
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
  "body": "Interpreting online reviews  Product ratings online come from those who choose to post. If 50% of reviews are negative, does that imply 50% of buyers are dissatisfied?   Likely not; reviewers are self-selected and may be more motivated when dissatisfied, creating negative bias.  "
},
{
  "id": "gp-sunscreen-confounding",
  "level": "2",
  "url": "sec-sampling-principles.html#gp-sunscreen-confounding",
  "type": "Checkpoint",
  "number": "1.3.9",
  "title": "Sunscreen and skin cancer.",
  "body": "Sunscreen and skin cancer  Suppose an observational study finds sunscreen use associated with higher skin cancer. Does sunscreen cause cancer?   No. Sun exposure confounds: more sun leads to both more sunscreen and higher cancer risk.  "
},
{
  "id": "p-162",
  "level": "2",
  "url": "sec-sampling-principles.html#p-162",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Simple random sample: "
},
{
  "id": "p-163",
  "level": "2",
  "url": "sec-sampling-principles.html#p-163",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Stratified sample: "
},
{
  "id": "p-164",
  "level": "2",
  "url": "sec-sampling-principles.html#p-164",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cluster sample: "
},
{
  "id": "p-165",
  "level": "2",
  "url": "sec-sampling-principles.html#p-165",
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
  "body": "Air pollution and birth outcomes, scope of inference  For the air pollution and preterm births study: identify population and sample; discuss generalizability and causality.  "
},
{
  "id": "ex-cheaters-scope",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-cheaters-scope",
  "type": "Exercise",
  "number": "1.3.6.2",
  "title": "Cheaters, scope of inference.",
  "body": "Cheaters, scope of inference  For the honesty study on 160 children: identify population and sample; discuss generalizability and causality.  "
},
{
  "id": "ex-buteyko-scope",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-buteyko-scope",
  "type": "Exercise",
  "number": "1.3.6.3",
  "title": "Buteyko method, scope of inference.",
  "body": "Buteyko method, scope of inference  For the Buteyko asthma study: identify population and sample; discuss generalizability and causality.  "
},
{
  "id": "ex-stealers-scope",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-stealers-scope",
  "type": "Exercise",
  "number": "1.3.6.4",
  "title": "Stealers, scope of inference.",
  "body": "Stealers, scope of inference  For the socio-economic class and candy study: identify population and sample; discuss generalizability and causality.  "
},
{
  "id": "ex-relax-after-work-definitions",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-relax-after-work-definitions",
  "type": "Exercise",
  "number": "1.3.6.5",
  "title": "Relaxing after work.",
  "body": "Relaxing after work  Classify observation, variable, statistic, parameter for the relaxing time survey (mean 1.65 hours).  "
},
{
  "id": "ex-cats-on-youtube-definitions",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-cats-on-youtube-definitions",
  "type": "Exercise",
  "number": "1.3.6.6",
  "title": "Cats on YouTube.",
  "body": "Cats on YouTube  Classify observation, variable, statistic, parameter for estimating percent cat videos.  "
},
{
  "id": "ex-course-satisfaction-sections",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-course-satisfaction-sections",
  "type": "Exercise",
  "number": "1.3.6.7",
  "title": "Course satisfaction across sections.",
  "body": "Course satisfaction across sections  Large class with four lab sections: identify study type and propose sampling strategy.  "
},
{
  "id": "ex-housing-proposal",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-housing-proposal",
  "type": "Exercise",
  "number": "1.3.6.8",
  "title": "Housing proposal across dorms.",
  "body": "Housing proposal across dorms  Survey opinions across east\/west campus dorms ensuring equal year representation: identify study type and sampling plan.  "
},
{
  "id": "ex-internet-life-expectancy-scope",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-internet-life-expectancy-scope",
  "type": "Exercise",
  "number": "1.3.6.9",
  "title": "Internet use and life expectancy.",
  "body": "Internet use and life expectancy  Interpret the life expectancy vs. internet use scatterplot; identify study type and a confounder.  "
},
{
  "id": "ex-stressed-out-observational",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-stressed-out-observational",
  "type": "Exercise",
  "number": "1.3.6.10",
  "title": "Stressed out, Part I.",
  "body": "Stressed out, Part I  Stress and muscle cramps observational study: study type, causality, possible confounders.  "
},
{
  "id": "ex-evaluate-sampling-methods-union",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-evaluate-sampling-methods-union",
  "type": "Exercise",
  "number": "1.3.6.11",
  "title": "Evaluate sampling methods.",
  "body": "Evaluate sampling methods  Assess reasonableness of three proposed sampling designs for a student fee survey.  "
},
{
  "id": "ex-random-digit-dialing-gallup",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-random-digit-dialing-gallup",
  "type": "Exercise",
  "number": "1.3.6.12",
  "title": "Random digit dialing.",
  "body": "Random digit dialing  Why Gallup uses random digit dialing instead of the phone book.  "
},
{
  "id": "ex-haters-scope",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-haters-scope",
  "type": "Exercise",
  "number": "1.3.6.13",
  "title": "Haters are gonna hate, study confirms.",
  "body": "Haters are gonna hate, study confirms  Dispositional attitude study with fake microwave reviews: identify cases, variables, sampling, design, causality, generalization.  "
},
{
  "id": "ex-family-size-bias-question",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-family-size-bias-question",
  "type": "Exercise",
  "number": "1.3.6.14",
  "title": "Family size.",
  "body": "Family size  Surveying elementary students about family size: is the estimate biased and in which direction?  "
},
{
  "id": "ex-sampling-strategies-social",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-sampling-strategies-social",
  "type": "Exercise",
  "number": "1.3.6.15",
  "title": "Sampling strategies.",
  "body": "Sampling strategies  Classify four proposed sampling methods for a social networking survey and discuss bias.  "
},
{
  "id": "ex-reading-paper",
  "level": "2",
  "url": "sec-sampling-principles.html#ex-reading-paper",
  "type": "Exercise",
  "number": "1.3.6.16",
  "title": "Reading the paper.",
  "body": "Reading the paper  Evaluate conclusions in two news articles: smoking and dementia; sleep disorders and bullying.  "
},
{
  "id": "sec-experiments",
  "level": "1",
  "url": "sec-experiments.html",
  "type": "Section",
  "number": "1.4",
  "title": "Experiments",
  "body": " Experiments   In experiments, researchers assign treatments to cases. Randomized experiments are the gold standard for establishing causation.    Principles of experimental design  Four core principles:   Controlling: hold other factors constant across groups.  Randomization: randomly assign cases to treatments to balance unmeasured factors.  Replication: use enough cases (and replicate studies) to estimate effects precisely.  Blocking: when a known factor affects the response, group by that factor and randomize within blocks.    Blocking on patient risk   Patients split into low\/high risk blocks, then randomized within blocks to control and treatment.      Reducing bias in human experiments  To avoid placebo and observer effects, patients are blinded to treatment via placebos; double-blind designs also blind caregivers\/researchers interacting with patients.  Blinding in the stent study  Was the stent study an experiment? Was it blind or double-blind?   It was an experiment (researchers assigned treatments). It was not blind, so not double-blind.   Placebos via sham surgery  Could the stent study have used a placebo? What would it look like?   A sham surgery—performing surgical steps without implanting the stent—could serve as a placebo, though with ethical considerations.     Exercises  Light and exam performance  Design: compare lighting types on exam performance, blocking by sex. Identify response, explanatory variable (with levels), and blocking variable.   Vitamin supplements  Study with placebo, 1g, 3g vitamin C, 3g vitamin C plus additives; appearance identical. Nurses know assignments; assessors are blinded. No significant differences found.   Experiment or observational?  Explanatory and response variables?  Were patients blinded?  Was it double-blind?  Does non-adherence introduce confounding?    Light, noise, and exam performance  Design tests light (3 levels) and noise (3 levels) on exam performance, blocking by sex.   What type of study?  How many factors? List factors and levels.  Role of sex variable?    Music and learning  Outline an experiment comparing study with no music, instrumental music, or music with lyrics.   Soda preference  Outline an experiment to compare regular Coke vs. Diet Coke preference.   Exercise and mental health  A stratified randomized study assigns half of each age group (18-30, 31-40, 41-55) to exercise twice a week and half to no exercise; mental health measured pre\/post.   Study type?  Treatment and control groups?  Is blocking used? What variable?  Is blinding used?  Can results establish causation and generalize? Explain.  Any reservations about funding this study?     "
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
  "body": "Blinding in the stent study  Was the stent study an experiment? Was it blind or double-blind?   It was an experiment (researchers assigned treatments). It was not blind, so not double-blind.  "
},
{
  "id": "gp-sham-surgery",
  "level": "2",
  "url": "sec-experiments.html#gp-sham-surgery",
  "type": "Checkpoint",
  "number": "1.4.3",
  "title": "Placebos via sham surgery.",
  "body": "Placebos via sham surgery  Could the stent study have used a placebo? What would it look like?   A sham surgery—performing surgical steps without implanting the stent—could serve as a placebo, though with ethical considerations.  "
},
{
  "id": "ex-light-exam-performance",
  "level": "2",
  "url": "sec-experiments.html#ex-light-exam-performance",
  "type": "Exercise",
  "number": "1.4.3.1",
  "title": "Light and exam performance.",
  "body": "Light and exam performance  Design: compare lighting types on exam performance, blocking by sex. Identify response, explanatory variable (with levels), and blocking variable.  "
},
{
  "id": "ex-vitamin-supplement",
  "level": "2",
  "url": "sec-experiments.html#ex-vitamin-supplement",
  "type": "Exercise",
  "number": "1.4.3.2",
  "title": "Vitamin supplements.",
  "body": "Vitamin supplements  Study with placebo, 1g, 3g vitamin C, 3g vitamin C plus additives; appearance identical. Nurses know assignments; assessors are blinded. No significant differences found.   Experiment or observational?  Explanatory and response variables?  Were patients blinded?  Was it double-blind?  Does non-adherence introduce confounding?   "
},
{
  "id": "ex-light-noise-exam",
  "level": "2",
  "url": "sec-experiments.html#ex-light-noise-exam",
  "type": "Exercise",
  "number": "1.4.3.3",
  "title": "Light, noise, and exam performance.",
  "body": "Light, noise, and exam performance  Design tests light (3 levels) and noise (3 levels) on exam performance, blocking by sex.   What type of study?  How many factors? List factors and levels.  Role of sex variable?   "
},
{
  "id": "ex-music-learning",
  "level": "2",
  "url": "sec-experiments.html#ex-music-learning",
  "type": "Exercise",
  "number": "1.4.3.4",
  "title": "Music and learning.",
  "body": "Music and learning  Outline an experiment comparing study with no music, instrumental music, or music with lyrics.  "
},
{
  "id": "ex-soda-preference",
  "level": "2",
  "url": "sec-experiments.html#ex-soda-preference",
  "type": "Exercise",
  "number": "1.4.3.5",
  "title": "Soda preference.",
  "body": "Soda preference  Outline an experiment to compare regular Coke vs. Diet Coke preference.  "
},
{
  "id": "ex-exercise-mental-health",
  "level": "2",
  "url": "sec-experiments.html#ex-exercise-mental-health",
  "type": "Exercise",
  "number": "1.4.3.6",
  "title": "Exercise and mental health.",
  "body": "Exercise and mental health  A stratified randomized study assigns half of each age group (18-30, 31-40, 41-55) to exercise twice a week and half to no exercise; mental health measured pre\/post.   Study type?  Treatment and control groups?  Is blocking used? What variable?  Is blinding used?  Can results establish causation and generalize? Explain.  Any reservations about funding this study?   "
},
{
  "id": "sec-review-exercises",
  "level": "1",
  "url": "sec-review-exercises.html",
  "type": "Section",
  "number": "1.5",
  "title": "Review exercises",
  "body": " Review exercises   Review exercises  Pet names  Seattle pet registry data show proportions of cats and dogs with each name. A scatterplot compares name popularity.   Cat vs. dog name popularity   Scatterplot of name proportions for cats and dogs; includes diagonal x=y line.     Experiment or observational study?  Most common dog and cat names?  Which names are more common for cats than dogs?  Is the relationship positive or negative? Interpret.    Stressed out, Part II  Half of subjects are randomly assigned to a stressful falling-elevator experience; half to no stress. Determine study type and whether causation can be concluded.   Chia seeds and weight loss  38 men and 38 women randomly assigned to chia seeds or placebo for 12 weeks; volunteers. No significant differences found.   Study type?  Experimental and control treatments?  Was blocking used? If so, what variable?  Was blinding used?  Can we make causal statements? Can we generalize?    City council survey  Household survey across diverse neighborhoods. For each sampling plan (simple random; stratified by neighborhood; cluster; multistage; convenience), name the method and discuss pros\/cons.   Flawed reasoning  Identify flaws and improvements in three scenarios: parent questionnaires on work schedule; follow-up survey with attrition; doctor surveying runners about joint problems.   Income and education in US counties  Scatterplot of per capita income vs. percent with bachelor’s degree for US counties.   Income vs. education   Scatterplot of income vs percent with bachelor’s degree for US counties.     Identify explanatory and response variables.  Describe the relationship and any unusual observations.  Can we conclude having a bachelor’s degree increases income?    Eat better, feel better  Randomized study of three interventions to increase fruit\/vegetable intake among university students; only the group given servings showed improved psychological well-being.   Study type?  Explanatory and response variables?  Can results be generalized?  Can results establish causality?  Revise a headline claiming “proof” accordingly.    Screens, teens, and psychological well-being  Large observational diary study of screen time and well-being for teens (n=17,247) with covariates. Concluded little clear evidence of harm.   Study type?  Explanatory variables?  Response variable?  Can results be generalized? Why?  Can results establish causation?    Stanford Open Policing  Summary table shows stops per year, search and arrest rates by county, state, and driver race.   List variables collected per traffic stop.  Classify each variable (numerical\/categorical; continuous\/discrete; ordinal).  For analyzing search rates by race, identify response and explanatory variables.    Space launches  Table shows launch outcomes by agency type (Private, State, Startup) and era (1957-1999, 2000-2018).   Variables collected per launch?  Classify each variable.  For studying success rates across agencies and time, identify response and explanatory variables.     "
},
{
  "id": "ex-pet-names",
  "level": "2",
  "url": "sec-review-exercises.html#ex-pet-names",
  "type": "Exercise",
  "number": "1.5.1",
  "title": "Pet names.",
  "body": "Pet names  Seattle pet registry data show proportions of cats and dogs with each name. A scatterplot compares name popularity.   Cat vs. dog name popularity   Scatterplot of name proportions for cats and dogs; includes diagonal x=y line.     Experiment or observational study?  Most common dog and cat names?  Which names are more common for cats than dogs?  Is the relationship positive or negative? Interpret.   "
},
{
  "id": "ex-stressed-out-part2",
  "level": "2",
  "url": "sec-review-exercises.html#ex-stressed-out-part2",
  "type": "Exercise",
  "number": "1.5.2",
  "title": "Stressed out, Part II.",
  "body": "Stressed out, Part II  Half of subjects are randomly assigned to a stressful falling-elevator experience; half to no stress. Determine study type and whether causation can be concluded.  "
},
{
  "id": "ex-chia-weight-loss",
  "level": "2",
  "url": "sec-review-exercises.html#ex-chia-weight-loss",
  "type": "Exercise",
  "number": "1.5.3",
  "title": "Chia seeds and weight loss.",
  "body": "Chia seeds and weight loss  38 men and 38 women randomly assigned to chia seeds or placebo for 12 weeks; volunteers. No significant differences found.   Study type?  Experimental and control treatments?  Was blocking used? If so, what variable?  Was blinding used?  Can we make causal statements? Can we generalize?   "
},
{
  "id": "ex-city-council-survey",
  "level": "2",
  "url": "sec-review-exercises.html#ex-city-council-survey",
  "type": "Exercise",
  "number": "1.5.4",
  "title": "City council survey.",
  "body": "City council survey  Household survey across diverse neighborhoods. For each sampling plan (simple random; stratified by neighborhood; cluster; multistage; convenience), name the method and discuss pros\/cons.  "
},
{
  "id": "ex-flawed-reasoning",
  "level": "2",
  "url": "sec-review-exercises.html#ex-flawed-reasoning",
  "type": "Exercise",
  "number": "1.5.5",
  "title": "Flawed reasoning.",
  "body": "Flawed reasoning  Identify flaws and improvements in three scenarios: parent questionnaires on work schedule; follow-up survey with attrition; doctor surveying runners about joint problems.  "
},
{
  "id": "ex-income-education-county",
  "level": "2",
  "url": "sec-review-exercises.html#ex-income-education-county",
  "type": "Exercise",
  "number": "1.5.6",
  "title": "Income and education in US counties.",
  "body": "Income and education in US counties  Scatterplot of per capita income vs. percent with bachelor’s degree for US counties.   Income vs. education   Scatterplot of income vs percent with bachelor’s degree for US counties.     Identify explanatory and response variables.  Describe the relationship and any unusual observations.  Can we conclude having a bachelor’s degree increases income?   "
},
{
  "id": "ex-eat-better-feel-better",
  "level": "2",
  "url": "sec-review-exercises.html#ex-eat-better-feel-better",
  "type": "Exercise",
  "number": "1.5.7",
  "title": "Eat better, feel better.",
  "body": "Eat better, feel better  Randomized study of three interventions to increase fruit\/vegetable intake among university students; only the group given servings showed improved psychological well-being.   Study type?  Explanatory and response variables?  Can results be generalized?  Can results establish causality?  Revise a headline claiming “proof” accordingly.   "
},
{
  "id": "ex-screen-time-well-being",
  "level": "2",
  "url": "sec-review-exercises.html#ex-screen-time-well-being",
  "type": "Exercise",
  "number": "1.5.8",
  "title": "Screens, teens, and psychological well-being.",
  "body": "Screens, teens, and psychological well-being  Large observational diary study of screen time and well-being for teens (n=17,247) with covariates. Concluded little clear evidence of harm.   Study type?  Explanatory variables?  Response variable?  Can results be generalized? Why?  Can results establish causation?   "
},
{
  "id": "ex-stanford-open-policing",
  "level": "2",
  "url": "sec-review-exercises.html#ex-stanford-open-policing",
  "type": "Exercise",
  "number": "1.5.9",
  "title": "Stanford Open Policing.",
  "body": "Stanford Open Policing  Summary table shows stops per year, search and arrest rates by county, state, and driver race.   List variables collected per traffic stop.  Classify each variable (numerical\/categorical; continuous\/discrete; ordinal).  For analyzing search rates by race, identify response and explanatory variables.   "
},
{
  "id": "ex-space-launches",
  "level": "2",
  "url": "sec-review-exercises.html#ex-space-launches",
  "type": "Exercise",
  "number": "1.5.10",
  "title": "Space launches.",
  "body": "Space launches  Table shows launch outcomes by agency type (Private, State, Startup) and era (1957-1999, 2000-2018).   Variables collected per launch?  Classify each variable.  For studying success rates across agencies and time, identify response and explanatory variables.   "
},
{
  "id": "sec-malaria-vaccine",
  "level": "1",
  "url": "sec-malaria-vaccine.html",
  "type": "Section",
  "number": "2.1",
  "title": "Case study: Malaria vaccine",
  "body": " Case study: Malaria vaccine   Left vs. right side ownership   Suppose students in class are split into left and right sides. Let $\\hat p_L$ and $\\hat p_R$ be the proportions owning an Apple product on each side. Would it be surprising if $\\hat p_L$ were not exactly equal to $\\hat p_R$?    They would likely be close but not exactly equal; small differences are expected by chance.    Independence assumption  If seating side and Apple ownership are unrelated, what assumption are we making about these variables?   We assume the variables are independent.    Variability within data  A clinical study tested a malaria vaccine (PfSPZ). Fourteen patients were randomized to receive the vaccine and six to a placebo. Nineteen weeks later all 20 were exposed to a drug-sensitive parasite strain so any infections could be treated effectively. Nine of the 14 vaccinated patients showed no infection, while all six placebo patients showed baseline signs of infection.   Summary results for the malaria vaccine experiment     Outcome  Infection  No infection    Vaccine  5  9  14    Placebo  6  0  6    Total  11  9  20     Study type  Is this an observational study or an experiment? What does that imply about causal conclusions?   It is an experiment (random assignment). Causal conclusions about the vaccine’s effect are appropriate.    What counts as convincing?   The observed infection rates were 35.7% for vaccine vs. 100% for placebo. Does this provide convincing evidence the vaccine works?    The large difference suggests effectiveness, but the small sample means the difference could be due to chance. We need to evaluate how likely such a gap is under no effect.    We compare two competing claims:   Independence model ( ): Treatment and outcome are independent; the 64.3% difference in infection rates arose by chance.  Alternative model ( ): Treatment and outcome are not independent; the vaccine affected infection rates.   If is true, 11 patients would be infected and 9 uninfected regardless of assignment, so any difference is random. If is true, we expect some real difference between groups.    Simulating the study  Assume the vaccine has no effect. To gauge how unusual the observed difference is, simulate new random assignments: write “infection” on 11 cards and “no infection” on 9 cards, shuffle, deal 14 to vaccine and 6 to placebo, and tabulate infection counts.   Simulation results under independence (one shuffle)     Outcome  Infection  No infection    Vaccine (sim.)  7  7  14    Placebo (sim.)  4  2  6    Total  11  9  20     Difference in a simulation  Compute the infection-rate difference for the simulation above (placebo minus vaccine). How does it compare to the observed 64.3% gap?   Difference is $4\/6 - 7\/14 \\approx 0.167$ (16.7%), much smaller than the observed 64.3% gap.     Checking for independence  Repeat the randomization many times by computer. The simulated differences (placebo rate minus vaccine rate) form a distribution centered near 0. Figure shows 100 simulations.   Differences from 100 simulations under independence.   Stacked dot plot of simulated infection-rate differences; only two simulations reach the observed 64.3% difference.     How rare is 64.3%?   According to the simulations, how often does a difference of at least 64.3% occur?    About 2% of simulations reach that difference—rare under independence.    The rare occurrence of such a large difference leaves two options:   : Vaccine has no effect and we observed a rare chance event.  : Vaccine reduces infections; the observed difference reflects efficacy.   In formal studies we typically reject when faced with such rare outcomes. Here we conclude the data provide strong evidence the vaccine offers protection in this clinical setting.    Exercises  Side effects of Avandia  A retrospective study compared cardiovascular problems between rosiglitazone (Avandia) and pioglitazone (Actos) users (counts below).        Yes  No      Treatment  Rosiglitazone  2,593  65,000    Pioglitazone  5,386  154,592     Total  7,979  219,592       Assess true\/false for four claims (rate comparisons, causation, chance).  What proportion of all patients had cardiovascular problems?  If treatment and outcome were independent, expected rosiglitazone problems?  A randomization simulation produced a histogram of rosiglitazone problem counts. Use it to identify claims, direction supporting $H_A$, and what the simulation suggests.    Heart transplants  Stanford heart-transplant program: control 34 patients (30 died), treatment 69 (45 died). Plots show survival mosaic and survival-time box plots; a randomization dotplot compares differences.   From the mosaic, is survival independent of transplant? Explain.  What do the box plots suggest about efficacy?  Compute death proportions in treatment vs. control.  Fill blanks for a card-shuffle randomization description; what do simulation results indicate about effectiveness?     "
},
{
  "id": "ex-left-right-apple",
  "level": "2",
  "url": "sec-malaria-vaccine.html#ex-left-right-apple",
  "type": "Example",
  "number": "2.1.1",
  "title": "Left vs. right side ownership.",
  "body": " Left vs. right side ownership   Suppose students in class are split into left and right sides. Let $\\hat p_L$ and $\\hat p_R$ be the proportions owning an Apple product on each side. Would it be surprising if $\\hat p_L$ were not exactly equal to $\\hat p_R$?    They would likely be close but not exactly equal; small differences are expected by chance.   "
},
{
  "id": "ex-apple-independence",
  "level": "2",
  "url": "sec-malaria-vaccine.html#ex-apple-independence",
  "type": "Checkpoint",
  "number": "2.1.2",
  "title": "Independence assumption.",
  "body": "Independence assumption  If seating side and Apple ownership are unrelated, what assumption are we making about these variables?   We assume the variables are independent.  "
},
{
  "id": "tbl-malaria-summary",
  "level": "2",
  "url": "sec-malaria-vaccine.html#tbl-malaria-summary",
  "type": "Table",
  "number": "2.1.3",
  "title": "Summary results for the malaria vaccine experiment",
  "body": " Summary results for the malaria vaccine experiment     Outcome  Infection  No infection    Vaccine  5  9  14    Placebo  6  0  6    Total  11  9  20    "
},
{
  "id": "ex-malaria-study-type",
  "level": "2",
  "url": "sec-malaria-vaccine.html#ex-malaria-study-type",
  "type": "Checkpoint",
  "number": "2.1.4",
  "title": "Study type.",
  "body": "Study type  Is this an observational study or an experiment? What does that imply about causal conclusions?   It is an experiment (random assignment). Causal conclusions about the vaccine’s effect are appropriate.  "
},
{
  "id": "ex-malaria-evidence",
  "level": "2",
  "url": "sec-malaria-vaccine.html#ex-malaria-evidence",
  "type": "Example",
  "number": "2.1.5",
  "title": "What counts as convincing?",
  "body": " What counts as convincing?   The observed infection rates were 35.7% for vaccine vs. 100% for placebo. Does this provide convincing evidence the vaccine works?    The large difference suggests effectiveness, but the small sample means the difference could be due to chance. We need to evaluate how likely such a gap is under no effect.   "
},
{
  "id": "tbl-malaria-sim1",
  "level": "2",
  "url": "sec-malaria-vaccine.html#tbl-malaria-sim1",
  "type": "Table",
  "number": "2.1.6",
  "title": "Simulation results under independence (one shuffle)",
  "body": " Simulation results under independence (one shuffle)     Outcome  Infection  No infection    Vaccine (sim.)  7  7  14    Placebo (sim.)  4  2  6    Total  11  9  20    "
},
{
  "id": "ex-malaria-sim-diff",
  "level": "2",
  "url": "sec-malaria-vaccine.html#ex-malaria-sim-diff",
  "type": "Checkpoint",
  "number": "2.1.7",
  "title": "Difference in a simulation.",
  "body": "Difference in a simulation  Compute the infection-rate difference for the simulation above (placebo minus vaccine). How does it compare to the observed 64.3% gap?   Difference is $4\/6 - 7\/14 \\approx 0.167$ (16.7%), much smaller than the observed 64.3% gap.  "
},
{
  "id": "fig-malaria-rand-dot-plot",
  "level": "2",
  "url": "sec-malaria-vaccine.html#fig-malaria-rand-dot-plot",
  "type": "Figure",
  "number": "2.1.8",
  "title": "",
  "body": " Differences from 100 simulations under independence.   Stacked dot plot of simulated infection-rate differences; only two simulations reach the observed 64.3% difference.   "
},
{
  "id": "ex-malaria-rare",
  "level": "2",
  "url": "sec-malaria-vaccine.html#ex-malaria-rare",
  "type": "Example",
  "number": "2.1.9",
  "title": "How rare is 64.3%?",
  "body": " How rare is 64.3%?   According to the simulations, how often does a difference of at least 64.3% occur?    About 2% of simulations reach that difference—rare under independence.   "
},
{
  "id": "ex-randomization-avandia",
  "level": "2",
  "url": "sec-malaria-vaccine.html#ex-randomization-avandia",
  "type": "Exercise",
  "number": "2.1.4.1",
  "title": "Side effects of Avandia.",
  "body": "Side effects of Avandia  A retrospective study compared cardiovascular problems between rosiglitazone (Avandia) and pioglitazone (Actos) users (counts below).        Yes  No      Treatment  Rosiglitazone  2,593  65,000    Pioglitazone  5,386  154,592     Total  7,979  219,592       Assess true\/false for four claims (rate comparisons, causation, chance).  What proportion of all patients had cardiovascular problems?  If treatment and outcome were independent, expected rosiglitazone problems?  A randomization simulation produced a histogram of rosiglitazone problem counts. Use it to identify claims, direction supporting $H_A$, and what the simulation suggests.   "
},
{
  "id": "ex-randomization-heart-transplant",
  "level": "2",
  "url": "sec-malaria-vaccine.html#ex-randomization-heart-transplant",
  "type": "Exercise",
  "number": "2.1.4.2",
  "title": "Heart transplants.",
  "body": "Heart transplants  Stanford heart-transplant program: control 34 patients (30 died), treatment 69 (45 died). Plots show survival mosaic and survival-time box plots; a randomization dotplot compares differences.   From the mosaic, is survival independent of transplant? Explain.  What do the box plots suggest about efficacy?  Compute death proportions in treatment vs. control.  Fill blanks for a card-shuffle randomization description; what do simulation results indicate about effectiveness?   "
},
{
  "id": "sec-categorical-data",
  "level": "1",
  "url": "sec-categorical-data.html",
  "type": "Section",
  "number": "2.2",
  "title": "Considering categorical data",
  "body": " Considering categorical data  Categorical summaries often rely on contingency tables and mosaic\/bar\/pie displays. Use these exercises to practice reading and interpreting such plots.   Exercises  Antibiotic use in children  Medical conditions of children in a tracheitis study are shown in bar and pie charts.   Pre-existing conditions      Features visible in the bar plot but not the pie?  Features visible in the pie but not the bar?  Which graph would you prefer for these data?    Views on immigration  Contingency table: political ideology vs. views on whether undocumented workers should (i) apply for citizenship, (ii) guest worker only, (iii) leave the country, or (iv) not sure.        Conservative  Moderate  Liberal      Response  Apply for citizenship  57  120  101    Guest worker  121  113  28    Leave the country  179  126  45    Not sure  15  4  1     Total  372  363  175       % identifying as conservative?  % favoring citizenship option?  % conservative and favor citizenship?  Among conservatives\/moderates\/liberals, % favoring citizenship?  Do ideology and view appear independent?    Views on the DREAM Act  Mosaic plot: political ideology vs. support for DREAM Act.   DREAM Act support by ideology    Do the variables appear independent? Explain.   Raise taxes  Mosaic plot: political affiliation vs. opinion on raising taxes on rich vs. poor vs. not sure.   Tax views by party    Do affiliation and tax views appear independent? Explain.    "
},
{
  "id": "ex-antibiotic-use-children",
  "level": "2",
  "url": "sec-categorical-data.html#ex-antibiotic-use-children",
  "type": "Exercise",
  "number": "2.2.1",
  "title": "Antibiotic use in children.",
  "body": "Antibiotic use in children  Medical conditions of children in a tracheitis study are shown in bar and pie charts.   Pre-existing conditions      Features visible in the bar plot but not the pie?  Features visible in the pie but not the bar?  Which graph would you prefer for these data?   "
},
{
  "id": "ex-immigration-views",
  "level": "2",
  "url": "sec-categorical-data.html#ex-immigration-views",
  "type": "Exercise",
  "number": "2.2.2",
  "title": "Views on immigration.",
  "body": "Views on immigration  Contingency table: political ideology vs. views on whether undocumented workers should (i) apply for citizenship, (ii) guest worker only, (iii) leave the country, or (iv) not sure.        Conservative  Moderate  Liberal      Response  Apply for citizenship  57  120  101    Guest worker  121  113  28    Leave the country  179  126  45    Not sure  15  4  1     Total  372  363  175       % identifying as conservative?  % favoring citizenship option?  % conservative and favor citizenship?  Among conservatives\/moderates\/liberals, % favoring citizenship?  Do ideology and view appear independent?   "
},
{
  "id": "ex-dream-act-mosaic",
  "level": "2",
  "url": "sec-categorical-data.html#ex-dream-act-mosaic",
  "type": "Exercise",
  "number": "2.2.3",
  "title": "Views on the DREAM Act.",
  "body": "Views on the DREAM Act  Mosaic plot: political ideology vs. support for DREAM Act.   DREAM Act support by ideology    Do the variables appear independent? Explain.  "
},
{
  "id": "ex-raise-taxes-mosaic",
  "level": "2",
  "url": "sec-categorical-data.html#ex-raise-taxes-mosaic",
  "type": "Exercise",
  "number": "2.2.4",
  "title": "Raise taxes.",
  "body": "Raise taxes  Mosaic plot: political affiliation vs. opinion on raising taxes on rich vs. poor vs. not sure.   Tax views by party    Do affiliation and tax views appear independent? Explain.  "
},
{
  "id": "sec-numerical-data",
  "level": "1",
  "url": "sec-numerical-data.html",
  "type": "Section",
  "number": "2.3",
  "title": "Examining numerical data",
  "body": " Examining numerical data  These exercises review associations, center and spread, robustness, shapes, and transformations for numerical variables.   Exercises  Mammal life spans  Scatterplot of gestation length (days) vs. life span (years) for 62 mammals.   Gestation vs. life span     Association direction\/shape?  If axes reversed, what association?  Are variables independent?    Associations  Classify four scatterplots (positive\/negative\/none; linear\/nonlinear).   Unlabeled scatterplots     Reproducing bacteria  Sketch number of bacterial cells over time in a dish with limited capacity (logistic growth).   Office productivity  Sketch productivity vs. stress (low at extremes, higher moderate).   Parameters and statistics  Identify sample mean vs. claimed population mean in two scenarios (Halloween spending; GPA).   Sleeping in college  Sample mean 6.25 hrs (n=25) vs. claimed population mean 5.5 hrs: identify each.   Days off at a mining plant  Manager wants to fire 10 workers to raise average vacation days (current avg 35). Fire which workers to increase mean?   Medians and IQRs  Compare four distribution pairs (give relative medians\/IQRs).   Means and SDs  Compare means and SDs for four distribution pairs.   Mix-and-match  Match three histograms to three box plots; describe distributions.   Histograms and box plots     Air quality  Relative frequency histogram of AQI (n=91 days, Durham NC).   AQI distribution     Estimate median.  Is mean likely above\/below median?  Estimate Q1, Q3, IQR.  Any unusually low\/high days?    Median vs. mean  Estimate median from histogram (400 obs) and whether mean is higher or lower.   Score distribution     Histograms vs. box plots  Compare what each plot reveals for the same data.   Histogram and box plot     Facebook friends  Median=100, mean=190 friends. What does this suggest about shape?   Distributions and appropriate statistics I  For pets per household, distance to work, heights of adult males: predict shape; choose mean\/median and SD\/IQR.   Distributions and appropriate statistics II  Do the same for two housing-price scenarios, drinks per week, and Fortune 500 salaries.   Income at the coffee shop  Two high earners added to income distribution (histograms and summary stats provided).   Income before\/after outliers     Which center (mean\/median) is more representative? Discuss robustness.  Which spread (SD\/IQR) better represents variability? Discuss robustness.    Midrange  Is the midrange (avg of min and max) robust to outliers\/skew?   Commute times  Histogram and map of mean work travel time (minutes) for 3,142 US counties.   Commute time distribution and map      Describe numerical distribution; recommend log transform?  Describe spatial pattern.    Hispanic population  Histogram of percent Hispanic in US counties plus log-transformed histogram and map.   Percent Hispanic distributions       Describe distribution and why logs may help.  Features apparent in map vs. histogram and vice versa?  Is one visualization more helpful? Why?     "
},
{
  "id": "ex-mammal-life-spans",
  "level": "2",
  "url": "sec-numerical-data.html#ex-mammal-life-spans",
  "type": "Exercise",
  "number": "2.3.1",
  "title": "Mammal life spans.",
  "body": "Mammal life spans  Scatterplot of gestation length (days) vs. life span (years) for 62 mammals.   Gestation vs. life span     Association direction\/shape?  If axes reversed, what association?  Are variables independent?   "
},
{
  "id": "ex-association-plots",
  "level": "2",
  "url": "sec-numerical-data.html#ex-association-plots",
  "type": "Exercise",
  "number": "2.3.2",
  "title": "Associations.",
  "body": "Associations  Classify four scatterplots (positive\/negative\/none; linear\/nonlinear).   Unlabeled scatterplots    "
},
{
  "id": "ex-reproducing-bacteria",
  "level": "2",
  "url": "sec-numerical-data.html#ex-reproducing-bacteria",
  "type": "Exercise",
  "number": "2.3.3",
  "title": "Reproducing bacteria.",
  "body": "Reproducing bacteria  Sketch number of bacterial cells over time in a dish with limited capacity (logistic growth).  "
},
{
  "id": "ex-office-productivity",
  "level": "2",
  "url": "sec-numerical-data.html#ex-office-productivity",
  "type": "Exercise",
  "number": "2.3.4",
  "title": "Office productivity.",
  "body": "Office productivity  Sketch productivity vs. stress (low at extremes, higher moderate).  "
},
{
  "id": "ex-parameters-statistics",
  "level": "2",
  "url": "sec-numerical-data.html#ex-parameters-statistics",
  "type": "Exercise",
  "number": "2.3.5",
  "title": "Parameters and statistics.",
  "body": "Parameters and statistics  Identify sample mean vs. claimed population mean in two scenarios (Halloween spending; GPA).  "
},
{
  "id": "ex-college-sleeping",
  "level": "2",
  "url": "sec-numerical-data.html#ex-college-sleeping",
  "type": "Exercise",
  "number": "2.3.6",
  "title": "Sleeping in college.",
  "body": "Sleeping in college  Sample mean 6.25 hrs (n=25) vs. claimed population mean 5.5 hrs: identify each.  "
},
{
  "id": "ex-days-off-mining",
  "level": "2",
  "url": "sec-numerical-data.html#ex-days-off-mining",
  "type": "Exercise",
  "number": "2.3.7",
  "title": "Days off at a mining plant.",
  "body": "Days off at a mining plant  Manager wants to fire 10 workers to raise average vacation days (current avg 35). Fire which workers to increase mean?  "
},
{
  "id": "ex-medians-iqr",
  "level": "2",
  "url": "sec-numerical-data.html#ex-medians-iqr",
  "type": "Exercise",
  "number": "2.3.8",
  "title": "Medians and IQRs.",
  "body": "Medians and IQRs  Compare four distribution pairs (give relative medians\/IQRs).  "
},
{
  "id": "ex-means-sds",
  "level": "2",
  "url": "sec-numerical-data.html#ex-means-sds",
  "type": "Exercise",
  "number": "2.3.9",
  "title": "Means and SDs.",
  "body": "Means and SDs  Compare means and SDs for four distribution pairs.  "
},
{
  "id": "ex-hist-box-match",
  "level": "2",
  "url": "sec-numerical-data.html#ex-hist-box-match",
  "type": "Exercise",
  "number": "2.3.10",
  "title": "Mix-and-match.",
  "body": "Mix-and-match  Match three histograms to three box plots; describe distributions.   Histograms and box plots    "
},
{
  "id": "ex-air-quality-durham",
  "level": "2",
  "url": "sec-numerical-data.html#ex-air-quality-durham",
  "type": "Exercise",
  "number": "2.3.11",
  "title": "Air quality.",
  "body": "Air quality  Relative frequency histogram of AQI (n=91 days, Durham NC).   AQI distribution     Estimate median.  Is mean likely above\/below median?  Estimate Q1, Q3, IQR.  Any unusually low\/high days?   "
},
{
  "id": "ex-estimate-mean-median-simple",
  "level": "2",
  "url": "sec-numerical-data.html#ex-estimate-mean-median-simple",
  "type": "Exercise",
  "number": "2.3.12",
  "title": "Median vs. mean.",
  "body": "Median vs. mean  Estimate median from histogram (400 obs) and whether mean is higher or lower.   Score distribution    "
},
{
  "id": "ex-hist-vs-box",
  "level": "2",
  "url": "sec-numerical-data.html#ex-hist-vs-box",
  "type": "Exercise",
  "number": "2.3.13",
  "title": "Histograms vs. box plots.",
  "body": "Histograms vs. box plots  Compare what each plot reveals for the same data.   Histogram and box plot    "
},
{
  "id": "ex-dist-shape-fb-friends",
  "level": "2",
  "url": "sec-numerical-data.html#ex-dist-shape-fb-friends",
  "type": "Exercise",
  "number": "2.3.14",
  "title": "Facebook friends.",
  "body": "Facebook friends  Median=100, mean=190 friends. What does this suggest about shape?  "
},
{
  "id": "ex-dist-shape-pets-distance-height",
  "level": "2",
  "url": "sec-numerical-data.html#ex-dist-shape-pets-distance-height",
  "type": "Exercise",
  "number": "2.3.15",
  "title": "Distributions and appropriate statistics I.",
  "body": "Distributions and appropriate statistics I  For pets per household, distance to work, heights of adult males: predict shape; choose mean\/median and SD\/IQR.  "
},
{
  "id": "ex-dist-shape-housing-alcohol-salary",
  "level": "2",
  "url": "sec-numerical-data.html#ex-dist-shape-housing-alcohol-salary",
  "type": "Exercise",
  "number": "2.3.16",
  "title": "Distributions and appropriate statistics II.",
  "body": "Distributions and appropriate statistics II  Do the same for two housing-price scenarios, drinks per week, and Fortune 500 salaries.  "
},
{
  "id": "ex-income-coffee-shop",
  "level": "2",
  "url": "sec-numerical-data.html#ex-income-coffee-shop",
  "type": "Exercise",
  "number": "2.3.17",
  "title": "Income at the coffee shop.",
  "body": "Income at the coffee shop  Two high earners added to income distribution (histograms and summary stats provided).   Income before\/after outliers     Which center (mean\/median) is more representative? Discuss robustness.  Which spread (SD\/IQR) better represents variability? Discuss robustness.   "
},
{
  "id": "ex-midrange",
  "level": "2",
  "url": "sec-numerical-data.html#ex-midrange",
  "type": "Exercise",
  "number": "2.3.18",
  "title": "Midrange.",
  "body": "Midrange  Is the midrange (avg of min and max) robust to outliers\/skew?  "
},
{
  "id": "ex-county-commute-times",
  "level": "2",
  "url": "sec-numerical-data.html#ex-county-commute-times",
  "type": "Exercise",
  "number": "2.3.19",
  "title": "Commute times.",
  "body": "Commute times  Histogram and map of mean work travel time (minutes) for 3,142 US counties.   Commute time distribution and map      Describe numerical distribution; recommend log transform?  Describe spatial pattern.   "
},
{
  "id": "ex-county-hispanic-pop",
  "level": "2",
  "url": "sec-numerical-data.html#ex-county-hispanic-pop",
  "type": "Exercise",
  "number": "2.3.20",
  "title": "Hispanic population.",
  "body": "Hispanic population  Histogram of percent Hispanic in US counties plus log-transformed histogram and map.   Percent Hispanic distributions       Describe distribution and why logs may help.  Features apparent in map vs. histogram and vice versa?  Is one visualization more helpful? Why?   "
},
{
  "id": "sec-ch02-review",
  "level": "1",
  "url": "sec-ch02-review.html",
  "type": "Section",
  "number": "2.4",
  "title": "Review exercises",
  "body": " Review exercises   Review exercises  Make-up exam  Class of 25: first 24 scored mean 74 (SD 8.9). Make-up student scored 64. Does mean increase\/decrease? New mean? Effect on SD?   Infant mortality  Histogram of infant deaths per 1,000 live births for 224 countries.   Infant mortality distribution     Estimate Q1, median, Q3.  Is mean likely smaller or larger than median?    TV watchers  AP Stats class: mean 4.71 hrs, SD 4.18 hrs per week. Is distribution symmetric? Likely shape?   A new statistic  For $x_i>0$, interpret distribution shape when $\\bar x \/ \\text{median}$ equals 1, less than 1, greater than 1.   Oscar winners  Histograms and summary stats for age of Best Actor vs. Actress winners (1929–2018).   Oscar winner ages    Compare distributions.   Exam scores  History exam mean 85, SD 15 (out of 100). Is distribution symmetric? Likely shape?   Stats scores  Twenty scores listed; create a box plot (five-number summary provided).   Marathon winners  Histogram and box plot of NYC Marathon winning times (1970–1999) plus gender boxplots and time series.   Overall winning times     Winning times by gender     Winning times over years     Histogram vs. box plot: what each shows?  Why bimodal overall distribution?  Compare men vs. women times (boxplots).  What does the time series reveal?     "
},
{
  "id": "ex-makeup-exam",
  "level": "2",
  "url": "sec-ch02-review.html#ex-makeup-exam",
  "type": "Exercise",
  "number": "2.4.1",
  "title": "Make-up exam.",
  "body": "Make-up exam  Class of 25: first 24 scored mean 74 (SD 8.9). Make-up student scored 64. Does mean increase\/decrease? New mean? Effect on SD?  "
},
{
  "id": "ex-infant-mortality",
  "level": "2",
  "url": "sec-ch02-review.html#ex-infant-mortality",
  "type": "Exercise",
  "number": "2.4.2",
  "title": "Infant mortality.",
  "body": "Infant mortality  Histogram of infant deaths per 1,000 live births for 224 countries.   Infant mortality distribution     Estimate Q1, median, Q3.  Is mean likely smaller or larger than median?   "
},
{
  "id": "ex-tv-watchers",
  "level": "2",
  "url": "sec-ch02-review.html#ex-tv-watchers",
  "type": "Exercise",
  "number": "2.4.3",
  "title": "TV watchers.",
  "body": "TV watchers  AP Stats class: mean 4.71 hrs, SD 4.18 hrs per week. Is distribution symmetric? Likely shape?  "
},
{
  "id": "ex-new-stat",
  "level": "2",
  "url": "sec-ch02-review.html#ex-new-stat",
  "type": "Exercise",
  "number": "2.4.4",
  "title": "A new statistic.",
  "body": "A new statistic  For $x_i>0$, interpret distribution shape when $\\bar x \/ \\text{median}$ equals 1, less than 1, greater than 1.  "
},
{
  "id": "ex-oscar-winners",
  "level": "2",
  "url": "sec-ch02-review.html#ex-oscar-winners",
  "type": "Exercise",
  "number": "2.4.5",
  "title": "Oscar winners.",
  "body": "Oscar winners  Histograms and summary stats for age of Best Actor vs. Actress winners (1929–2018).   Oscar winner ages    Compare distributions.  "
},
{
  "id": "ex-exam-scores",
  "level": "2",
  "url": "sec-ch02-review.html#ex-exam-scores",
  "type": "Exercise",
  "number": "2.4.6",
  "title": "Exam scores.",
  "body": "Exam scores  History exam mean 85, SD 15 (out of 100). Is distribution symmetric? Likely shape?  "
},
{
  "id": "ex-stats-scores-box",
  "level": "2",
  "url": "sec-ch02-review.html#ex-stats-scores-box",
  "type": "Exercise",
  "number": "2.4.7",
  "title": "Stats scores.",
  "body": "Stats scores  Twenty scores listed; create a box plot (five-number summary provided).  "
},
{
  "id": "ex-marathon-winners",
  "level": "2",
  "url": "sec-ch02-review.html#ex-marathon-winners",
  "type": "Exercise",
  "number": "2.4.8",
  "title": "Marathon winners.",
  "body": "Marathon winners  Histogram and box plot of NYC Marathon winning times (1970–1999) plus gender boxplots and time series.   Overall winning times     Winning times by gender     Winning times over years     Histogram vs. box plot: what each shows?  Why bimodal overall distribution?  Compare men vs. women times (boxplots).  What does the time series reveal?   "
},
{
  "id": "sec-defining-probability",
  "level": "1",
  "url": "sec-defining-probability.html",
  "type": "Section",
  "number": "3.1",
  "title": "Defining probability",
  "body": " Defining probability   Statistics is based on probability, and while probability is not required for the applied techniques in this book, it may help you gain a deeper understanding of the methods and set a better foundation for future courses.    Introductory examples  To be converted from LaTeX source.   Probability of rolling a 1   A \"die\", the singular of dice, is a cube with six faces numbered 1, 2, 3, 4, 5, and 6. What is the chance of getting 1 when rolling a die?    To be converted from LaTeX source.     Probability of rolling a 1 or 2   What is the chance of getting a 1 or 2 in the next roll?    To be converted from LaTeX source.      Probability  To be converted from LaTeX source.   The fraction of die rolls that are 1 at each stage in a simulation    Random processes  Random processes include rolling a die and flipping a coin. (a) Think of another random process. (b) Describe all the possible outcomes of that process.     Disjoint or mutually exclusive outcomes  To be converted from LaTeX source.    Probabilities when events are not disjoint  To be converted from LaTeX source.    Probability distributions  To be converted from LaTeX source.    Complement of an event  To be converted from LaTeX source.    Independence  To be converted from LaTeX source.   "
},
{
  "id": "ex-prob-of-1",
  "level": "2",
  "url": "sec-defining-probability.html#ex-prob-of-1",
  "type": "Example",
  "number": "3.1.1",
  "title": "Probability of rolling a 1.",
  "body": " Probability of rolling a 1   A \"die\", the singular of dice, is a cube with six faces numbered 1, 2, 3, 4, 5, and 6. What is the chance of getting 1 when rolling a die?    To be converted from LaTeX source.   "
},
{
  "id": "ex-prob-of-1-or-2",
  "level": "2",
  "url": "sec-defining-probability.html#ex-prob-of-1-or-2",
  "type": "Example",
  "number": "3.1.2",
  "title": "Probability of rolling a 1 or 2.",
  "body": " Probability of rolling a 1 or 2   What is the chance of getting a 1 or 2 in the next roll?    To be converted from LaTeX source.   "
},
{
  "id": "fig-die-prop",
  "level": "2",
  "url": "sec-defining-probability.html#fig-die-prop",
  "type": "Figure",
  "number": "3.1.3",
  "title": "",
  "body": " The fraction of die rolls that are 1 at each stage in a simulation   "
},
{
  "id": "ex-random-process",
  "level": "2",
  "url": "sec-defining-probability.html#ex-random-process",
  "type": "Checkpoint",
  "number": "3.1.4",
  "title": "Random processes.",
  "body": "Random processes  Random processes include rolling a die and flipping a coin. (a) Think of another random process. (b) Describe all the possible outcomes of that process.  "
},
{
  "id": "sec-conditional-probability",
  "level": "1",
  "url": "sec-conditional-probability.html",
  "type": "Section",
  "number": "3.2",
  "title": "Conditional probability",
  "body": " Conditional probability   Exploring probabilities with a contingency table  To be converted from LaTeX source.    Marginal and joint probabilities  To be converted from LaTeX source.    Defining conditional probability  To be converted from LaTeX source.    Smallpox in Boston, 1721  To be converted from LaTeX source.    General multiplication rule  To be converted from LaTeX source.    Independence considerations in conditional probability  To be converted from LaTeX source.    Tree diagrams  To be converted from LaTeX source.    Bayes' Theorem  To be converted from LaTeX source.   "
},
{
  "id": "sec-sampling-small-population",
  "level": "1",
  "url": "sec-sampling-small-population.html",
  "type": "Section",
  "number": "3.3",
  "title": "Sampling from a small population",
  "body": " Sampling from a small population   When we sample observations from a population, usually we're only sampling a small fraction of the possible individuals or cases. However, sometimes our sample size is large enough or the population is small enough that we sample more than 10% of a population without replacement.    Selecting a student at random   Professors sometimes select a student at random to answer a question. If each student has an equal chance of being selected and there are 15 people in your class, what is the chance that she will pick you for the next question?    To be converted from LaTeX source.     Three questions without replacement   If the professor asks 3 questions, what is the probability that you will not be selected? Assume that she will not pick the same person twice in a given lecture.    To be converted from LaTeX source.    "
},
{
  "id": "ex-professor-select-student",
  "level": "2",
  "url": "sec-sampling-small-population.html#ex-professor-select-student",
  "type": "Example",
  "number": "3.3.1",
  "title": "Selecting a student at random.",
  "body": " Selecting a student at random   Professors sometimes select a student at random to answer a question. If each student has an equal chance of being selected and there are 15 people in your class, what is the chance that she will pick you for the next question?    To be converted from LaTeX source.   "
},
{
  "id": "ex-3-questions-wo-replacement",
  "level": "2",
  "url": "sec-sampling-small-population.html#ex-3-questions-wo-replacement",
  "type": "Example",
  "number": "3.3.2",
  "title": "Three questions without replacement.",
  "body": " Three questions without replacement   If the professor asks 3 questions, what is the probability that you will not be selected? Assume that she will not pick the same person twice in a given lecture.    To be converted from LaTeX source.   "
},
{
  "id": "sec-random-variables",
  "level": "1",
  "url": "sec-random-variables.html",
  "type": "Section",
  "number": "3.4",
  "title": "Random variables",
  "body": " Random variables   It's often useful to model a process using what's called a random variable. Such a model allows us to apply a mathematical framework and statistical principles for better understanding and predicting outcomes in the real world.    Bookstore sales expectation   Two books are assigned for a statistics class: a textbook and its corresponding study guide. The university bookstore determined 20% of enrolled students do not buy either book, 55% buy the textbook only, and 25% buy both books. If there are 100 students enrolled, how many books should the bookstore expect to sell to this class?    To be converted from LaTeX source.     Expectation  To be converted from LaTeX source.   Probability distribution for the bookstore's revenue from one student      Variability in random variables  To be converted from LaTeX source.    Linear combinations of random variables  To be converted from LaTeX source.   "
},
{
  "id": "ex-bookstore-sales",
  "level": "2",
  "url": "sec-random-variables.html#ex-bookstore-sales",
  "type": "Example",
  "number": "3.4.1",
  "title": "Bookstore sales expectation.",
  "body": " Bookstore sales expectation   Two books are assigned for a statistics class: a textbook and its corresponding study guide. The university bookstore determined 20% of enrolled students do not buy either book, 55% buy the textbook only, and 25% buy both books. If there are 100 students enrolled, how many books should the bookstore expect to sell to this class?    To be converted from LaTeX source.   "
},
{
  "id": "fig-book-cost-dist",
  "level": "2",
  "url": "sec-random-variables.html#fig-book-cost-dist",
  "type": "Figure",
  "number": "3.4.2",
  "title": "",
  "body": " Probability distribution for the bookstore's revenue from one student   "
},
{
  "id": "sec-continuous-distributions",
  "level": "1",
  "url": "sec-continuous-distributions.html",
  "type": "Section",
  "number": "3.5",
  "title": "Continuous distributions",
  "body": " Continuous distributions   So far in this chapter we've discussed cases where the outcome of a variable is discrete. In this section, we consider a context where the outcome is a continuous numerical variable.    US adult heights histograms   Figure shows a few different hollow histograms for the heights of US adults. How does changing the number of bins allow you to make different interpretations of the data?    To be converted from LaTeX source.     Four hollow histograms of US adults heights with varying bin widths     From histograms to continuous distributions  To be converted from LaTeX source.   The continuous probability distribution of heights for US adults      Probabilities from continuous distributions  To be converted from LaTeX source.   Density for heights with the area between 180 and 185 cm shaded     "
},
{
  "id": "ex-us-heights",
  "level": "2",
  "url": "sec-continuous-distributions.html#ex-us-heights",
  "type": "Example",
  "number": "3.5.1",
  "title": "US adult heights histograms.",
  "body": " US adult heights histograms   Figure shows a few different hollow histograms for the heights of US adults. How does changing the number of bins allow you to make different interpretations of the data?    To be converted from LaTeX source.   "
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
  "id": "fig-fdic-height-cont-dist",
  "level": "2",
  "url": "sec-continuous-distributions.html#fig-fdic-height-cont-dist",
  "type": "Figure",
  "number": "3.5.3",
  "title": "",
  "body": " The continuous probability distribution of heights for US adults   "
},
{
  "id": "fig-fdic-height-filled",
  "level": "2",
  "url": "sec-continuous-distributions.html#fig-fdic-height-filled",
  "type": "Figure",
  "number": "3.5.4",
  "title": "",
  "body": " Density for heights with the area between 180 and 185 cm shaded   "
},
{
  "id": "sec-normal-distribution",
  "level": "1",
  "url": "sec-normal-distribution.html",
  "type": "Section",
  "number": "4.1",
  "title": "Normal distribution",
  "body": " Normal distribution   Among all the distributions we see in practice, one is overwhelmingly the most common. The symmetric, unimodal, bell curve is ubiquitous throughout statistics. Indeed it is so common, that people often know it as the normal curve or normal distribution.   A normal curve    Variables such as SAT scores and heights of US adult males closely follow the normal distribution.    Normal distribution model  The normal distribution always describes a symmetric, unimodal, bell-shaped curve. However, these curves can look different depending on the details of the model. Specifically, the normal distribution model can be adjusted using two parameters: mean and standard deviation.   Two normal distributions with different parameters     The normal distributions plotted together on the same scale    To be converted from LaTeX source.    Standardizing with Z-scores  We often want to put data onto a standardized scale, which can make comparisons more reasonable.  To be converted from LaTeX source.    Finding tail areas  To be converted from LaTeX source.    Normal probability examples  To be converted from LaTeX source.    68-95-99.7 rule  To be converted from LaTeX source.   "
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
  "id": "fig-two-sample-normals",
  "level": "2",
  "url": "sec-normal-distribution.html#fig-two-sample-normals",
  "type": "Figure",
  "number": "4.1.2",
  "title": "",
  "body": " Two normal distributions with different parameters   "
},
{
  "id": "fig-two-sample-normals-stacked",
  "level": "2",
  "url": "sec-normal-distribution.html#fig-two-sample-normals-stacked",
  "type": "Figure",
  "number": "4.1.3",
  "title": "",
  "body": " The normal distributions plotted together on the same scale   "
},
{
  "id": "sec-geometric-distribution",
  "level": "1",
  "url": "sec-geometric-distribution.html",
  "type": "Section",
  "number": "4.2",
  "title": "Geometric distribution",
  "body": " Geometric distribution   Bernoulli distribution  To be converted from LaTeX source.   Bernoulli random variable for a coin flip   Consider a single coin flip. Define a random variable X that takes value 1 if the coin lands heads and 0 if it lands tails. Is X a Bernoulli random variable?    To be converted from LaTeX source.      Geometric distribution  To be converted from LaTeX source.   Geometric distribution for eye color   Suppose we observe individuals one at a time until we find someone with blue eyes. Let X represent the number of people observed. What is the probability distribution of X?    To be converted from LaTeX source.     Geometric distribution with p = 0.35     Geometric distribution with p = 0.70     "
},
{
  "id": "ex-bernoulli-coin",
  "level": "2",
  "url": "sec-geometric-distribution.html#ex-bernoulli-coin",
  "type": "Example",
  "number": "4.2.1",
  "title": "Bernoulli random variable for a coin flip.",
  "body": " Bernoulli random variable for a coin flip   Consider a single coin flip. Define a random variable X that takes value 1 if the coin lands heads and 0 if it lands tails. Is X a Bernoulli random variable?    To be converted from LaTeX source.   "
},
{
  "id": "ex-geometric-eye-color",
  "level": "2",
  "url": "sec-geometric-distribution.html#ex-geometric-eye-color",
  "type": "Example",
  "number": "4.2.2",
  "title": "Geometric distribution for eye color.",
  "body": " Geometric distribution for eye color   Suppose we observe individuals one at a time until we find someone with blue eyes. Let X represent the number of people observed. What is the probability distribution of X?    To be converted from LaTeX source.   "
},
{
  "id": "fig-geometric-dist-35",
  "level": "2",
  "url": "sec-geometric-distribution.html#fig-geometric-dist-35",
  "type": "Figure",
  "number": "4.2.3",
  "title": "",
  "body": " Geometric distribution with p = 0.35   "
},
{
  "id": "fig-geometric-dist-70",
  "level": "2",
  "url": "sec-geometric-distribution.html#fig-geometric-dist-70",
  "type": "Figure",
  "number": "4.2.4",
  "title": "",
  "body": " Geometric distribution with p = 0.70   "
},
{
  "id": "sec-binomial-distribution",
  "level": "1",
  "url": "sec-binomial-distribution.html",
  "type": "Section",
  "number": "4.3",
  "title": "Binomial distribution",
  "body": " Binomial distribution   The binomial distribution describes the probability of having exactly k successes in n independent Bernoulli trials with probability of success p.    The binomial distribution  To be converted from LaTeX source.   Underage drinking   Suppose we randomly sample 10 high school students and ask if they have consumed alcohol in the last month. What is the probability that exactly 2 of them say yes?    To be converted from LaTeX source.      Normal approximation to the binomial distribution  To be converted from LaTeX source.   Four binomial models showing approximation to normal      The normal approximation breaks down on small intervals  To be converted from LaTeX source.   Normal approximation to binomial can fail on small intervals     "
},
{
  "id": "ex-binomial-underage-drinking",
  "level": "2",
  "url": "sec-binomial-distribution.html#ex-binomial-underage-drinking",
  "type": "Example",
  "number": "4.3.1",
  "title": "Underage drinking.",
  "body": " Underage drinking   Suppose we randomly sample 10 high school students and ask if they have consumed alcohol in the last month. What is the probability that exactly 2 of them say yes?    To be converted from LaTeX source.   "
},
{
  "id": "fig-four-binomial-approx",
  "level": "2",
  "url": "sec-binomial-distribution.html#fig-four-binomial-approx",
  "type": "Figure",
  "number": "4.3.2",
  "title": "",
  "body": " Four binomial models showing approximation to normal   "
},
{
  "id": "fig-norm-approx-binomial-fail",
  "level": "2",
  "url": "sec-binomial-distribution.html#fig-norm-approx-binomial-fail",
  "type": "Figure",
  "number": "4.3.3",
  "title": "",
  "body": " Normal approximation to binomial can fail on small intervals   "
},
{
  "id": "sec-negative-binomial",
  "level": "1",
  "url": "sec-negative-binomial.html",
  "type": "Section",
  "number": "4.4",
  "title": "Negative binomial distribution",
  "body": " Negative binomial distribution   The negative binomial distribution describes the probability of observing the kth success on the nth trial, where each trial has probability p of success and all trials are independent.   To be converted from LaTeX source.   Negative binomial example   Suppose we are interested in the number of people we need to survey until we find 3 people who support a particular policy. If each person has a 40% chance of supporting the policy, what is the probability we need to survey exactly 10 people?    To be converted from LaTeX source.    "
},
{
  "id": "ex-negative-binomial",
  "level": "2",
  "url": "sec-negative-binomial.html#ex-negative-binomial",
  "type": "Example",
  "number": "4.4.1",
  "title": "Negative binomial example.",
  "body": " Negative binomial example   Suppose we are interested in the number of people we need to survey until we find 3 people who support a particular policy. If each person has a 40% chance of supporting the policy, what is the probability we need to survey exactly 10 people?    To be converted from LaTeX source.   "
},
{
  "id": "sec-poisson-distribution",
  "level": "1",
  "url": "sec-poisson-distribution.html",
  "type": "Section",
  "number": "4.5",
  "title": "Poisson distribution",
  "body": " Poisson distribution   The Poisson distribution is used to describe the number of rare events that occur in a fixed amount of time or space when the events occur independently and at a constant average rate.   To be converted from LaTeX source.   Website visits   A website receives an average of 2 visits per minute. What is the probability the website receives exactly 5 visits in the next minute?    To be converted from LaTeX source.    "
},
{
  "id": "ex-poisson-visits",
  "level": "2",
  "url": "sec-poisson-distribution.html#ex-poisson-visits",
  "type": "Example",
  "number": "4.5.1",
  "title": "Website visits.",
  "body": " Website visits   A website receives an average of 2 visits per minute. What is the probability the website receives exactly 5 visits in the next minute?    To be converted from LaTeX source.   "
},
{
  "id": "sec-point-estimates",
  "level": "1",
  "url": "sec-point-estimates.html",
  "type": "Section",
  "number": "5.1",
  "title": "Point estimates and sampling variability",
  "body": " Point estimates and sampling variability   Companies such as Pew Research frequently conduct polls as a way to understand the state of public opinion or knowledge on many topics, including politics, scientific understanding, brand recognition, and more. The ultimate goal in taking a poll is generally to use the responses to estimate the opinion or knowledge of the broader population.    Point estimates and error  Suppose a poll suggested the US President's approval rating is 45%. We would consider 45% to be a point estimate of the approval rating we might see if we collected responses from the entire population.  To be converted from LaTeX source.    Understanding the variability of a point estimate  To be converted from LaTeX source.    Central Limit Theorem  To be converted from LaTeX source.   Central Limit Theorem for proportions   Describe the sampling distribution for the sample proportion when sampling from a population where the true proportion is 0.3.    To be converted from LaTeX source.     Sampling distributions showing Central Limit Theorem      Applying the Central Limit Theorem to proportions  To be converted from LaTeX source.   Sampling distribution of sample proportion      More details regarding the Central Limit Theorem  To be converted from LaTeX source.    Extending the framework for other statistics  To be converted from LaTeX source.   "
},
{
  "id": "ex-clt-proportions",
  "level": "2",
  "url": "sec-point-estimates.html#ex-clt-proportions",
  "type": "Example",
  "number": "5.1.1",
  "title": "Central Limit Theorem for proportions.",
  "body": " Central Limit Theorem for proportions   Describe the sampling distribution for the sample proportion when sampling from a population where the true proportion is 0.3.    To be converted from LaTeX source.   "
},
{
  "id": "fig-clt-prop-grid",
  "level": "2",
  "url": "sec-point-estimates.html#fig-clt-prop-grid",
  "type": "Figure",
  "number": "5.1.2",
  "title": "",
  "body": " Sampling distributions showing Central Limit Theorem   "
},
{
  "id": "fig-p-hat-from-53-59",
  "level": "2",
  "url": "sec-point-estimates.html#fig-p-hat-from-53-59",
  "type": "Figure",
  "number": "5.1.3",
  "title": "",
  "body": " Sampling distribution of sample proportion   "
},
{
  "id": "sec-confidence-intervals",
  "level": "1",
  "url": "sec-confidence-intervals.html",
  "type": "Section",
  "number": "5.2",
  "title": "Confidence intervals for a proportion",
  "body": " Confidence intervals for a proportion   A point estimate provides a single plausible value for a parameter. However, a point estimate is rarely perfect; usually there is some error in the estimate. Instead of supplying just a point estimate, a confidence interval provides a plausible range of values for the parameter.    Capturing the population parameter  To be converted from LaTeX source.   95% confidence interval illustration      Constructing a 95% confidence interval  To be converted from LaTeX source.   Constructing a confidence interval   In a poll of 1000 registered voters, 540 say they will vote for Candidate A. Construct a 95% confidence interval for the proportion of all registered voters who will vote for Candidate A.    To be converted from LaTeX source.     Choosing the z-value for confidence intervals      Changing the confidence level  To be converted from LaTeX source.    More case studies  To be converted from LaTeX source.    Interpreting confidence intervals  To be converted from LaTeX source.   "
},
{
  "id": "fig-95-percent-ci",
  "level": "2",
  "url": "sec-confidence-intervals.html#fig-95-percent-ci",
  "type": "Figure",
  "number": "5.2.1",
  "title": "",
  "body": " 95% confidence interval illustration   "
},
{
  "id": "ex-construct-ci",
  "level": "2",
  "url": "sec-confidence-intervals.html#ex-construct-ci",
  "type": "Example",
  "number": "5.2.2",
  "title": "Constructing a confidence interval.",
  "body": " Constructing a confidence interval   In a poll of 1000 registered voters, 540 say they will vote for Candidate A. Construct a 95% confidence interval for the proportion of all registered voters who will vote for Candidate A.    To be converted from LaTeX source.   "
},
{
  "id": "fig-choosing-z-for-ci",
  "level": "2",
  "url": "sec-confidence-intervals.html#fig-choosing-z-for-ci",
  "type": "Figure",
  "number": "5.2.3",
  "title": "",
  "body": " Choosing the z-value for confidence intervals   "
},
{
  "id": "sec-hypothesis-testing",
  "level": "1",
  "url": "sec-hypothesis-testing.html",
  "type": "Section",
  "number": "5.3",
  "title": "Hypothesis testing for a proportion",
  "body": " Hypothesis testing for a proportion   Confidence intervals are useful for estimating parameters, but they are not the only way to make use of sample data. In this section we introduce hypothesis testing, which is a formal technique for making decisions based on data and evaluating claims about a population.    Hypothesis testing framework  To be converted from LaTeX source.   Jury selection   In a particular county, 80% of registered voters are white. A jury of 12 people is selected, and only 8 are white. Does this provide evidence of discrimination in jury selection?    To be converted from LaTeX source.     P-value for jury selection hypothesis test      Testing hypotheses using confidence intervals  To be converted from LaTeX source.    Decision errors  To be converted from LaTeX source.   Types of errors in hypothesis testing     H true  H true    Reject H  Type I Error  Correct decision    Fail to reject H  Correct decision  Type II Error       Formal testing using p-values  To be converted from LaTeX source.   Computing a p-value   A poll of 500 voters finds that 270 support a particular policy. Test whether this provides evidence that more than half of all voters support the policy.    To be converted from LaTeX source.     Computing p-value from normal distribution      Choosing a significance level  To be converted from LaTeX source.    Statistical significance versus practical significance  To be converted from LaTeX source.    One-sided hypothesis tests (special topic)  To be converted from LaTeX source.   One-sided hypothesis test illustration     "
},
{
  "id": "ex-jury-selection",
  "level": "2",
  "url": "sec-hypothesis-testing.html#ex-jury-selection",
  "type": "Example",
  "number": "5.3.1",
  "title": "Jury selection.",
  "body": " Jury selection   In a particular county, 80% of registered voters are white. A jury of 12 people is selected, and only 8 are white. Does this provide evidence of discrimination in jury selection?    To be converted from LaTeX source.   "
},
{
  "id": "fig-juror-ht-pvalue",
  "level": "2",
  "url": "sec-hypothesis-testing.html#fig-juror-ht-pvalue",
  "type": "Figure",
  "number": "5.3.2",
  "title": "",
  "body": " P-value for jury selection hypothesis test   "
},
{
  "id": "table-decision-errors",
  "level": "2",
  "url": "sec-hypothesis-testing.html#table-decision-errors",
  "type": "Table",
  "number": "5.3.3",
  "title": "Types of errors in hypothesis testing",
  "body": " Types of errors in hypothesis testing     H true  H true    Reject H  Type I Error  Correct decision    Fail to reject H  Correct decision  Type II Error    "
},
{
  "id": "ex-pvalue-computation",
  "level": "2",
  "url": "sec-hypothesis-testing.html#ex-pvalue-computation",
  "type": "Example",
  "number": "5.3.4",
  "title": "Computing a p-value.",
  "body": " Computing a p-value   A poll of 500 voters finds that 270 support a particular policy. Test whether this provides evidence that more than half of all voters support the policy.    To be converted from LaTeX source.   "
},
{
  "id": "fig-normal-dist-pvalue",
  "level": "2",
  "url": "sec-hypothesis-testing.html#fig-normal-dist-pvalue",
  "type": "Figure",
  "number": "5.3.5",
  "title": "",
  "body": " Computing p-value from normal distribution   "
},
{
  "id": "fig-business-one-sided",
  "level": "2",
  "url": "sec-hypothesis-testing.html#fig-business-one-sided",
  "type": "Figure",
  "number": "5.3.6",
  "title": "",
  "body": " One-sided hypothesis test illustration   "
},
{
  "id": "sec-one-prop",
  "level": "1",
  "url": "sec-one-prop.html",
  "type": "Section",
  "number": "6.1",
  "title": "Inference for a single proportion",
  "body": " Inference for a single proportion  Content to be converted from LaTeX source.  "
},
{
  "id": "sec-one-mean",
  "level": "1",
  "url": "sec-one-mean.html",
  "type": "Section",
  "number": "7.1",
  "title": "Inference for a single mean",
  "body": " Inference for a single mean  Content to be converted from LaTeX source.  "
},
{
  "id": "sec-line-best-fit",
  "level": "1",
  "url": "sec-line-best-fit.html",
  "type": "Section",
  "number": "8.1",
  "title": "Line fitting and residuals",
  "body": " Line fitting and residuals  Content to be converted from LaTeX source.  "
},
{
  "id": "sec-multiple-regression",
  "level": "1",
  "url": "sec-multiple-regression.html",
  "type": "Section",
  "number": "9.1",
  "title": "Multiple regression",
  "body": " Multiple regression  Content to be converted from LaTeX source.  "
},
{
  "id": "sec-logistic-regression",
  "level": "1",
  "url": "sec-logistic-regression.html",
  "type": "Section",
  "number": "9.2",
  "title": "Logistic regression",
  "body": " Logistic regression  Content to be converted from LaTeX source.  "
},
{
  "id": "appendix-data-sets",
  "level": "1",
  "url": "appendix-data-sets.html",
  "type": "Appendix",
  "number": "A",
  "title": "Data Sets",
  "body": " Data Sets  This appendix contains descriptions of the data sets used throughout the textbook. (To be populated with converted data descriptions)  "
},
{
  "id": "appendix-tables",
  "level": "1",
  "url": "appendix-tables.html",
  "type": "Appendix",
  "number": "B",
  "title": "Statistical Tables",
  "body": " Statistical Tables  This appendix contains statistical tables including z-table, t-table, and chi-square table. (To be populated with converted tables)  "
},
{
  "id": "solutions-1",
  "level": "1",
  "url": "solutions-1.html",
  "type": "Appendix",
  "number": "C",
  "title": "Selected Solutions",
  "body": " Selected Solutions  "
},
{
  "id": "index-1",
  "level": "1",
  "url": "index-1.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
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

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
