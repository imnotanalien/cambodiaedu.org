# To ckeck AWS CLI connected with IAM user or not by "~/.aws/credentials" and "~/.aws/config"
import boto3
import time
 
# Create CloudFront client
cf = boto3.client("cloudfront")

# This is the CloudFront Distribution ID.
DISTRIBUTION_ID = "EKB1H8KYYF0UP"

# Create CloudFront invalidation.
def create_invalidation():
    res = cf.create_invalidation(
        DistributionId=DISTRIBUTION_ID,
        InvalidationBatch={
            'Paths': {
                'Quantity': 1,
                'Items': [
                    "/static/src/*",
                ]
            },
            'CallerReference': str(time.time()).replace(".", "")
        }
    )
    invalidation_id = res['Invalidation']['Id']
    return invalidation_id

# Create CloudFront Invalidation.
id = create_invalidation()
print("Invalidation created successfully with Id: " + id)
