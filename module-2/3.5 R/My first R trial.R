3+4
x=3
y=4
x+y
3*4
5-7
x<-3
y=5

# Assign the value
b=10
V10=100

# Import the file 相当于pythoin的 pd.read_csv(' ')
Admin2 <- read.csv("/cloud/project/Admission_Predict.csv")


# See a summary of the dataset. 相当于ptyhon的desicribe功能
summary(Admin)
# See the data types. 相当于python的.dtypes
str(Admin)
# See the head.相当于python的head（）
head(Admin)


# Rename column(all columns affected)
colnames(Admin2) <- c('Ironhack number','Ironhack score')
# Rename specific column, only TOEFL column
names(Admin)[names(Admin)=='TOEFL.Score']<-'ILETS.Score'



# Change the TOEFL for IELTS between 93 and 102 on TOEFT=7 on IELTS
Admin$ILETS.Score[Admin$ILETS.Score > 93 & Admin$ILETS.Score < 102] <-7



# Caculate (min, max,median,mean,Quantiles)
min(Admin$ILETS.Score)  #7
max(Admin$ILETS.Score)  #120
median(Admin$ILETS.Score) #107
mean(Admin$ILETS.Score)  #91.3225
quantile(Admin$ILETS.Score) # 全部的
# 0%  25%  50%  75% 100% 
# 7  103  107  112  120 
quantile(Admin$ILETS.Score,c(.30,.60))  #指定的quantile 30% 60%


# Visualization 这个网站www.r-graph-gallery.com
# Histogram
hist(Admin$GRE.Score)  
hist(Admin$GRE.Score, main = 'Histogram for Ironhack', xlab = 'GRE', ylab = 'Frequency')
# Boxplot
boxplot(Admin$SOP~Admin$LOR) # sop是y, lor是x
# Scatter
library(ggplot2)
ggplot(Admission_Predict,aes(GRE.Score,TOEFL.Score))+geom_point()
# Histogram
ggplot(Admin, aes(GRE.Score))+geom_histogram()



# Statistical Analysis
# Correlation
cor.test(Admin$University.Rating, Admin$Chance.of.Admit)  # 0.7112503 

# T test
# measure the efficiency of a web server ( have imported the server.txt file)
# Null hypothesis: the mean is not 9, confidence level 90%
t.test(Server$V1, mu=9, conf.level=0.9)   
# t = 7.3445, df = 49, p-value = 1.945e-09, sample estimates:mean of x 9.935 

