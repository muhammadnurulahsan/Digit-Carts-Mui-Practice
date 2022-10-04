import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineOppositeContent,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

export const MuiTimeline = () => {
  return (
    <>
      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Address</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Payment</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>Checkout</TimelineContent>
        </TimelineItem>
      </Timeline>

      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Address</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Payment</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
          </TimelineSeparator>
          <TimelineContent>Checkout</TimelineContent>
        </TimelineItem>
      </Timeline>

      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="error" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Address</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="error" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Payment</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="error" variant="outlined" />
          </TimelineSeparator>
          <TimelineContent>Checkout</TimelineContent>
        </TimelineItem>
      </Timeline>

      <Timeline position="left">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="warning" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Address</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="warning" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Payment</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="warning" variant="outlined" />
          </TimelineSeparator>
          <TimelineContent>Checkout</TimelineContent>
        </TimelineItem>
      </Timeline>

      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="warning" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Address</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="warning" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Payment</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="warning" variant="outlined" />
          </TimelineSeparator>
          <TimelineContent>Checkout</TimelineContent>
        </TimelineItem>
      </Timeline>

      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            09:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="warning" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Sipped</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            11:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="warning" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Pick Up</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            01:30 pm
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="warning" variant="outlined" />
          </TimelineSeparator>
          <TimelineContent>Delivered</TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};
